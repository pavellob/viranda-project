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
      title="Проводи весело время и при этом учись и развивайся - возможно!"
      image={{ src: imageWhiteboard }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Представь себе мир, где учеба - это не скучные занятия, а
          захватывающие шоу и интересные программы. Твои дети будут не только
          весело проводить время, но и учиться новому, погружаясь в легендарный
          мир, полный интересных открытий. Представьте, какие эмоции испытывают
          дети, экспериментируя и открывая для себя мир наук - это настоящее
          развитие и стимул для их умственного роста.
        </p>
      </div>

      {/* <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Blood samples</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
      </TagList> */}
    </LegendSection>
  )
}

function Flex() {
  return (
    <LegendSection
      title="Образование — гибкая система, которая развивается вместе с быстро меняющимся миром!"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Мы предлагаем новый взгляд на образование: у нас нет жестких рамок, мы
          верим в свободу выбора и гибкость в обучении. Учёба должна быть не
          скучной обязанностью, а радостным событием, которое ожидаешь с
          нетерпением!
        </p>
        <p>
          БСовременное образование — это не просто передача знаний, а уникальные
          отношения между учеником и педагогом, которые строятся на общих
          интересах и любознательности. Благодаря этому обучение становится не
          только эффективным, но и по-настоящему увлекательным.
        </p>
        <p>
          Зрелищные эксперименты, яркие образы, разнообразие программ,
          ориентированных на интересы современных детей — мы создаём позитивный
          опыт обучения и исследования мира.
        </p>
      </div>
    </LegendSection>
  )
}

function Gadgets() {
  return (
    <LegendSection
      title="Не боремся с гаджетами, а делаем их нашими союзниками!"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Мы покажем детям, что мир вокруг не менее увлекателен, чем экран
          планшета или смартфона. При этом гаджеты также можно использовать,
          чтобы познавать мир и создавать новое. Вместо глупых игр и бестолковых
          роликов, они могут стать полезным инструментом для обучения! В наших
          программах мы совмещаем живые опыты и технологические инновации, ведь
          наука и техника — это увлекательно и полезно.
        </p>
      </div>
    </LegendSection>
  )
}

function Socailization() {
  return (
    <LegendSection
      title="
      Дополнительное образование для социализации в условиях эмиграции."
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          В нашем учебном центре создана благоприятная среда, которая
          способствует не только обучению, но и формированию новых дружеских
          связей. Позитивный опыт обучения и совместных исследований снижает у
          детей тревожность, связанную с переездом.
        </p>

        <p>
          Мы организуем международные мероприятия, предоставляя возможность как
          детям, так и их родителям легко влиться в новое сообщество.
          Дополнительное образование становится не только источником знаний, но
          и ключом к успешной адаптации в новой среде.
        </p>
      </div>
    </LegendSection>
  )
}

function Future() {
  return (
    <LegendSection
      title="Пробовать, не боясь ошибиться, снова пробовать и получать от этого удовольствие!"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Мы создаем атмосферу, в которой дети не боятся ошибок и критики. Наши
          программы способствуют развитию любознательности и целеустремлённости,
          демонстрируя, что ошибки — это часть процесса обучения, а желание и
          настойчивость приводят к реальным результатам.
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
  title: 'Наши принципы',
  description:
    'Создаем среду, где дети смогут свободно выбирать как и чему учиться. Пробовать, ошибаться, снова пробовать и получать от этого удовольствие.',
}

export default function Process() {
  return (
    <>
      <PageIntro
        eyebrow="Наши принципы"
        title="Развлечение, которое обучает. Обучение, которое развлекает."
      >
        <p>
          Viranda — это умные праздники, развивающие программы, научные шоу с
          классным качественным реквизитом, продуманным сценарием, а главное, с
          опытной командой артистов и педагогов у руля!
        </p>
        <p>
          Создаём среду, в которой дети могут свободно выбирать, как и чему
          учиться. У всех наших мероприятий есть образовательная составляющая:
          дети одновременно развлекаются и знакомятся с природными явлениями и
          физическими законами.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Edutament />
        <Flex />
        <Gadgets />
        <Future />
        <Socailization />
      </div>

      {/* <Value /> */}

      <ContactSection />
    </>
  )
}
