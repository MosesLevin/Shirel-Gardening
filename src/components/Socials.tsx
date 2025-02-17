import React from 'react'
import WhatsAppIcon from '@/assets/SVGs/icons/WhatsApp.svg'
import InstagramIcon from '@/assets/SVGs/icons/Instagram.svg'
import { twMerge } from 'tailwind-merge'

interface SocialsInterface {
  className?: string
}

const Socials = ({ className }: SocialsInterface) => {
  const phoneNumber = '1234567890' // Replace with your phone number
  const message = 'Hello! I would like to chat.' // Optional: Pre-filled message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`

  interface SocialLink {
    name: string
    url: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    colors: string
  }

  const socials: SocialLink[] = [
    {
      name: 'WhatsApp',
      url: whatsappUrl,
      icon: WhatsAppIcon,
      colors: 'bg-green-500 hover:bg-green-600 transition-colors duration-200',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: InstagramIcon,
      colors:
        ' bg-gradient-to-b from-fuchsia-200 to-purple-400 hover:from-fuchsia-500 hover:to-purple-900',
    },
  ]

  return (
    <div className={twMerge('flex gap-4', className)}>
      {socials.map((social, idx) => {
        const Icon = social.icon
        return (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              `text-white font-bold size-10 rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out ${social.colors}`
            )}
          >
            <Icon className="text-white size-8" />
          </a>
        )
      })}
    </div>
  )
}

export default Socials
