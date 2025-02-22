import React from 'react'
import WhatsAppIcon from '@/assets/SVGs/icons/WhatsApp.svg'
import InstagramIcon from '@/assets/SVGs/icons/Instagram.svg'
import FacebookIcon from '@/assets/SVGs/icons/Facebook.svg'
import YoutubeIcon from '@/assets/SVGs/icons/Youtube.svg'

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
      colors: 'bg-[#25d366]',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      icon: FacebookIcon,
      colors: 'bg-[#3b5999]',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com',
      icon: InstagramIcon,
      colors:
        'bg-[#e4405f] bg-gradient-to-b from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com',
      icon: YoutubeIcon,
      colors: 'bg-[#cd201f]',
    },
  ]

  return (
    <div className={twMerge('flex gap-4 md:gap-8', className)}>
      {socials.map((social, idx) => {
        const Icon = social.icon
        return (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={twMerge(
              ` font-bold size-14 md:size-11 rounded-full flex items-center justify-center ease-in-out opacity-75 hover:opacity-100 transition-opacity duration-200 border border-stone-300 ${social.colors}`
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
