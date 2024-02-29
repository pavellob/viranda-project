import { Option } from '@/lib/types'
import { useSearchParams } from 'next/navigation' // Import useSearchParams from 'next/router'
import React, { useEffect, useState } from 'react'

export type FormData = {
  [key: string]: string
}

export type FormProps = {
  orderOptions?: Option[]
  formData: FormData
  onInputChange: (name: string, value: string) => void
  onSubmit: () => void
}

export type WrappedComponentProps = {
  title: string
  formState?: FormData
  onSubmit?: () => void
}

async function postData(formValues: FormData) {
  const url = '/api/send'

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formValues),
  })

  if (response.ok) {
    const result = await response.json()
  } else {
    console.error('Failed to post data')
  }
}

const withSubmitAction = <P extends FormProps>(
  WrappedComponent: React.ComponentType<P>,
) => {
  const WithSubmitAction = (props: P) => {
    // Removed the additional function layer
    const searchParams = useSearchParams()
    const [formData, setFormData] = useState<FormData>({})

    useEffect(() => {
      const queryParams = Object.fromEntries(searchParams.entries()) // Convert URLSearchParams to object
      if (!Object.keys(queryParams).some((p) => p === 'show')) {
        const showValue = props.orderOptions
          ?.filter((opt) => opt.selected)
          .shift()?.value
        if (showValue) queryParams.show = showValue
      }
      setFormData(queryParams) // Set form data from URL search parameters
    }, [searchParams])

    // useEffect(() => {
    //   let fetchShowCases = async () => {
    //     const showProducts = await loadShowCases()
    //     setOrderOptions(
    //       showProducts.map((item) => ({
    //         label: item.item.name,
    //         value: item.item.id,
    //       })),
    //     ) // Set form data from URL search parameters
    //   }
    //   fetchShowCases()
    // }, [])

    const handleInputChange = (name: string, value: string) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }

    const handleSubmit = (event: any) => {
      event.preventDefault()
      postData(formData).then(() => {
        event.target.submit()
        props.onSubmit && props.onSubmit()
      })
    }

    const p = {
      orderOptions: props.orderOptions,
      onInputChange: handleInputChange,
      formData,
      onSubmit: handleSubmit,
    } as P
    return <WrappedComponent {...p} />
  }
  return WithSubmitAction
}

export default withSubmitAction
