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
import CalComButton from '@/components/CalComButton'

function Science() {
  return (
    <LegendSection title="S — Science (Наука)" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          STEAM-подход к обучению стимулирует детей и подростков исследовать
          окружающий мир, задавать вопросы, строить гипотезы для научных
          исследований и решать сложные задачи.
        </p>
        <CalComButton dataCalLink="team/viranda/potomuchki" title="Потомучки">
          Потомучки
        </CalComButton>
      </div>
    </LegendSection>
  )
}

function Tech() {
  return (
    <LegendSection
      title="T — Technology (Технологии)"
      image={{ src: imageLaptop, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          В STEAM-образовании ученики изучают базовые принципы и технологии,
          лежащие в основе современных устройств и технических разработок. Такой
          подход пробуждает интерес к инновациям и повышает цифровую
          грамотность, закладывая основы будущих успехов в учёбе и карьере.
        </p>
        <CalComButton dataCalLink="team/viranda/robot" title="Робототехника">
          Робототехника
        </CalComButton>
      </div>
    </LegendSection>
  )
}

function Engineering() {
  return (
    <LegendSection
      title="E — Engineering (Инженерное дело)"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Инженерный подход помогает развивать навыки проектирования,
          программирования, строительства и решения сложных задач. Сочетая
          креативность и научные принципы, ученики создают, улучшают и применяют
          на практике различные инженерные решения.
        </p>
        <CalComButton dataCalLink="team/viranda/robot" title="Робототехника">
          Робототехника
        </CalComButton>
      </div>
    </LegendSection>
  )
}

function Art() {
  return (
    <LegendSection
      title="A — Art (Искусство)"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          В рамках STEAM-обучения особое внимание уделяется творчеству и
          искусству, что способствует развитию креативности, воображения и
          эстетического восприятия учащихся. Ученики смогут выразить свои идеи и
          чувства через визуальные искусства, прикладное творчество и дизайн.
        </p>
        <CalComButton dataCalLink="team/viranda/art" title="Рисование" className="mr-2">
        Рисование
        </CalComButton>
        <CalComButton dataCalLink="team/viranda/art" title="Термомозайка" className="mr-2">
          Термомозайка
        </CalComButton>
        <CalComButton dataCalLink="team/viranda/art" title="Лепка" className="mr-2">
          Лепка
        </CalComButton>
      </div>
    </LegendSection>
  )
}

function Math() {
  return (
    <LegendSection
      title="M — Mathematics (Математика)"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Математика — один из столпов STEAM-образования. Наши подопечные
          научатся анализировать данные, моделировать и решать задачи:
          математический подход развивает аналитическое мышление и помогает
          применять математику в реальных ситуациях.
        </p>
        <CalComButton dataCalLink="team/viranda/cubik" title="Кубик Рубика" className="mr-2">
          Кубик Рубика
        </CalComButton>
        <CalComButton dataCalLink="team/viranda/chess" title="Шахматы">
          Шахматы
        </CalComButton>
      </div>
    </LegendSection>
  )
}
export const metadata: Metadata = {
  title: 'Дополнительное образование',
  description: 'Дополнительное образование',
}

export default function Education() {
  return (
    <>
      <PageIntro
        eyebrow="Дополнительное образование"
        title="Дополнительное образование"
      >
        <p>
          Viranda project предоставляет качественные услуги в области
          дополнительного образования: 20 различных образовательных секций для
          детей и подростков до 16 лет! Мы работает в рамках
          STEAM-подхода: Science (Наука), Technology (Технологии), Engineering
          (Инженерное дело), Art (Искусство), Mathematics (Математика). У нас вы
          найдёте секции по робототехнике и 3D моделированию, рисованию и
          программированию, авторский курс «Потомучки» и многое другое. Занятия
          проходят в нашем образовательном центре, также мы сотрудничаем с
          другими обучающими заведениями, детсадами и школами.
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
