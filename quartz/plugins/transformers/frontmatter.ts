import matter from "gray-matter"
import remarkFrontmatter from "remark-frontmatter"
import { QuartzTransformerPlugin } from "../types"
import yaml from "js-yaml"
import toml from "toml"
import { FilePath, FullSlug, getFileExtension, slugifyFilePath, slugTag } from "../../util/path"
import { QuartzPluginData } from "../vfile"
import { i18n } from "../../i18n"

export interface Options {
  delimiters: string | [string, string]
  language: "yaml" | "toml"
}

const defaultOptions: Options = {
  delimiters: "---",
  language: "yaml",
}

function coalesceAliases(data: { [key: string]: any }, aliases: string[]) {
  for (const alias of aliases) {
    if (data[alias] !== undefined && data[alias] !== null) return data[alias]
  }
}

function coerceToArray(input: string | string[]): string[] | undefined {
  if (input === undefined || input === null) return undefined

  // coerce to array
  if (!Array.isArray(input)) {
    input = input
      .toString()
      .split(",")
      .map((tag: string) => tag.trim())
  }

  // remove all non-strings
  return input
    .filter((tag: unknown) => typeof tag === "string" || typeof tag === "number")
    .map((tag: string | number) => tag.toString())
}

function getAliasSlugs(aliases: string[]): FullSlug[] {
  const res: FullSlug[] = []
  for (const alias of aliases) {
    const isMd = getFileExtension(alias) === "md"
    const mockFp = isMd ? alias : alias + ".md"
    const slug = slugifyFilePath(mockFp as FilePath)
    res.push(slug)
  }

  return res
}

export const FrontMatter: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "FrontMatter",
    markdownPlugins(ctx) {
      const { cfg, allSlugs } = ctx
      return [
        [remarkFrontmatter, ["yaml", "toml"]],
        () => {
          return (_, file) => {
            const fileData = Buffer.from(file.value as Uint8Array)
            const { data } = matter(fileData, {
              ...opts,
              engines: {
                yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
                toml: (s) => toml.parse(s) as object,
              },
            })

            // The Kindsgard wiki's editorial schema uses "titolo"; Quartz expects "title".
            // Prefer an explicit Quartz title, then the wiki's canonical title, then the filename.
            const canonicalTitle = coalesceAliases(data, ["title", "titolo"])
            if (canonicalTitle != null && canonicalTitle.toString() !== "") {
              data.title = canonicalTitle.toString()
            } else {
              data.title = file.stem ?? i18n(cfg.configuration.locale).propertyDefaults.title
            }

            const tags = coerceToArray(coalesceAliases(data, ["tags", "tag"]))
            if (tags) data.tags = [...new Set(tags.map((tag: string) => slugTag(tag)))]

            // Generate redirects for the canonical title and common title variants so Obsidian-style
            // links like [[Dominic Draco]] resolve even when the underlying filename is lowercase.
            const aliases = coerceToArray(coalesceAliases(data, ["aliases", "alias"])) ?? []
            const inferredAliases: string[] = []
            if (data.titolo != null) inferredAliases.push(data.titolo.toString())

            const stem = (file.stem ?? "").replace(/^_+/, "")
            const stemAlias = stem
              .split(/[-_]+/)
              .filter(Boolean)
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join(" ")
            if (stemAlias) inferredAliases.push(stemAlias)

            const titleWithoutArticle = data.title.replace(/^(?:il|lo|la|i|gli|le|l['’])\s+/i, "")
            if (titleWithoutArticle !== data.title) inferredAliases.push(titleWithoutArticle)

            const shortTitle = data.title.split(/\s+[—–]\s+/)[0].replace(/\s*\([^)]*\)\s*$/, "").trim()
            if (shortTitle && shortTitle !== data.title) inferredAliases.push(shortTitle)

            const uniqueAliases = [...new Set([...aliases, ...inferredAliases].filter(Boolean))]
            if (uniqueAliases.length > 0) {
              data.aliases = uniqueAliases // explicit and inferred frontmatter aliases
              file.data.aliases = getAliasSlugs(uniqueAliases)
              allSlugs.push(...file.data.aliases)
            }

            if (data.permalink != null && data.permalink.toString() !== "") {
              data.permalink = data.permalink.toString() as FullSlug
              const aliases = file.data.aliases ?? []
              aliases.push(data.permalink)
              file.data.aliases = aliases
              allSlugs.push(data.permalink)
            }

            const cssclasses = coerceToArray(coalesceAliases(data, ["cssclasses", "cssclass"]))
            if (cssclasses) data.cssclasses = cssclasses

            const socialImage = coalesceAliases(data, ["socialImage", "image", "cover"])

            const created = coalesceAliases(data, ["created", "date"])
            if (created) {
              data.created = created
            }

            const modified = coalesceAliases(data, [
              "modified",
              "lastmod",
              "updated",
              "last-modified",
            ])
            if (modified) data.modified = modified
            data.modified ||= created // if modified is not set, use created

            const published = coalesceAliases(data, ["published", "publishDate", "date"])
            if (published) data.published = published

            if (socialImage) data.socialImage = socialImage

            // Remove duplicate slugs
            const uniqueSlugs = [...new Set(allSlugs)]
            allSlugs.splice(0, allSlugs.length, ...uniqueSlugs)

            // fill in frontmatter
            file.data.frontmatter = data as QuartzPluginData["frontmatter"]
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    aliases: FullSlug[]
    frontmatter: { [key: string]: unknown } & {
      title: string
    } & Partial<{
        tags: string[]
        aliases: string[]
        modified: string
        created: string
        published: string
        description: string
        socialDescription: string
        publish: boolean | string
        draft: boolean | string
        lang: string
        enableToc: string
        cssclasses: string[]
        socialImage: string
        comments: boolean | string
      }>
  }
}
