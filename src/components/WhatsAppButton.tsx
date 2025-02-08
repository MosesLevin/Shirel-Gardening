import React from 'react'
import WhatsAppIcon from '@/assets/SVGs/icons/WhatsApp.svg'

const WhatsAppButton = () => {
  const phoneNumber = '1234567890' // Replace with your phone number
  const message = 'Hello! I would like to chat.' // Optional: Pre-filled message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 z-50 hover:bg-green-600 text-white font-bold size-10 rounded-full flex items-center"
    >
      <WhatsAppIcon className="text-white size-8" />
    </a>
  )
}

export default WhatsAppButton
