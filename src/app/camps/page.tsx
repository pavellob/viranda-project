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

function OneDay() {
  return (
    <LegendSection title="Лагерь на выходных." image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Прекрасная возможность для детей весело и полезно провести время, а
          родителям спокойно заняться своими делами.
        </p>
      </div>
    </LegendSection>
  )
}

function Week() {
  return (
    <LegendSection
      title="Недельные лагеря"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Расписание недельных лагерей совпадает с расписанием школьных лагерей в международных школах Таиланда.
        </p>
        <p>
        В недельном лагере дети занимаются ежедневными научными экспериментами, ходят на прогулки и играют, а также готовят настоящее научное представление для своих родителей в конце недели.
        </p>
      </div>
    </LegendSection>
  )
}

function Summer() {
  return (
    <LegendSection
      title="Летние лагеря"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        21 день, полный пансион, проживание в комфортабельном отеле с бассейном. Каждое лето мы планируем несколько смен.
        </p>
      </div>
    </LegendSection>
  )
}

export const metadata: Metadata = {
  title: 'Лагеря, Лагеря, Лагеря',
  description: 'Лагеря выходного дня, недельные лагеря, летние лагеря',
}

export default function Camps() {
  return (
    <>
      <PageIntro
        eyebrow="Лагеря, Лагеря, Лагеря"
        title="Лагеря выходного дня, недельные лагеря, летние семейные лагеря"
      >
        <p>
          Научный детский лагерь — учимся и развлекаемся с полным погружением!
          Отличный формат для развития коммуникативных навыков и логического
          мышления. У нашей команды огромный опыт в организации детских лагерей
          самых разных форматов: лагерь выходного дня, лагерь в школьные
          каникулы, летние и семейные лагеря.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <OneDay />
        <Week />
        <Summer />
      </div>

      <ContactSection />
    </>
  )
}
