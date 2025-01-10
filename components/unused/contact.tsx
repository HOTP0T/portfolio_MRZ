'use client'

import { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { User } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:maxrouillonzhu@gmail.com?subject=New Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
              aria-required="true"
            />
          </div>
          <Button type="submit" className="w-full btn-primary hover-lift">
            Send Message
          </Button>
        </form>
        <div className="flex items-center justify-center">
          <Avatar className="h-48 w-48">
            <AvatarImage src="https://github.com/HOTP0T/portfolio_MRZ/blob/main/public/images/profilepic_perso.png?raw=true" alt="Profile" />
            <AvatarFallback>
              <User className="h-24 w-24" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}