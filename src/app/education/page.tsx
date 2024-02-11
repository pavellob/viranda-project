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

function Science() {
  return (
    <LegendSection title="S - Science" 
    image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        STEM обучение стимулирует детей и молодежь исследовать окружающий мир, задавать вопросы и строить гипотезы для научного исследования.

        </p>
      </div>
    </LegendSection>
  )
}

function Tech() {
  return (
    <LegendSection
      title="T - Technology"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        В STEAM образовании учащиеся изучают принципы и технологии, лежащие в основе современных устройств и разработок, стимулируя их интерес к инновациям и цифровой грамотности.
        </p>
      </div>
    </LegendSection>
  )
}

function Engineering() {
  return (
    <LegendSection
      title="E - Engineering"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Студенты, занимающиеся инженерным обучением, развивают навыки проектирования, строительства и решения проблем, используя креативность и научные принципы для создания новых и улучшения существующих технических решений.
        </p>
      </div>
    </LegendSection>
  )
}

function Art() {
  return (
    <LegendSection
      title="A - Art"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        В рамках STEAM обучения также уделяется внимание искусству, что способствует развитию креативности, воображения и эстетического восприятия учащихся, а также позволяет им выражать свои идеи и чувства через визуальные искусства и дизайн.
        </p>
      </div>
    </LegendSection>
  )
}

function Math() {
  return (
    <LegendSection
      title="M - Mathematics"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        STEAM обучение включает в себя изучение математических концепций и навыков, таких как анализ данных, моделирование и решение задач, что помогает студентам развивать аналитическое мышление и применять математику в реальных ситуациях
        </p>
      </div>
    </LegendSection>
  )
}
export const metadata: Metadata = {
  title: 'Дополнительное образование',
  description: 'Дополнительное образование на Пхукете',
}

export default function Education() {
  return (
    <>
      <PageIntro
        eyebrow="Дополнительное образование"
        title="Дополнительное образование на Пхукете"
      >
        <p>
          На данный момент у нас 19 секций для детей до 16 лет, согласно
          идеалогии STEAM, на острове Пхукет. S - Science, T - Technic, E -
          Engineering, A - Art, M - Mathematic. Робототехника и 3D
          моделирование, рисование и программирование, авторский курс
          &quot;Потомучки&quot; и многое другое. занятия проходят в нашем
          образовательном центе, так же мы сотрудничаем с детсадами и школами.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Science />
        <Tech />
        <Engineering />
        <Art />
        <Math />
      </div>

      <ContactSection />
    </>
  )
}
