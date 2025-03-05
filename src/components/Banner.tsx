'use client'
import { useEffect, useState } from 'react'

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`hidden md:flex fixed top-0 left-0 w-full h-12 bg-p1c1 text-center py-2 z-40 transition-transform duration-500 ease-out hebrew-text border-b-4 border-white ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-1/4"></div>
      <div className="w-1/2 overflow-hidden relative border-x-4 border-p1c2 rounded-lg">
        <div className="absolute animate-banner-movement whitespace-nowrap animate-marquee mask-linear text-white font-sans font-medium ">
          לקוחות חדשים מקבלים הנחת שירות של 10% ועציץ חינם!
        </div>
      </div>
      <div className="w-1/4"></div>
    </div>
  )
}

export default Banner
