import { NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const RESEND_API_KEY = 're_LnNSUqB2_86WXGya7hWjrMBpWboSDKGiW'

export async function POST(req: Request) {
  console.log("FFFFFF")
  try {
    // Get the body from the request
    const { name, email, budget, phone, message } = await req.json()
    // Make a POST request to Resend API
    const resendApiUrl = 'https://api.resend.com/emails'

    const response = await fetch(resendApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Acme <onboarding@resend.dev>',
        to: ['pavellob@gmail.com'],
        subject: 'Уведомление о заполнении формы обратной связи',
        html: `<body>
        <h2>Уведомление о заполнении формы обратной связи</h2>
        
        <p>Клиент заполнил форму с обратной связью. Вот детали:</p>
      
        <ul>
          <li><strong>Имя:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Телефон:</strong> ${phone}</li>
          <li><strong>Сообщение:</strong> ${message}</li>
          <li><strong>Бюджет:</strong> ${budget}</li>
        </ul>
      
        <p>Не забудьте связаться с клиентом как можно скорее!</p>
      </body>`,
      }),
    })

    // Check if the request was successful
    if (response.ok) {
      const responseData = await response.json()
      return NextResponse.json(responseData)
    } else {
      // Handle error if the request was not successful
      const errorData = await response.json()
      return NextResponse.json(errorData)
    }
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' })
  }
}
