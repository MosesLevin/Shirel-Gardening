'use client'
import React, { useState, useRef, useEffect } from 'react'
import NavDropdown from '@/components/NavDropdown'
import { DesktopNavHoverLink } from '@/components/DesktopNavHoverLink'
import MobileNavDropdown from '@/components/MobileNavDropdown'
import Logo from '@/assets/Logo.svg'

export default function Navbar() {
  // disappearing navbar on desktop
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false)
        } else {
          // Scrolling up
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [lastScrollY])

  // state for mobile menu open/close
  const [isOpen, setIsOpen] = useState(false)
  // ref for mobile menu to handle click outside
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  // if menu is open then add event listener to handle click outside and close the menu
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
            {/* Top Hamburger Line */}
            <span
              className={`absolute block h-0.5 mt-1 w-full bg-black transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
              }`}
            ></span>
            {/* Middle Hamburger Line */}
            <span
              className={`absolute block h-0.5 mt-1 w-full bg-black transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100 translate-y-1.5'
              }`}
            ></span>
            {/* Bottom Hamburger Line */}
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
          } transition-transform duration-500 ease-in-out shadow-lg `}
        >
          <button className="p-4 mt-2 focus:outline-none" onClick={toggleMenu}>
            <div className="relative h-6 w-6">
              <span className="absolute block h-0.5 w-full bg-black -rotate-45 "></span>
              <span className="absolute block h-0.5 w-full bg-black rotate-45 "></span>
            </div>
          </button>
          <nav className="mt-4 text-end ">
            <ul>
              <MobileNavDropdown label="גינון בר קיימא" />
              <MobileNavDropdown
                label="פריט 1"
                DropdownComponent={NavDropdown}
              />
              <MobileNavDropdown
                label="פריט 2"
                DropdownComponent={NavDropdown}
              />
              <MobileNavDropdown label="פריט 3" />
              <MobileNavDropdown label="Menu Item 4" href="/" />
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
      {/* motion to have effect on load */}
      <nav
        className={`hidden md:flex flex-row-reverse fixed top-0 w-full justify-center gap-8 px-3 py-6 bg-none z-50 transition-transform duration-500 ease-out ${
          // added conditional to have hide nav bar effect on scroll
          isVisible ? '-translate-y-0' : 'transform -translate-y-full'
        } `}
      >
        <div className="flex">
          <Logo className="size-14 absolute ml-8 top-2" />
        </div>
        <div className="flex gap-8">
          <DesktopNavHoverLink href="/" HoverContent={NavDropdown}>
            גינון בר קיימא
          </DesktopNavHoverLink>
          <DesktopNavHoverLink href="/" HoverContent={NavDropdown}>
            גינון
          </DesktopNavHoverLink>
          <DesktopNavHoverLink href="/" HoverContent={NavDropdown}>
            ▼google
          </DesktopNavHoverLink>
          <DesktopNavHoverLink href="/">אודות</DesktopNavHoverLink>
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
