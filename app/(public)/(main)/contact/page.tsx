import ContactForm from '@/components/ContactForm'
import GradientShadow from '@/components/GradientShadow'
import React from 'react'

export const metadata = {
    title: 'Contact | BrianNelson.Dev'
}

export default function Contact() {
  const numbers = [1, 2, 3, 4, 5, 6]
  return (
    <main>
      <ContactForm />
    </main>
  )
}