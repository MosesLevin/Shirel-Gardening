import React, { useState } from 'react'
import CTAButton from './CTAButton'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface NavServicesProps {
  items: Array<{
    id: string
    text: string
    href: string
    imageUrl: string | StaticImageData
  }>
  defaultImage: string | StaticImageData
}

const NavServices: React.FC<NavServicesProps> = ({ items, defaultImage }) => {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null)

  return (
    <div className="hebrew-text">
      <div className="flex">
        {/* Right Side - List of Buttons */}
        <div className="w-full md:w-1/2 p-4">
          {items.map((item) => (
            <Link href={item.href} key={item.id} passHref>
              <div
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className="mb-4"
              >
                <CTAButton text={item.text} className="text-base w-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* Left Side - Image Display */}
        <div className="hidden md:flex w-1/2 p-4 mt-4 ml-4 relative h-[450px]">
          {/* Image Wrapper */}
          <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
            {/* Default Image (Only visible when no button is hovered) */}
            <Image
              src={defaultImage}
              alt="Default Image"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" //
              className={`rounded-lg object-cover border-[1px] border-p1c1/50 transition-opacity duration-500 ease-in-out ${
                hoveredItemId ? 'opacity-0' : 'opacity-100'
              }`}
              loading="eager"
              quality={75}
            />

            {items.map((item) => (
              <Image
                key={item.id}
                src={item.imageUrl}
                alt={`Hovered Image ${item.id}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`absolute inset-0 rounded-lg object-cover border-[1px] border-p1c1/50 transition-opacity duration-500 ease-in-out ${
                  hoveredItemId === item.id ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                quality={50}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavServices
