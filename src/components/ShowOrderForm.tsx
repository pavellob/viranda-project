'use client'
import { useEffect, useId, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { FadeIn } from './FadeIn'
import { Button } from './Button'
import withContactFormHandler, { FormProps } from './withContactFormHandler'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

const ShowOrderForm: React.FC<FormProps & { title: string}> = ({
  title,
  formData,
  onInputChange,
  onSubmit,
}) => {
  function DropdownInput({
    label,
    options,
    ...props
  }: React.ComponentPropsWithoutRef<'select'> & {
    label: string
    options: string[]
  }) {
    let id = useId()

    return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <select
          id={id}
          {...props}
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      </div>
    )
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={onSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          {title || 'Ваш запрос'}
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Имя"
            name="name"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
          />

          <TextInput
            label="Телефон"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
          />
          <DropdownInput
            label="Шоу"
            name="show"
            options={['Crio Show', 'Cola-Mentos Show', 'Science Show']}
            value={formData.show}
            onChange={(e) => onInputChange('show', e.target.value)}
          />
          <TextInput
            label="Сообщение"
            name="message"
            value={formData.message}
            onChange={(e) => onInputChange('message', e.target.value)}
          />
          {/* <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                <fieldset defaultValue={formData.budget}>
                  <legend className="text-base/6 text-neutral-500">Бюджет</legend>
                  <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <RadioInput label="До $250" name="budget" value="200"  onChange={(e) => onInputChange('field1', e.target.value)}/>
                    <RadioInput label="$250 – $500" name="budget" value="250"  onChange={(e) => onInputChange('field1', e.target.value)}/>
                    <RadioInput label="$500 – $1000" name="budget" value="500"  onChange={(e) => onInputChange('field1', e.target.value)}/>
                    <RadioInput label="Больше $1000" name="budget" value="1000"  onChange={(e) => onInputChange('field1', e.target.value)}/>
                  </div>
                </fieldset>
              </div> */}
        </div>
        <Button type="submit" className="mt-10">
          Отправить
        </Button>
      </form>
    </FadeIn>
  )
}

export const WithSubmitActionForm = withContactFormHandler(ShowOrderForm)


export default ShowOrderForm