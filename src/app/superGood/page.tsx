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
          Наука - это интересно. Например, у вашего друга посинел нос и оказалось, что там образовалась маленькая черная дыра.
          Участвуя в решении этой интереснейшей задачи, решая квесты и загадки, дети узнают много интересного про космос.
          Мы стараемся заинтересовать детей в игровой форме, и Профессор справляетсяс этим великолепно.
        </p>
      </div>
    </LegendSection>
  )
}

function Scenario() {
  return (
    <LegendSection
      title="Сценарий"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Елена Саморядова, сценарист Бубы и автор русских книг про Леди Баг - наш соавтор. Ее перу принадлежат всен приключения профессора.
          Благодаря ей наши историиимеют четкую драмотургическую структуру и держат зрителя до конца.
        </p>
        <p>
          С нами сотрудничают профессиональные художники, актеры озвучки и театра. 
        </p>
      </div>
    </LegendSection>
  )
}

function Show() {
  return (
    <LegendSection
      title="Каждое представление - Шоу"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Каждый наш спектакль это еще и красочное научное шоу.
          Как правило, мы проводим его первым актом, чтобы заполучить все внимаение наших маленьких зрителей
        </p>
      </div>
    </LegendSection>
  )
}

function Quest() {
  return (
    <LegendSection
      title="Дети - учасники спектакля"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          По ходу действия дети вовлечены в самосмтоятельное эксперементирование, решение задач и головоломок, небольшие игры.
          Так же мы делаем акцент на командной работе и показываем детям, что проще всего результат достигается совместными усилиями. 
        </p>
      </div>
    </LegendSection>
  )
}

function Extra() {
  return (
    <LegendSection
      title="Подарки и сувениры после каждого спектакля."
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Небольшие наборы для самостоятельнего эксперементирования, наборы стикеров по мотивам спектакля или сладкий подарок - мы стараемся, чтобы подарок дополнял шоу
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
        title="Профессор Супер Гуд - имерсивное научное шоу-спектакль для детей и взрослых."
      >
        <p>
          В сотрудничестве с талантливым сценаристом Еленой Саморядовой, мы создали Профессора Супер Гуд - экстравагантного ученого, для которого нет преград. 
          Вооружившись научными знаниями и помощью детей, профессор отправляется в приключения. 
        </p>
        <p>
          Мы регулярно выпускаем новые приключения Профессора и проводим открытые представления.
          Так же Профессор может приехать к вам на праздник. 
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
