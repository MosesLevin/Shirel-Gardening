'use client'
import React, { useState, useRef, useEffect } from 'react'
import NavDropdown from '@/components/NavDropdown'
import { HoverLink } from '@/components/HoverLink'
import Logo from '@/assets/Logo.svg'

// interface for the mobile nav item
interface MobileNavItemProps {
  label: string
  DropdownComponent?: React.FC
  href?: string
}
// component for Mobile Navbar view link/dropdown
function MobileNavItem({ label, DropdownComponent, href }: MobileNavItemProps) {
  // state for dropdown open/close with ref on element to handleClickOutside
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const itemRef = useRef<HTMLLIElement>(null)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    // ref to handle clickoutside and toggle dropdown. if dropdown component exists then show it
    <li ref={itemRef} className="p-4 border-b relative">
      <div
        onClick={DropdownComponent ? toggleDropdown : undefined}
        className="flex items-center cursor-pointer justify-between"
      >
        {/* if dropdown component exists then add the arrow with the effect when its closed or open */}
        {DropdownComponent && (
          <div
            className={`transform transition-transform duration-300 ${
              isDropdownOpen ? 'rotate-90' : 'rotate-0'
            }`}
          >
            〉
          </div>
        )}
        <a href={href} className="flex-1">
          {label}
        </a>
      </div>
      {DropdownComponent && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isDropdownOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <DropdownComponent />
        </div>
      )}
    </li>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav>
      {/* Mobile Navbar */}
      <div
        className="md:hidden fixed top-0 w-full bg-white shadow z-20"
        ref={menuRef}
      >
        <button className="p-4 focus:outline-none" onClick={toggleMenu}>
          <div className="relative w-6 h-6">
            {/* Top Line */}
            <span
              className={`absolute block h-0.5 mt-1 w-full bg-black transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
              }`}
            ></span>
            {/* Middle Line */}
            <span
              className={`absolute block h-0.5 mt-1 w-full bg-black transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100 translate-y-1.5'
              }`}
            ></span>
            {/* Bottom Line */}
            <span
              className={`absolute block h-0.5 mt-1 w-full bg-black transition-transform duration-300 ${
                isOpen ? '-rotate-45 translate-y-2' : 'translate-y-3'
              }`}
            ></span>
          </div>
        </button>

        <div
          className={`fixed top-0 right-0 w-80 h-full bg-white transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-lg `}
        >
          <button className="p-4 mt-2 focus:outline-none" onClick={toggleMenu}>
            <div className="relative h-6 w-6">
              <span className="absolute block h-0.5 w-full bg-black -rotate-45 "></span>
              <span className="absolute block h-0.5 w-full bg-black rotate-45 "></span>
            </div>
          </button>
          <nav className="mt-4 text-end ">
            <ul>
              <MobileNavItem label="גינון בר קיימא" />
              <MobileNavItem label="פריט 1" DropdownComponent={NavDropdown} />
              <MobileNavItem label="פריט 2" DropdownComponent={NavDropdown} />
              <MobileNavItem label="פריט 3" />
              <MobileNavItem label="Menu Item 4" href="/" />
            </ul>
          </nav>
        </div>
      </div>

      {/* Background Overlay to Blur background Content when menu is open (Only on Mobile) */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md z-10 md:hidden"
          onClick={toggleMenu} // Close menu if clicked outside
        ></div>
      )}

      {/* Desktop Navbar */}
      <nav className="hidden md:flex flex-row-reverse fixed top-0 w-full justify-center gap-8 px-3 py-6 bg-none shado z-50">
        <div className="flex">
          <Logo className="size-14 absolute ml-8 top-2" />
        </div>
        <div className="flex gap-8">
          <HoverLink href="/" HoverContent={NavDropdown}>
            גינון בר קיימא
          </HoverLink>
          <HoverLink href="/" HoverContent={NavDropdown}>
            גינון
          </HoverLink>
          <HoverLink href="/" HoverContent={NavDropdown}>
            ▼google
          </HoverLink>
          <HoverLink href="/">אודות</HoverLink>
        </div>
        {/* Overlay to Blur Background */}
        {isOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full  bg-opacity-10 backdrop-blur-sm z-10"
            onClick={toggleMenu} // Close menu if clicked outside
          ></div>
        )}
      </nav>
    </nav>
  )
}
