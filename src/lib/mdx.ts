import { type ImageProps } from 'next/image'
import glob from 'fast-glob'
import { Show, ShowEventProduct } from './types'

async function loadEntries<T extends { createdAt: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  return (
    await Promise.all(
      (await glob('**/page.mdx', { cwd: `src/app/${directory}` })).map(
        async (filename) => {
          let metadata = (await import(`../app/${directory}/${filename}`))[
            metaName
          ] as T
          return {
            ...metadata,
            metadata,
            href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
          }
        },
      ),
    )
  ).sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  createdAt: string
  title: string
  description: string
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy {
  createdAt: string
  client: string
  title: string
  index: number
  type: "show" | "workshop"
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export function loadArticles() {
  return loadEntries<Article>('blog', 'article')
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy').then((cases: Array<MDXEntry<CaseStudy>>) => cases.sort((c1, c2)=> c1.index - c2.index))
}


export function loadShowCases() {
  return loadEntries<ShowEventProduct>('show', 'show').then((cases: Array<MDXEntry<ShowEventProduct>>) => cases.sort((c1, c2)=> c1.item?.index - c2.item?.index))
}



