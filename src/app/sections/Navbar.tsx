'use client'
import React, { useState, useRef } from 'react'
import NavDropdown from '@/components/NavDropdown'
import { HoverLink } from '@/components/HoverLink'
import Logo from '@/assets/Logo.svg'

export default function Navbar() {
  // isOpen is a state that toggles the mobile menu
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <div
        className="md:hidden fixed top-0 w-full bg-white shadow"
        ref={menuRef}
      >
        {/* Mobile Navbar */}
        <button className="p-4 focus:outline-none" onClick={toggleMenu}>
          ☰
        </button>
        <div
          className={`fixed top-0 right-0 w-80 h-full bg-white transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-lg`}
        >
          <button className="p-4 focus:outline-none" onClick={toggleMenu}>
            ✕
          </button>
          <nav className="mt-4">
            <ul>
              {' '}
              <HoverLink href="/" HoverContent={NavDropdown}>
                גינון בר קיימא
              </HoverLink>
              <li className="p-4 border-b">Menu Item 1</li>
              <li className="p-4 border-b">Menu Item 2</li>
              <li className="p-4 border-b">Menu Item 3</li>
              <li className="p-4 border-b">Menu Item 4</li>
            </ul>
          </nav>
        </div>
      </div>

      <nav className="hidden md:flex flex-row-reverse fixed top-0 w-full justify-center gap-8 px-3 py-6 bg-white shadow">
        {/* Desktop Navbar */}
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
      </nav>
    </nav>
  )
}
