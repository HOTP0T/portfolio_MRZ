import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // Here you would typically use a service like SendGrid, Mailgun, or AWS SES to send an email
    // For demonstration purposes, we'll just log the data
    console.log('Received form submission:')
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Message:', message)

    // Simulate a delay to mimic email sending
    await new Promise(resolve => setTimeout(resolve, 1000))

    // In a real application, you'd send an email here and handle any errors
    // if (errorOccurred) {
    //   return res.status(500).json({ error: 'Failed to send email' })
    // }

    return res.status(200).json({ message: 'Email sent successfully' })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}