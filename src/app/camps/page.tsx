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
          Прекрасная возможность детям весело и полезно провести время, а их
          родителям - заняться своими делами.
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
          Расписание недельных лагерей совпадаем с рассписанием школьных лагерей
          в международных школах Таиланда
        </p>
        <p>
          В недельном лагере дети не только занимаются ежедневным
          эксперементированием, хотят на прогулки и играют, но так же готовят
          настоящее научное представление для своих родителей в конце недели
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
          Мы планируем несколько смен на лето 2024 года. 21 день, полный
          пансион, проживание в конфортабельном резотре с бассейном.
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
        title="Лагеря выходного дня, недельные лагеря, летние семейные лагеря на Пхукете"
      >
        <p>
          Научные лагеря для детей представляют собой не только возможность
          погрузиться в увлекательный мир науки, но и ценный опыт,
          способствующий развитию их умственных способностей. Участие в таких
          лагерях позволяет детям экспериментировать, задавать вопросы и активно
          участвовать в практических исследованиях, что способствует развитию их
          любознательности, логического мышления и навыков решения проблем.
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
