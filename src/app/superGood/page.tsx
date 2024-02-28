import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { StatList, StatListItem } from '@/components/StatList'
import { LegendSection } from '@/components/Legend'

function Edutament() {
  return (
    <LegendSection
      title="Когда наука встречает театр"
      image={{ src: imageWhiteboard }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Объяснить детям сложные научные концепции в простой игровой форме? Это
          работа для Профессора Супер Гуд! Вместе участвуя в решении весёлых
          задачек, раскрывая загадки и проходя увлекательные квесты, дети узнают
          множество интересного и полезного об устройстве мира вокруг.
        </p>
      </div>
    </LegendSection>
  )
}

function Scenario() {
  return (
    <LegendSection title="Сценарий" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Соавтор нашего спектакля — Елена Саморядова, сценарист мультсериала
          «Буба» и автор российских книг про Леди Баг. Её перу принадлежат все
          истории о приключениях Профессора: благодаря продуманной
          драматургической структуре и неожиданным ходам, они удерживают
          внимание маленьких зрителей от начала и до конца представления.
        </p>
        <p>
          Для разработки наших спектаклей мы сотрудничаем с профессиональными
          театральными актёрами, актёрами озвучки, художниками-оформителями и
          художниками по костюмам.
        </p>
      </div>
    </LegendSection>
  )
}

function Show() {
  return (
    <LegendSection title="Яркое Шоу" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Каждый спектакль — это ещё и красочное научное шоу! Дети в восторге от
          неожиданных спецэффектов: с первого акта история захватывает внимание
          юных зрителей, и они с удовольствием погружаются в дальнейшее
          действие, одновременно играя и обучаясь.
        </p>
      </div>
    </LegendSection>
  )
}

function Quest() {
  return (
    <LegendSection
      title="Дети — участники спектакля"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          По ходу спектакля дети вовлечены в решение задач и головоломок,
          эксперименты и мини-игры. Мы делаем особый акцент на командной работе,
          показывая детям, что лучший результат достигается совместными
          усилиями.
        </p>
      </div>
    </LegendSection>
  )
}

function Extra() {
  return (
    <LegendSection
      title="Подарки и сувениры после каждого спектакля"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Каждый ребёнок получит небольшой набор для проведения самостоятельных
          научных экспериментов, набор стикеров по мотивам спектакля или сладкий
          сувенир — мы стараемся, чтобы подарок идеально дополнял шоу.
        </p>
      </div>
      {/* 
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Our projects always have 100% test coverage, which would be impressive
          if our tests weren’t as porous as a sieve.
        </ListItem>
        <ListItem title="Infrastructure">
          To ensure reliability we only use the best Digital Ocean droplets that
          $4 a month can buy.
        </ListItem>
        <ListItem title="Support">
          Because we hold the API keys for every critical service your business
          uses, you can expect a lifetime of support, and invoices, from us.
        </ListItem>
      </List> */}
    </LegendSection>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-indigo-50 stroke-indigo-100 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}
function Value() {
  return (
    <Container className="mt-16">
      <StatList>
        <StatListItem value=">15" label="Лет работы с детьми" />
        <StatListItem value=">30" label="Активностей для детей" />
        <StatListItem value=">100" label="Празников за последний год" />
      </StatList>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Профессор Супер Гуд',
  description:
    'Профессор Супер Гуд - экстравагантный ученый, для которого нет преград. Вооружившись научными знаниями и помощью детей, профессор отправляется в приключения',
}

export default function SuperGood() {
  return (
    <>
      <PageIntro
        eyebrow="Профессор Супер Гуд"
        title="Профессор Супер Гуд - имерсивное научное шоу-спектакль для детей и взрослых"
      >
        <p>
          Иммерсивное научное шоу-спектакль для детей и взрослых. В
          сотрудничестве с талантливым сценаристом Еленой Саморядовой мы создали
          уникальную историю Профессора Супер Гуд. Профессор — экстравагантный
          ученый, для которого не существует преград: вооружившись научными
          знаниями и помощью детей, он отправляется на поиски приключений.
        </p>
        <p>
          Мы регулярно выпускаем новые серии спектакля про приключения
          Профессора и проводим открытые представления. Профессор всегда может
          приехать к вам на праздник!
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Edutament />
        <Show />
        <Quest />
        <Scenario />
        <Extra />
      </div>

      <ContactSection />
    </>
  )
}
