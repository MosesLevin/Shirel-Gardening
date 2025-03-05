'use client'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC, ReactNode, useState } from 'react'

// Define the interface for the hover link props
interface DesktopNavHoverLinkProps {
  href: string
  children?: ReactNode
  HoverContent?: FC
  linkClassName?: string
  dropdownClassName?: string
}

// Reusable HoverLink component
export const DesktopNavHoverLink: FC<DesktopNavHoverLinkProps> = ({
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
      className="group relative h-fit w-fit hebrew-text"
      onClick={() => setOpen(false)}
    >
      {/* have a link with name of Children (text in navbar) and if we have Content show it transform it from scale0 to scale1 and show it beneath it in a div */}
      <Link
        href={href}
        className={`relative text-gray-800 hover:text-p1c1/80 transition duration-200 ${linkClassName}`}
      >
        {children}
        <span
          style={{
            transform: showHoverContent ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className="absolute -bottom-2 left-0 right-0 h-1 origin-right rounded-full bg-p1c1 transition-transform duration-200 ease-out"
        />
      </Link>
      {/* for the exit animation to work we need to animate presence incase we re-trigger to show during exit animation */}
      <AnimatePresence>
        {/* if we have content then show it  adding bridging hover over gap with div from link to content*/}
        {showHoverContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`absolute left-1/2 top-12  bg-gray-50 text-black rounded-md  shadow  ${dropdownClassName}`}
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent "></div>
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-50"></div>
            <HoverContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DesktopNavHoverLink
