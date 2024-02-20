'use client'

import { Fragment, useState } from 'react'

import { StarIcon } from '@heroicons/react/20/solid'
import { Tab } from '@headlessui/react'
import { OrderDialog } from './OrderDialog'
import { ShowEventProduct } from '@/lib/types'
import { GrayscaleTransitionImage } from './GrayscaleTransitionImage'
import { LinkIcon } from '@heroicons/react/24/outline'
import ImageList from './ImageList'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function copyLink() {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl)
    .then(() => {
      console.log('URL copied to clipboard:', currentUrl);
    })
    .catch(err => {
      console.error('Failed to copy URL to clipboard:', err);
    });
}


export function Show({ show }: { show: ShowEventProduct }) {
  const [open, setOpen] = useState(false)

  const reviewsAverage =
    show.reviews.reduce((sum, review) => {
      sum += sum
      return sum
    }, 0) / show.reviews.length

  return (
    <div className="bg-white">
      <OrderDialog isOpen={open} onClose={() => setOpen(false)} />
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
              <GrayscaleTransitionImage
                src={show.item.image.imageSrc}
                alt={show.item.image.imageAlt}
              />
            </div>
          </div>

          {/* Product details */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {show.item.name}
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Описание
                </h2>
              </div>

              <div>
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviewsAverage > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviewsAverage} out of 5 stars</p>
              </div>
            </div>

            <p className="mt-6 text-gray-500">{show.item.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                onClick={() => setOpen(true)}
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Купить за {show.product.price}฿
              </button>
              <button
                onClick={() => {
                  setOpen(true)
                }}
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Заказать звонок
              </button>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">В программе</h3>
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  {show.item.showItems.map((item) => (
                    <li key={item.name}>- {item.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Условия</h3>
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  {(show.item.requirements || []).map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Поделиться</h3>
              <LinkIcon className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500 hover:cursor-pointer" onClick={copyLink}/> 
            </div>
          </div>

          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                      )
                    }
                  >
                    Отзывы
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                      )
                    }
                  >
                    FAQ
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      classNames(
                        selected
                          ? 'border-indigo-600 text-indigo-600'
                          : 'border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800',
                        'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                      )
                    }
                  >
                    Фото
                  </Tab>
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="-mb-10">
                  <h3 className="sr-only">Отзывы клиентов</h3>

                  {show.reviews.map((review, reviewIdx) => (
                    <div
                      key={review.id}
                      className="flex space-x-4 text-sm text-gray-500"
                    >
                      <div className="flex-none py-10">
                        <img
                          src={review.client.avatarSrc}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-100"
                        />
                      </div>
                      <div
                        className={classNames(
                          reviewIdx === 0 ? '' : 'border-t border-gray-200',
                          'py-10',
                        )}
                      >
                        <h3 className="font-medium text-gray-900">
                          {review.client.name}
                        </h3>
                        <p>
                          <time dateTime={review.createdAt}>
                            {review.createdAt}
                          </time>
                        </p>

                        <div className="mt-4 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                review.rating > rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300',
                                'h-5 w-5 flex-shrink-0',
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {review.rating} out of 5 stars
                        </p>

                        <div
                          className="prose prose-sm mt-4 max-w-none text-gray-500"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    </div>
                  ))}
                </Tab.Panel>

                <Tab.Panel className="text-sm text-gray-500">
                  <h3 className="sr-only">Часто задаваемые вопросы</h3>

                  <dl>
                    {(show.item.faqs || []).map((faq) => (
                      <Fragment key={faq.question}>
                        <dt className="mt-10 font-medium text-gray-900">
                          {faq.question}
                        </dt>
                        <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                          <p>{faq.answer}</p>
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </Tab.Panel>

                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">Фото</h3>
                  <ImageList images={show.item.album}/>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  )
}
