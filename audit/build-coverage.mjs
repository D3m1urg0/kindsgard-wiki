import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import matter from 'gray-matter';
import {execFileSync} from 'node:child_process';
const baseline='b25eae3936a12ed5f1ed9312d0d3dbdef55a5bd5';
const hash=s=>crypto.createHash('sha256').update(s.toString().replace(/\r\n/g,'\n')).digest('hex');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.posix.join(dir,e.name)):e.name.endsWith('.md')?[path.posix.join(dir,e.name)]:[]).sort();}
const files=walk('content');
const report=fs.readFileSync('content/meta/esito-audit.md','utf8');
const rows=[...report.matchAll(/^\| `([^`]+\.md)` \| (.+?) \| (.+?) \|\r?$/gm)];
if(rows.length!==31)throw Error('matrix '+rows.length);
const matrix=new Map(rows.map(x=>['content/'+x[1],{comparedNuclei:x[2],residuals:x[3]}]));
const pages=files.filter(p=>!p.startsWith('content/fonti/')&&!p.startsWith('content/meta/')&&p!=='content/_changelog.md');
if(pages.length!==31||pages.some(p=>!matrix.has(p)))throw Error('page matrix incomplete');
function inventory(p){const raw=fs.readFileSync(p,'utf8'), doc=matter(raw),lines=raw.split(/\r?\n/);let start=0,blocks=[],sections=[];
 for(let i=0;i<=lines.length;i++){
  if(i<lines.length&&/^#{1,6} /.test(lines[i]))sections.push({line:i+1,heading:lines[i]});
  if(i===lines.length||!lines[i].trim()){if(i>start){const text=lines.slice(start,i).join('\n');blocks.push({startLine:start+1,endLine:i,sha256:hash(text),status:'inventariato; non prova atomica'});}start=i+1;}
 }
 return {path:p,sha256:hash(raw),title:doc.data.titolo,status:doc.data.status,sourceIds:doc.data.fonti??[],sections,blocks,...matrix.get(p)};
}
const sources=files.filter(p=>p.startsWith('content/fonti/'));
const meta=files.filter(p=>p.startsWith('content/meta/')||p==='content/_changelog.md');
const out={baseline,date:'2026-11-02',method:'SHA-256 sul testo UTF-8 normalizzato a LF; blocchi contigui non vuoti, posizioni 1-based. Frontmatter incluso nel censimento, non è evidenza semantica. Nuclei e residui trascritti dalla matrice del report.',semanticStatus:'Passata sulle 31 pagine; nessuna certificazione atomica automatica. Residui nel report e L22.',counts:{markdown:files.length,sources:sources.length,pages:pages.length,registers:meta.length},pages:pages.map(inventory),sources:sources.map(p=>{const d=matter(fs.readFileSync(p,'utf8')).data;return{path:p,sha256:hash(fs.readFileSync(p)),title:d.titolo,status:d.status};})};
if(files.length!==67||sources.length!==29||meta.length!==7)throw Error(JSON.stringify(out.counts));
fs.mkdirSync('audit',{recursive:true});fs.writeFileSync('audit/coverage-2026-11-02.json',JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify({counts:out.counts,sourceStatuses:out.sources.reduce((a,s)=>(a[s.status]=(a[s.status]??0)+1,a),{})}));
// Exclude only explicitly editorial boundaries. Compare all retained source text exactly,
// allowing line-ending normalization; never use semantic normalization for primary prose.
function primary(raw){let s=raw.replace(/^\uFEFF/,'').replace(/\r\n/g,'\n').replace(/^---\n[\s\S]*?\n---\n/,'');s=s.split(/^## Note(?:\s|$)/m)[0];return s.split('\n').filter(l=>!/^>/.test(l)&&!/^→/.test(l)&&!/^# (?!#)/.test(l)&&!/^---\s*$/.test(l)).join('\n').trim();}
let changed=[];
for(const p of sources){const old=execFileSync('git',['show',baseline+':'+p],{encoding:'utf8'}),now=fs.readFileSync(p,'utf8');if(primary(old)!==primary(now))changed.push(p);}
console.log(JSON.stringify({primaryComparison:'exact retained text; excludes frontmatter, H1, blockquote editorial introductions, final Note apparatus and arrow navigation',different:changed}));
if(changed.length)process.exitCode=1;
