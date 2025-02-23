'use client'
// import React, { useState } from 'react'
import Image from 'next/image'
import ImageServices from '@/assets/tree2.jpg'
import TestIcon from '@/assets/SVGs/icons/icon.svg'
import SectionHeader from '@/components/SectionHeader'
// import IconGradient from '@/components/IconGradient'
import { motion } from 'framer-motion'

type interfaceServices = {
  title: string
  description: string
  background: string
  icon: React.ReactNode
}

const services: interfaceServices[] = [
  {
    title: 'הקמת גינות',
    description:
      'ניבאה. דס איאקוליס וולופטה דיאם. וטבולום אט דולור, קראס אגת לקטוס',
    background:
      'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'אחזקת גינות',
    description:
      'אלו פרטי   ניסי נון ניבאה. דס איאקוליס וולופטה דיאם וואל אאוגו וסטיבולום  שירות  המוצע מס 1.',
    background:
      'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'גיזום עצים',
    description: 'א. וסטבולום אט דולור, קראס אגת לקטוס',
    background:
      'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: "פרמקלצ'ר",
    description: 'באה. דס איאקוליס וולופטה וולופטה וולופטה דיאם וואל ',
    background:
      'https://www.rainbowlawncare.com/wp-content/uploads/2017/02/RLC-no-mow-guy-768x475.jpg.webp',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'מערכות השקייה',
    description: 'באה. דס  איאקוליס איאקוליס וולופטה דיאם וואל ',
    background:
      'https://www.rainbowlawncare.com/wp-content/uploads/2017/02/RLC-no-mow-guy-768x475.jpg.webp',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'עבודות עץ',
    description: 'באה. דס איאקוליס וולופטה דיאם וואל ופטה דיא ופטה דיא ',
    background:
      'https://www.rainbowlawncare.com/wp-content/uploads/2017/02/RLC-no-mow-guy-768x475.jpg.webp',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
]

const Services = () => {
  // const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  // const [customAnimation, setCustomAnimation] = useState(false)

  // const handleAnimationComplete = () => {
  //   setIsAnimationComplete(true)

  //   setTimeout(() => {
  //     setCustomAnimation(true)
  //   }, 300)
  // }

  return (
    <div className="container hebrew-text">
      <SectionHeader
        eyeCatch="שירותינו"
        title="שירותי גננות בר קיימא"
        description="רכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט?"
        underlinedWord="בר קיימא"
      />
      <div className="flex flex-col md:flex-row w-full p-6 gap-8 font-sans">
        {/* Right Section (Image on Desktop, Top on Mobile) */}
        <div className="md:w-1/2">
          <Image
            src={ImageServices}
            alt="Services Image"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full md:h-[90%] md:w-[90%] "
            loading="lazy"
          />
        </div>
        {/* Left Section (Services Cards) */}
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{}}
              initial={{ opacity: 0, x: -40 }} // Using 'x' instead of 'transform'
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', ease: 'easeInOut', delay: 0.1 }}
              viewport={{ amount: 'all', once: true, margin: '50px' }}
              // onAnimationComplete={handleAnimationComplete}
            >
              {/* Content */}

              <div className="relative justify-items-center flex-col md:rounded-xl p-4 group md:shadow-md md:border-black/30 md:border-[1px] md:hover:translate-y-[-10px] md:transition-all md:duration-200  overflow-hidden md:before:content-[''] md:before:absolute md:before:border-[1px] md:before:border-transparent md:before:rounded-lg md:before:transition-all md:before:duration-200 md:hover:before:border-black/30 md:before:z-10 md:h-44 z-0">
                {service.background && (
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-0 transition-opacity duration-200 md:group-hover:opacity-100 rounded-lg"
                    style={{ backgroundImage: `url(${service.background})` }}
                  />
                )}
                <div className="md:flex relative items-center md:justify-between justify-center md:w-full z-0">
                  <div>
                    {/* conditional divs for services mobile/desktop design */}
                    <div className="md:flex md:items-center md:justify-between">
                      {/* mobile */}
                      <div className="md:hidden border-black/30 md:bg-gray-200 size-12 rounded-full flex justify-center items-center text-white mx-auto md:mx-0 z-10 relative">
                        {service.icon}
                      </div>
                      <h3
                        className={`md:hidden text-xl font-semibold text-white  my-3 text-center px-4 py-4 rounded-2xl border-stone-800 bg-p1c1 shadow-[0_10px_0_0_#292524] hover:shadow-[0_7px_0_0_#292524] tracking-widest transition-all duration-200 ease-in-out active:shadow-none active:translate-y-1 active:duration-200 border-y-2 border-x-2 z-10 `}
                      >
                        {service.title}
                      </h3>
                      {/* tablet+ */}
                      <h3
                        className={`text-xl hidden relative md:block font-semibold text-black text-center md:text-start z-10`}
                      >
                        {service.title}
                      </h3>
                      <div className="hidden md:flex border-black/30 border-[1px] p-2 md:bg-gray-200 size-12 rounded-full justify-center items-center text-white mx-auto md:mx-0 z-10 relative">
                        {service.icon}
                      </div>
                    </div>
                    <p className="mt-2 text-gray-900 my-4 relative md:w-5/6 text-center md:text-start ml-auto p-1 z-10 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
