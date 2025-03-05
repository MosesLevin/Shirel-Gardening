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
  onClick?: () => void
}

const NavServices: React.FC<NavServicesProps> = ({
  items,
  defaultImage,
  onClick,
}) => {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null)

  return (
    <div className="hebrew-text">
      <div className="flex">
        {/* Right Side - List of Buttons */}
        <div className="w-full md:w-1/2 md:p-4 grid grid-cols-2 gap-2 md:grid-cols-none md:flex-col">
          {items.map((item) => (
            <Link href={item.href} key={item.id} passHref>
              <div
                onMouseEnter={() => setHoveredItemId(item.id)}
                onMouseLeave={() => setHoveredItemId(null)}
                className="mb-3 md:mb-4"
                onClick={onClick}
              >
                <CTAButton
                  text={item.text}
                  className="w-full items-center justify-center font-sans font-semibold px-2 py-4 md:px-4 md:py-3 text-white text-sm tracking-widest rounded-2xl border-stone-800 bg-p1c1 shadow-[0_10px_0_0_#292524] hover:shadow-[0_7px_0_0_#292524] "
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Left Side - Image Display */}
        <div className="hidden md:flex w-1/2 p-4 mt-4 ml-4 relative h-96">
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
