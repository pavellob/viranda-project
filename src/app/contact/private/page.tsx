import { type Metadata } from 'next'
import Link from 'next/link'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactForm } from '@/components/ContactForm'
import { Legend, LegendSection } from '@/components/Legend'
import { DocumentIcon, InboxArrowDownIcon } from '@heroicons/react/24/outline'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Для связи
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Вы можете связаться с нами по телефону или эллектронной почте удобным
        вам способом.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      {/* <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Свяжитесь с нами
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Email', 'svetlanaloba4eva@gmail.com'],
            ['Thai Phone', '+66 0838406145'],
            ['Russian Phone', '+7 952 358 6735'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border> */}

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Наши соцсети
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}
function Lessons() {
  return (
    <LegendSection
      title="Регулярные занятия «Потомучки»"
      image={{ src: imageWhiteboard }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Основы естественных наук в интерактивном формате, увлекательные
          мастер-классы. Авторский курс.
        </p>
        <ul role="list">
          <li>● Для групп до 10 человек.</li>
          <li>● Дети от 3 до 12 лет.</li>
          <li>● Занятия длительностью 40-60 минут.</li>
          <li>● Продолжительность курса: 4 занятия.</li>
          <li>● Более 10 курсов.</li>
          <li>● Язык: русский, английский.</li>
        </ul>
      </div>
    </LegendSection>
  )
}

function LessonsFranchazing() {
  return (
    <LegendSection
      title="Регулярные занятия «Потомучки» по франшизе."
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Основы естественных наук в интерактивном формате, увлекательные
          мастер-классы по франшизе при методической поддержке Viranda project.
          Авторский курс.
        </p>
        <ul role="list">
          <li>● Для групп до 10 человек.</li>
          <li>● Дети от 3 до 12 лет.</li>
          <li>● Занятия длительностью 40-60 минут.</li>
          <li>● Продолжительность курса: 4 занятия.</li>
          <li>● Более 10 курсов.</li>
          <li>● Язык: русский, английский.</li>
        </ul>
      </div>
    </LegendSection>
  )
}

function ShowAndMasterclass() {
  return (
    <LegendSection
      title="Проведение праздников, мастер-классов и квестов"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>Уникальные, авторские шоу программы на территории заказчика.</p>
        <ul role="list">
          <li>● Дети от 3 до 16 лет.</li>
          <li>● Шоу длительностью от 30 минут до 4 часов.</li>
          <li>● Продолжительность курса: 4 занятия.</li>
          <li>● Более 15 шоу программ.</li>
          <li>● Язык: русский, английский.</li>
        </ul>
      </div>
    </LegendSection>
  )
}

function Camps() {
  return (
    <LegendSection
      title="Организация лагеря"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Мы с радостью поможем организовать научный лагерь продолжительностью
          от 1 до 21 дня.
        </p>

        <ul role="list">
          <li>● Разработка концепции лагеря, расписания.</li>
          <li>● Предоставление реквизита</li>
          <li>● Проведение научных мастер-классов, шоу и квестов.</li>
          <li>● Методическое сопровождение всех мероприятий.</li>
          <li>● Преподаватели Viranda project.</li>
        </ul>
      </div>
    </LegendSection>
  )
}

function SuperGoodShow() {
  return (
    <LegendSection
      title="Проведение театрализованного представления
      «Профессор Супер Гуд»."
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Полноценное театрализованное представление в трёх действиях; подарки
          для каждого ребёнка после представления.
        </p>
        <p>
          Мы придумали Профессора Супер Гуда вместе с Еленой Саморядовой
          (сценарист “Бубы”, автор русских книг “Леди Баг”). Сотрудничаем с
          профессиональными актерами театра и кино, дубляжа, иллюстраторами.
        </p>

        <ul role="list">
          <li>● Дети от 3 до 99 лет.</li>
          <li>● Длительность спектакля 1 час.</li>
          <li>● Подарки всем зрителям.</li>
          <li>● Новое приключение каждый месяц</li>
        </ul>
      </div>
    </LegendSection>
  )
}

export const metadata: Metadata = {
  title:
    'Сотрудничество с школами, детскими садами и образовательными центрами',
  description: 'Давайте работать вместе. Расскажите нам о вашей идее',
}

export default function Contact() {
  return (
    <>
      <PageIntro
        eyebrow="Мы работаем для вас"
        title="Сотрудничество с школами, детскими садами и образовательными центрами"
      >
        <p>
          Мы ждем вас на занятиях, представлениях и мастерклассах. Мы с радостью
          проведем незабываемый день рожения или другой празник для вас.
        </p>
      </PageIntro>
      <Legend>
        <Lessons />
        <ShowAndMasterclass />
        <LessonsFranchazing />
        <SuperGoodShow />
        <Camps />
      </Legend>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
