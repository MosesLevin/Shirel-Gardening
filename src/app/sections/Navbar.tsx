'use client'
import React, { useState, useRef, useEffect } from 'react'
import NavDropdown from '@/components/NavDropdown'
import { DesktopNavHoverLink } from '@/components/DesktopNavHoverLink'
import MobileNavDropdown from '@/components/MobileNavDropdown'
import Logo from '@/assets/Logo.svg'
import Socials from '@/components/Socials'

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
        className="md:hidden fixed left-[83%] top-4 w-full bg-none z-50"
        ref={menuRef}
      >
        {/* Hamburger Menu */}
        <button
          className="p-3 rounded-md fixed top-4 right-4 focus:outline-none bg-p1c1 z-[60]"
          onClick={toggleMenu}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute block h-0.5 mt-1 w-full bg-white transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 mt-1 w-full bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100 translate-y-1.5'
              }`}
            ></span>
            <span
              className={`absolute block h-0.5 mt-1 w-full bg-white transition-transform duration-300 ${
                isOpen ? '-rotate-45 translate-y-2' : 'translate-y-3'
              }`}
            ></span>
          </div>
        </button>

        <div
          ref={menuRef}
          className={`fixed top-0 right-0 w-80 h-full bg-white transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out shadow-lg z-50`}
        >
          <button className="p-4 mt-2 focus:outline-none" onClick={toggleMenu}>
            <div className="relative h-6 w-6">
              {/* <span className="absolute block h-0.5 w-full bg-black -rotate-45"></span>
              <span className="absolute block h-0.5 w-full bg-black rotate-45"></span> */}
            </div>
          </button>
          <nav className="mt-4 text-end">
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
          {/* Socials Component for Mobile */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <Socials />
          </div>
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
      <span
        className={`hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2 w-full justify-center gap-8 px-3 py-[1.1rem] bg-white border-b-p1c1 border-[1px] z-50 transition-transform duration-500 ease-out ${
          isVisible ? 'translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        <nav>
          <div className="flex gap-6 items-center">
            <DesktopNavHoverLink
              href="/"
              HoverContent={NavDropdown}
              linkClassName="text-black font-sans font-medium text-xl"
            >
              גינון בר קיימא
            </DesktopNavHoverLink>
            <DesktopNavHoverLink
              href="/"
              HoverContent={NavDropdown}
              linkClassName="text-black font-sans font-medium text-xl"
            >
              <span className="flex">
                <span>גינון</span>
                <span className="translate-y-[0.4em] -rotate-90 mr-1">〉</span>
              </span>
            </DesktopNavHoverLink>
            <div className="flex-shrink-0 mx-2">
              <Logo className="size-14 absolute top-1 -translate-x-1/2 text-black" />
            </div>
            <DesktopNavHoverLink
              href="/"
              HoverContent={NavDropdown}
              linkClassName="text-black font-sans font-medium text-xl"
            >
              <span className="flex">
                <span>שירותים</span>
                <span className="translate-y-[0.4em] -rotate-90 mr-1">〉</span>
              </span>
            </DesktopNavHoverLink>
            <DesktopNavHoverLink
              href="/"
              linkClassName="text-black font-sans font-medium text-xl"
            >
              אודות
            </DesktopNavHoverLink>
          </div>
        </nav>
        {/* Socials Component for Desktop */}
        <div className="hidden md:block absolute z-50 top-2 left-2">
          {/* <Socials /> */}
        </div>
      </span>
    </nav>
  )
}
