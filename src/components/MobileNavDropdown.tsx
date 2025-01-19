'use client'
import { useEffect, useRef, useState } from 'react'

// interface for the mobile nav item
interface MobileNavDropdownProps {
  label: string
  DropdownComponent?: React.FC
  href?: string
}
// component for Mobile Navbar view link/dropdown
export default function MobileNavDropdown({
  label,
  DropdownComponent,
  href,
}: MobileNavDropdownProps) {
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
      {/* motion div for */}
      {DropdownComponent && (
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isDropdownOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <DropdownComponent />
        </div>
      )}
    </li>
  )
}
