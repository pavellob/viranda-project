import { type Metadata } from 'next'
import Link from 'next/link'
import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { ContactForm } from '@/components/ContactForm'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { List, ListItem } from '@/components/List'
import imageLaptop from '@/images/laptop.jpg'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Для связи
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Вы можете связаться с нами удобным для вас способом: по телефону,
        электронной почте, через мессенджеры (мы любим Telegram) или заполнив
        форму обратной связи
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
function Services() {
  return (
    <>
      <PageIntro eyebrow="Свяжитесь с нами" title="Давайте работать вместе">
        <p>
          Viranda project сотрудничает с частными лицами, агентствами и
          образовательными учреждениями: мы предоставляем качественные услуги в
          сфере развлечений и дополнительного образования.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Частные лица">
              Частные лица. С радостью проведем незабываемый День рождения и
              любой другой праздник для вас и вашего ребёнка. Занятия,
              представления и мастер-классы в нашем центре или на вашей
              площадке. Мы учитываем пожелания наших клиентов, разрабатывая
              уникальные мероприятия по индивидуальным сценариям.
              <Link
                href="contact/private"
                className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
              >
                Подробнее
                <ArrowRightIcon className="w-6 flex-none fill-current" />
                <span className="absolute inset-0" />
              </Link>
            </ListItem>
            <ListItem title="Детские сады, школы и образовательные центры.">
              Мы проводим и помогаем организовывать секции дополнительного
              образования в учебных и дошкольных учреждениях, частных и домашних
              школах. Помогаем в организации и проведении больших праздников в
              соответствии с вашими требованиями и специальными запросами.
              <Link
                href="contact/school"
                className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
              >
                Подробнее
                <ArrowRightIcon className="w-6 flex-none fill-current" />
                <span className="absolute inset-0" />
              </Link>
            </ListItem>
            <ListItem title="Event-агентства">
              Мы сотрудничаем с организаторами праздников и event-агентствами.
              Наша команда профессионалов имеет все необходимые разрешения для
              работы в Таиланде. Уникальные авторские шоу и мастер-классы для
              любого мероприятия.
              <Link
                href="contact/agencies"
                className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
              >
                Подробнее
                <ArrowRightIcon className="w-6 flex-none fill-current" />
                <span className="absolute inset-0" />
              </Link>
            </ListItem>
            <ListItem title="Мы открыты к сотрудничеству">
              Блогеры, педагоги дополнительного образования, актёры, художники и
              другие представители творческих профессий — мы предлагаем выгодные
              условия сотрудничества.
              <Link
                href="contact"
                className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
              >
                Подробнее
                <ArrowRightIcon className="w-6 flex-none fill-current" />
                <span className="absolute inset-0" />
              </Link>
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Свяжитесь с нами',
  description: 'Давайте работать вместе',
}

export default function Contact() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
      <Services />
    </>
  )
}
