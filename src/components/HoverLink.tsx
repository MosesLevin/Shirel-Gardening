'use client'
import Link from 'next/link'
import React, { FC, ReactNode, useState } from 'react'

// Define the interface for the hover link props
interface HoverLinkProps {
  href: string
  children?: ReactNode
  HoverContent?: FC
  linkClassName?: string
  dropdownClassName?: string
}

// Reusable HoverLink component
export const HoverLink: FC<HoverLinkProps> = ({
  children,
  href,
  HoverContent,
  linkClassName = '',
  dropdownClassName = '',
}) => {
  const [open, setOpen] = useState(false)
  // if open is true and there is content from HoverContent, showHoverContent will be true and HoverContent will be displayed (if there is a hover and any content)

  const showHoverContent = open && HoverContent

  return (
    //hover effect that you use to display HoverContent when the user hovers over the link with effect

    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative h-fit w-fit"
    >
      <Link
        href={href}
        className={`relative text-gray-800 hover:text-lime-800 transition duration-200 ${linkClassName}`}
        style={{ direction: 'ltr', unicodeBidi: '-moz-initial' }}
      >
        {children}
        <span
          style={{
            transform: showHoverContent ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-right rounded-full bg-lime-400 transition-transform duration-200 ease-out"
        />
      </Link>
      {/* if we have content then show it  adding bridging hover over gap with div from link to content*/}
      {showHoverContent && (
        <div
          className={`absolute left-1/2 top-12 -translate-x-1/2 bg-gray-50 text-black rounded-md  shadow  ${dropdownClassName}`}
        >
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent "></div>
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-50"></div>
          <HoverContent />
        </div>
      )}
    </div>
  )
}

export default HoverLink
