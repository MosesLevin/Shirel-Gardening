'use client'
import Link from 'next/link'
import React, { FC, ReactNode, useState } from 'react'
import NavDropdown from './NavDropdown'

// add prop of component to pass component to it for multiple dropdowns
export default function HoverLinks() {
  return (
    <div className="flex fixed top-0 h-screen w-full justify-center px-3 py-12">
      <HoverLink href="/" HoverContent={NavDropdown}>
        Content
      </HoverLink>
    </div>
  )
}

interface HoverLinkProps {
  children: ReactNode
  href: string
  HoverContent: FC
}

const HoverLink: React.FC<HoverLinkProps> = ({
  children,
  href,
  HoverContent,
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
      <Link href={href} className="relative text-black">
        {children}
        <span
          style={{
            transform: showHoverContent ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-200 ease-out"
        />
      </Link>
      {/* if we have content then show it */}
      {showHoverContent && (
        <div className="absolute left-1/2 top-12 -translate-x-1/2 bg-black text-white">
          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent "></div>
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-red-500"></div>
          <HoverContent />
        </div>
      )}
    </div>
  )
}
