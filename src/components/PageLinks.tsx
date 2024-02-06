import Link from 'next/link'
import clsx from 'clsx'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

interface Page {
  href: string
  createdAt: string
  title: string
  description: string
}

interface PageWithImg {
  href: string
  createdAt: string
  title: string
  description: string
  imageUrl: string
}

export enum PageType {
  Simple,
  ImgBackground
}

function PageLink({ page }: { page: Page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 text-base font-semibold text-neutral-950">
          {page.title}
        </h3>
        <time
          dateTime={page.createdAt}
          className="order-first text-sm text-neutral-600"
        >
          {formatDate(page.createdAt)}
        </time>
        <p className="mt-2.5 text-base text-neutral-600">{page.description}</p>
        <Link
          href={page.href}
          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
          aria-label={`Read more: ${page.title}`}
        >
          Подробнее
          <ArrowIcon className="w-6 flex-none fill-current" />
          <span className="absolute inset-0" />
        </Link>
      </Border>
    </article>
  )
}

function PageLinkWithImgBackground({ page }: { page: PageWithImg }){
  return (
    <article
    key={page.href}
    className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
  >
    <Image src={page.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
    <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

    <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
      <time dateTime={page.createdAt} className="mr-8">
       {formatDate(page.createdAt)}
      </time>
    </div>
    <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
      <a href={page.href}>
        <span className="absolute inset-0" />
        {page.title}
      </a>
    </h3>
  </article>
  )
}



export function PageLinks({
  title,
  pages,
  intro,
  type = PageType.Simple,
  className,
}: {
  title: string
  pages: Array<Page>
  intro?: string
  type?: PageType
  className?: string
}) {
  function hasImg(page: Page | PageWithImg): page is PageWithImg {
    return 'imageUrl' in page;
  }

  const col = type === PageType.Simple ? 2 : 3
  const Page = ({type, page } : {type: PageType, page: Page | PageWithImg}) => {switch (type) {
    case PageType.ImgBackground:
      if(hasImg(page)) {
        return <PageLinkWithImgBackground page={page} />;
      } else {
        return <PageLink page={page} />
      }
      break;
    default:
      return <PageLink page={page} />;
      break;
  }}
  return (
    <div className={clsx('relative pt-24 sm:pt-32 lg:pt-40', className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro title={title} smaller>
        {intro && <p>{intro}</p>}
      </SectionIntro>

      <Container className={intro ? 'mt-24' : 'mt-16'}>
        <FadeInStagger className={`grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-${col}`}>
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <Page page={page} type={type}/>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}


