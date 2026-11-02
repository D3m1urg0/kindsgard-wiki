"""Verify the restored text and the retained DOCX exports without external packages."""
from pathlib import Path
import json,hashlib,html,re,zipfile,io,xml.etree.ElementTree as ET

root=Path(__file__).resolve().parent.parent
manifest=json.loads((root/'audit/ripristino-fonti-2026-11-02.json').read_text(encoding='utf8'))
ns={'w':'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
def digest(b):return hashlib.sha256(b).hexdigest()
archive=zipfile.ZipFile(root/manifest['originalsArchive'])
assert digest((root/manifest['originalsArchive']).read_bytes())==manifest['archiveSha256']
def original_bytes(p):return archive.read(p.removeprefix('non-wiki/'))
assert len([p for p in archive.namelist() if p.endswith('.docx')])==len(manifest['originals'])
for item in manifest['originals']:
 assert digest(original_bytes('non-wiki/fonti-originali/quip/'+item['file']))==item['sha256'],item['file']
def extract(p):
 with zipfile.ZipFile(io.BytesIO(original_bytes(p))) as z:
  tree=ET.fromstring(z.read('word/document.xml'));paras=[]
  for para in tree.findall('.//w:body//w:p',ns):
   parts=[]
   for e in para.iter():
    if e.tag=='{'+ns['w']+'}t':parts.append(e.text or '')
    elif e.tag=='{'+ns['w']+'}tab':parts.append('\t')
    elif e.tag in ['{'+ns['w']+'}br','{'+ns['w']+'}cr']:parts.append('\n')
   paras.append(''.join(parts))
  return '\n'.join(paras)
count=0;unverified=[]
for page in manifest['pages']:
 text=(root/page['page']).read_text(encoding='utf8')
 blocks=re.findall(r'<pre class="testo-originale" style="white-space: pre-wrap; font: inherit; background: transparent; padding: 0;">\n([\s\S]*?)\n</pre>',text)
 expected=[s for s in page['segments'] if 'original' in s]
 assert len(blocks)==len(expected),(page['page'],'block count')
 for encoded,s in zip(blocks,expected):
  snapshot=original_bytes(s['extraction']).decode('utf8')
  assert digest(original_bytes(s['original']))==s['docxSha256'],s['original']
  assert digest(snapshot.encode())==s['textSha256'],s['extraction']
  assert extract(s['original'])==snapshot,('extraction',s['original'])
  assert html.unescape(encoded)==snapshot,('transcription',page['page'],s['label'])
  count+=1
 unverified.extend((page['page'],s['label']) for s in page['segments'] if 'original' not in s)
print(f'{len(manifest["pages"])} source pages; {count} original segments identical; {len(unverified)} segments awaiting originals.')
for page,label in unverified:print(f'UNVERIFIED {page}: {label}')
