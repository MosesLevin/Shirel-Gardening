'use client'
import NavDropdown from '@/components/NavDropdown'
import { HoverLink } from '@/components/HoverLink'
import Logo from '@/assets/Logo.svg'

export default function Navbar() {
  return (
    <nav className="flex flex-row-reverse fixed top-0 w-full justify-center gap-8 px-3 py-6 bg-white shadow ">
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
  )
}
