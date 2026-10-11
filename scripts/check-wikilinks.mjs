import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

const root = path.resolve("content")

async function markdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const out = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await markdownFiles(full)))
    else if (entry.isFile() && entry.name.endsWith(".md")) out.push(full)
  }
  return out
}

function slugify(value) {
  let slug = value
    .replace(/\.md$/i, "")
    .replace(/\s/g, "-")
    .replace(/&/g, "-and-")
    .replace(/%/g, "-percent")
    .replace(/[?#]/g, "")
    .replace(/\/$/, "")
  if (slug === "_index") slug = "index"
  else slug = slug.replace(/\/_index$/, "/index")
  return slug
}

function inferredAliases(data, stem) {
  const aliases = Array.isArray(data.aliases) ? [...data.aliases] : []
  if (data.alias) aliases.push(...(Array.isArray(data.alias) ? data.alias : [data.alias]))
  if (data.titolo != null) aliases.push(String(data.titolo))
  const humanStem = stem.replace(/^_+/, "").split(/[-_]+/).filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ")
  if (humanStem) aliases.push(humanStem)
  const title = String(data.title ?? data.titolo ?? stem)
  const withoutArticle = title.replace(/^(?:il|lo|la|i|gli|le|l['’])\s+/i, "")
  if (withoutArticle !== title) aliases.push(withoutArticle)
  return [...new Set(aliases.filter(Boolean))]
}

const files = await markdownFiles(root)
const slugOwners = new Map()
const fileRecords = []
function addSlug(slug, file) {
  const value = slugify(slug)
  if (!slugOwners.has(value)) slugOwners.set(value, new Set())
  slugOwners.get(value).add(file)
}
for (const file of files) {
  const source = await fs.readFile(file, "utf8")
  const parsed = matter(source)
  const rel = path.relative(root, file).split(path.sep).join("/")
  const stem = path.basename(rel, ".md")
  addSlug(rel, rel)
  for (const alias of inferredAliases(parsed.data, stem)) addSlug(alias, rel)
  fileRecords.push({ rel, source: parsed.content })
}
// Quartz also emits folder index pages. Their canonical URL is the folder path.
for (const file of files) {
  const rel = path.relative(root, file).split(path.sep).join("/")
  const parts = rel.split("/")
  parts.pop()
  for (let i = 1; i <= parts.length; i++) addSlug(parts.slice(0, i).join("/") + "/index", parts.slice(0, i).join("/") + "/[folder index]")
}

const unresolved = []
const collisions = [...slugOwners.entries()]
  .filter(([, owners]) => owners.size > 1)
  .map(([slug, owners]) => ({ slug, owners: [...owners] }))

const fence = String.fromCharCode(96).repeat(3)
for (const file of fileRecords) {
  const body = file.source.split(fence).filter((_, index) => index % 2 === 0).join("")
  const re = /!?\[\[([^\]]+)\]\]/g
  let match
  while ((match = re.exec(body))) {
    const rawTarget = match[1].split("|")[0].split("#")[0].trim()
    if (!rawTarget || /^https?:\/\//i.test(rawTarget)) continue
    const target = slugify(rawTarget)
    const exact = slugOwners.has(target)
    const basenameMatches = [...slugOwners.keys()].filter((slug) => slug.split("/").at(-1) === target)
    const folderTarget = rawTarget.endsWith("/") && slugOwners.has(target + "/index")
    if (!exact && basenameMatches.length !== 1 && !folderTarget) {
      unresolved.push({ file: file.rel, target: rawTarget })
    }
  }
}

console.log("Checked " + files.length + " Markdown files; " + unresolved.length + " unresolved wikilink targets; " + collisions.length + " alias/slug collisions.")
for (const item of unresolved.slice(0, 250)) console.log("UNRESOLVED " + item.file + " -> [[" + item.target + "]]")
for (const item of collisions.slice(0, 100)) console.log("COLLISION " + item.slug + " -> " + item.owners.join(", "))
if (unresolved.length || collisions.length) process.exitCode = 1
