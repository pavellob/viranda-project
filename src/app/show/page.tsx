import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { PageIntro } from '@/components/PageIntro'
import { MDXEntry, loadShowCases } from '@/lib/mdx'
import { ShowEventProduct } from '@/lib/types'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { SectionIntro } from '@/components/SectionIntro'

export const metadata: Metadata = {
  title: 'Научные шоу и Мастер-классы',
  description: 'Уникальные активности и зрелищные шоу',
}
function ShowCases({
  showProducts,
}: {
  showProducts: Array<MDXEntry<ShowEventProduct>>
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">showProducts</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {showProducts.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div>
                <GrayscaleTransitionImage
                  src={product.item.image.imageSrc}
                  alt={product.item.image.imageAlt}
                  className="aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.item.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.item.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">
                  {product.item.description}
                </p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {product.event.duration} минут / {product.item.minCapacity}{' '}
                    - {product.item.maxCapacity} человек / {product.item.minAge}{' '}
                    - {product.item.maxAge} лет{' '}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    {product.product.price}₽
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default async function Show() {
  let showProducts = await loadShowCases()

  return (
    <>
      <PageIntro
        eyebrow="Уникальные активности и зрелищные шоу"
        title="Научные шоу и Мастер-классы"
      >
        <p>
          Мы проводим научные шоу и мастер-классы для детей и подростков уже
          более 10 лет — наша команда знает, как сделать праздник интересным для
          каждого! Программа шоу разработана таким образом, чтобы не только
          радовать зрителей яркими спецэффектами, но и обучать их новому,
          стимулировать исследовательский интерес и научное любопытство. 
          <br/><strong>Шоу</strong> мы показываем на столе и по очереди приглашаем детей помогать. 
          <br/><strong>Мастер-класс</strong> — все дети сидят за столом и каждый сам проводит опыт (одновременно).
          <br/>Мастер-классы и шоу Viranda project развивают в детях
          наблюдательность, логическое мышление и коммуникативные навыки.
        </p>
      </PageIntro>

      <SectionIntro
        title="Шоу"
        className="mt-24 sm:mt-32 lg:mt-40"
      />

      <ShowCases showProducts={showProducts.filter((p: ShowEventProduct) => p.item.type === "show")} />

      <SectionIntro
        title="Мастер-классы"
      />

      <ShowCases showProducts={showProducts.filter((p: ShowEventProduct) => p.item.type === "workshop")} />

      <ContactSection />
    </>
  )
}
