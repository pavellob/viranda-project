import { useSearchParams } from 'next/navigation' // Import useSearchParams from 'next/router'
import React, { useEffect, useState } from 'react'

export type FormData = {
  [key: string]: string
}

export type FormProps = {
  orderOptions: FormData
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
    console.log('result', result)
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
      setFormData(queryParams) // Set form data from URL search parameters
    }, [searchParams])

    const handleInputChange = (name: string, value: string) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }))
    }

    const handleSubmit = (event: any) => {
      event.preventDefault()
      postData(formData).then(() => {
        event.target.submit();
        props.onSubmit && props.onSubmit()
      })
    }

    const p: P = {
      onInputChange: handleInputChange,
      formData,
      onSubmit: handleSubmit,
    } as P

    return <WrappedComponent {...p}  />
  }
  return WithSubmitAction
}

export default withSubmitAction
