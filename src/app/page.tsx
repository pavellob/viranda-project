import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import imageHero from '@/images/hero.jpg'
import {
  type CaseStudy,
  type MDXEntry,
  loadCaseStudies,
  loadArticles,
  loadShowCases,
} from '@/lib/mdx'
import { PageLinks, PageType } from '@/components/PageLinks'
import { ShowEventProduct } from '@/lib/types'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro title="Наша работа" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          Мы верим, что самое главное - это заинтересовать детей, раскрыть
          потенциал, скрытый в них самих.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.createdAt.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.createdAt.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{caseStudy.service}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        title="Развлечение, которое обучает. Обучение, которое развлекает."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p></p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageHero}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Научные  шоу и другие умные праздники ">
              Мы знаем, как сделать ваш праздник уникальным и запоминающимся.
              Шоу, мастер-классы или интерактивные квесты — выбирайте, что
              подходит для вашего праздника и вашего ребёнка. Вы можете просто
              рассказать нам о предстоящем событии, и мы подберём для вас
              наилучший формат. Развлекаясь, обучаемся! Уже больше 11 лет наша
              команда проводит Научные шоу и другие Умные праздники для всей
              семьи. Мы работаем с агентствами, индивидуальными заказчиками и
              организациями, а также организуем праздники «под ключ».
            </ListItem>
            <ListItem title="Дополнительное образование">
              20 секций дополнительного образования для детей и подростков на
              острове Пхукет! Обучение в рамках STEAM (Science, Technology,
              Engineering, Art, Mathematics): секции по робототехнике,
              3D-моделированию, программированию, дизайну, специальный авторский
              курс «Потомучки» и многое другое. Мы сотрудничаем с
              образовательными учреждениями и преподавателями международного
              класса.
            </ListItem>
            <ListItem title="Детские и семейные лагеря">
              Научный детский лагерь — учимся и развлекаемся с полным
              погружением! Отличный формат для развития коммуникативных навыков
              и логического мышления. У нашей команды огромный опыт в
              организации детских лагерей самых разных форматов: лагерь
              выходного дня, лагерь в школьные каникулы, летние и семейные
              лагеря.
            </ListItem>
            <ListItem title="Театрализированные шоу и квесты">
              Наша команда давно и тесно связана с театром. Раз в месяц мы
              выпускаем историю Профессора Супер Гуд — эксцентричного ученого,
              который вместе с детьми познает мир. В нашем репертуаре
              увлекательные квесты и иммерсивные представления, в ходе которых
              дети не просто наблюдают за действием со стороны, а активно
              участвуют в нём, проводят опыты, совместно решают головоломки и
              общаются.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Создаем среду, где дети учатся, играя. Уникальные умные празники и научное шоу на Пхукете и Санкт-Петербурге. Дополнительне образование по STEAM',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)
  let blogArticles = (await loadArticles()).slice(0, 2)
  let shows = (await loadShowCases()).slice(0, 3).map((show: ShowEventProduct) => {
    return {
      href: show.item.href,
      title: show.item.name,
      description: show.item.description,
      imageUrl: show.item.image.imageSrc,
    }
  })

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-6xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Умные детские праздники и развивающие программы на Пхукете
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Мы создаем условия, в которых дети получают актуальные знания о мире в рамках STEAM-подхода. Дружелюбно и в игровой форме.
          </p>
        </FadeIn>
      </Container>
      <Services />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Шоу и воркшопы"
        intro="Мы делаем самые веселые умные праздники на Пхукете"
        type={PageType.ImgBackground}
        pages={shows}
      />

      {/* <Clients /> */}

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Megaday', logo: logoPhobiaDark }}
      >
        Лушее научное шоу на Пхукете. Если вам хочется, чтобы ваш праздник был
        ярким и запоминаешься, если вам хочется быть не просто зрителями, но
        участниками - рекомендую Viranda Project
      </Testimonial>

      <CaseStudies caseStudies={caseStudies} />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Блог"
        intro="Мы пишем о тенденциях в современном обучении, дополнительном образовании и конечно, новых опытах и шоу"
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
