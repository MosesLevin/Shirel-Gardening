'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import tree from '../../assets/tree2.jpg'
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
    title: 'שירות 1',
    description:
      'אלו פרטי   ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום  שירות  המוצע מס 1.',
    background:
      'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'שירות 2',
    description: 'אלו פרטי השירות המוצע מס 2.',
    background:
      'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'שירות 3',
    description: 'אלו פרטי השירות המוצע מס 3.',
    background:
      'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'שירות 4',
    description: 'אלו פרטי השירות המוצע מס 4.',
    background:
      'https://www.rainbowlawncare.com/wp-content/uploads/2017/02/RLC-no-mow-guy-768x475.jpg.webp',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'שירות 5',
    description: 'אלו פרטי השירות המוצע מס 5.',
    background:
      'https://www.rainbowlawncare.com/wp-content/uploads/2017/02/RLC-no-mow-guy-768x475.jpg.webp',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
  {
    title: 'שירות 6',
    description: 'אלו פרטי השירות המוצע מס 6.',
    background:
      'https://www.rainbowlawncare.com/wp-content/uploads/2017/02/RLC-no-mow-guy-768x475.jpg.webp',
    icon: <TestIcon className="size-8 text-p1c4" />,
  },
]

const Services = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const [customAnimation, setCustomAnimation] = useState(false)

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true)

    setTimeout(() => {
      setCustomAnimation(true)
    }, 300)
  }

  return (
    <div className="container ">
      <SectionHeader
        eyeCatch="שירותינו"
        title="שירותי גננות בר קיימא"
        description="רכים מדע של, בקר מיזמי אנתרופולוגיה ב. סדר נבחרים יוצרים התפתחות של, אנא או רפואה הגרפים, בקר אם מיותר אינטרנט?"
        underlinedWord="בר קיימא"
      />
      <div className="flex flex-col md:flex-row w-full p-8 gap-8 font-sans">
        {/* Left Section (Services Cards) */}
        <div className="w-full md:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              style={{}}
              initial={{ opacity: 0, x: -40 }} // Using 'x' instead of 'transform'
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: 'spring', ease: 'easeInOut', delay: 0.1 }}
              viewport={{ amount: 'all', once: true, margin: '50px' }}
              onAnimationComplete={handleAnimationComplete}
            >
              {/* Content */}
              <div className="relative md:rounded-lg p-4 group md:shadow md:hover:translate-y-[-10px] md:transition-all md:duration-200  overflow-hidden md:before:content-[''] md:before:absolute md:before:inset-0 md:before:border-[1px] md:before:border-transparent md:before:rounded-lg md:before:transition-all md:before:duration-200 md:hover:before:border-black/30 md:before:z-10 md:h-44 ">
                {service.background && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-200 md:group-hover:opacity-100 rounded-lg"
                    style={{ backgroundImage: `url(${service.background})` }}
                  />
                )}
                <div className="md:flex items-center md:justify-between justify-center w-1/2  md:w-full translate-x-1/2 md:translate-x-0">
                  <div className="bg-p1c1 md:bg-gray-200  size-12 rounded-full flex justify-center items-center text-white mx-auto md:mx-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-xl font-semibold text-black md:inline-flex my-4 hebrew-text text-center md:text-start ${
                        isAnimationComplete
                          ? 'md:shadow-none text-white md:text-black border-black/50 border-[1px] md:border-none bg-p1c1 rounded-lg transition-all duration-300 md:bg-transparent'
                          : ''
                      } ${
                        customAnimation
                          ? 'sm:button-animation md:button-animation-none'
                          : ''
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-2 text-gray-900 my-4 relative z-10 md:w-5/6 hebrew-text text-center md:text-start ml-auto p-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Section (Image on Desktop, Top on Mobile) */}
        <div className="md:w-1/2">
          <Image
            src={tree}
            alt="Services Image"
            width={600}
            height={400}
            className="rounded-xl object-cover h-full w-full md:h-[90%] md:w-[90%] "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default Services

// Animated GPT version:

// 'use client'

// import React, { useRef, useEffect } from 'react'
// import Image from 'next/image'
// import tree from '../../assets/tree2.jpg'
// import TestIcon from '@/assets/SVGs/icons/icon.svg'
// import SectionHeader from '@/components/SectionHeader'
// import IconGradient from '@/components/IconGradient'
// import { motion, useAnimation, useInView } from 'framer-motion'

// type InterfaceServices = {
//   title: string
//   description: string
//   background: string
//   icon: React.ReactNode
// }

// const services: InterfaceServices[] = [
//   {
//     title: 'שירות 1',
//     description: 'אלו פרטי השירות המוצע מס 1.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 2',
//     description: 'אלו פרטי השירות המוצע מס 2.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 2',
//     description: 'אלו פרטי השירות המוצע מס 2.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 2',
//     description: 'אלו פרטי השירות המוצע מס 2.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 2',
//     description: 'אלו פרטי השירות המוצע מס 2.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 2',
//     description: 'אלו פרטי השירות המוצע מס 2.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
// ]

// const Services = () => {
//   return (
//     <div className="container mt-36 md:mt-4">
//       <SectionHeader
//         eyeCatch="מי אנחנו"
//         title="שירותי גננות בר קיימא"
//         description="ב החופשית בהיסטוריה עוד..."
//         underlinedWord="בר קיימא"
//       />
//       <div className="flex flex-col md:flex-row w-full p-8 gap-8 font-sans">
//         {/* Left Section (Services Cards) */}
//         <div className="w-full md:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 gap-2">
//           {services.map((service, index) => (
//             <AnimatedServiceCard key={index} service={service} />
//           ))}
//         </div>

//         {/* Right Section (Image on Desktop, Top on Mobile) */}

//         <div className="md:w-1/2">
//           <Image
//             src={tree}
//             alt="Services Image"
//             width={600}
//             height={400}
//             className="rounded-xl object-cover h-[90%] w-[90%]"
//           />
//           <div
//             className="absolute text-wrap w-72 md:w-64 lg:w-[360px] p-2 rounded-es-full rounded-r-full -translate-y-1/2 text-end"
//             style={{
//               backgroundImage:
//                 'linear-gradient(to top, #D1D5DB 100%, transparent 50%)',
//             }}
//           >
//             טקסט על כמה שירוק ובר קיימא הגן. תקנו פה! כדאי מאוד לא לפספס!
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const AnimatedServiceCard = ({ service }: { service: InterfaceServices }) => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { amount: 0.4, once: false }) // Mobile Scroll Trigger
//   const controls = useAnimation()

//   useEffect(() => {
//     if (isInView) {
//       controls.start({
//         backgroundImage: `url(${service.background})`,
//         opacity: 1,
//       })
//     } else {
//       controls.start({ opacity: 0 })
//     }
//   }, [isInView, controls, service.background])

//   return (
//     <div
//       ref={ref}
//       className="relative md:rounded-lg p-4 group text-center transition-all duration-200 md:shadow-lg"
//     >
//       {/* Background for Mobile (Animates on Scroll) */}
//       <motion.div
//         animate={controls}
//         initial={{ opacity: 0 }}
//         transition={{ duration: 0.4, ease: 'easeInOut' }}
//         className="absolute inset-0 bg-cover bg-center rounded-lg lg:hidden"
//         style={{ backgroundImage: `url(${service.background})` }}
//       />

//       {/* Background for Desktop (Changes on Hover via Tailwind) */}
//       <div
//         className="absolute inset-0 bg-cover bg-center rounded-lg hidden lg:block transition-opacity duration-500 opacity-0 group-hover:opacity-100"
//         style={{ backgroundImage: `url(${service.background})` }}
//       />

//       {/* Content (Always Visible) */}
//       <div className="md:flex items-center md:justify-between justify-center relative z-10">
//         <div className="bg-gray-200 size-12 rounded-full flex justify-center items-center text-white mx-auto md:mx-0 mb-6 md:mb-0">
//           {service.icon}
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold text-black md:inline-flex my-4 mt-8">
//             {service.title}
//           </h3>
//         </div>
//       </div>
//       <p className="mt-2 text-gray-900 my-12 relative z-10 md:text-end md:w-5/6 ml-auto">
//         {service.description}
//       </p>
//     </div>
//   )
// }

// export default Services

// COMPONENT BEFORE EFFECTS:

// import React from 'react'
// import Image from 'next/image'
// import tree from '../../assets/tree2.jpg'
// import TestIcon from '@/assets/SVGs/icons/icon.svg'
// import SectionHeader from '@/components/SectionHeader'
// import IconGradient from '@/components/IconGradient'

// type interfaceServices = {
//   title: string
//   description: string
//   background: string
//   icon: React.ReactNode
// }

// const services: interfaceServices[] = [
//   {
//     title: 'שירות 1',
//     description: 'אלו פרטי השירות המוצע מס 1.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 2',
//     description: 'אלו פרטי השירות המוצע מס 2.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 3',
//     description: 'אלו פרטי השירות המוצע מס 3.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <TestIcon className="size-6" />,
//   },
//   {
//     title: 'שירות 4',
//     description: 'אלו פרטי השירות המוצע מס 4.',
//     background: '',
//     icon: <TestIcon className="size-6" />,
//   },
//   {
//     title: 'שירות 5',
//     description: 'אלו פרטי השירות המוצע מס 5.',
//     background: '/path/to/bg5.jpg',
//     icon: <TestIcon className="size-6" />,
//   },
//   {
//     title: 'שירות 6',
//     description: 'אלו פרטי השירות המוצע מס 6.',
//     background: '/path/to/bg6.jpg',
//     icon: <TestIcon className="size-6" />,
//   },
// ]

// const Services = () => {
//   return (
//     <div className="container mt-36 md:mt-4">
//       <SectionHeader
//         eyeCatch="מי אנחנו"
//         title="שירותי גננות בר קיימא"
//         description="ב החופשית בהיסטוריה עוד. אל בהשחתה טכניים היא. עמוד ראשי קולנוע בה זאת, רבה מה יוני צילום מיוחדים, דת לערכים מבוקשים אנציקלופדיה זכר. ישראל לעריכה זכר בה. שער ב שמות בגרסה והגולשים, כדי אם יסוד הבקשה, צרפתית הספרות אחר גם. בדף רב־לשוני לויקיפדים בהתייחסות של, אל החול צרפתית ויקימדיה בקר. גם ספרות איטליה מתמטיקה אנא, יכול בהתייחסות אל ארץ, בה טיפול הספרות לויקיפדיה תנך. את שונה נבחרים ואמנות צעד, סדר גם ספרות יוצרים, שתי ב והגולשים וספציפיים. זאת של החלה לערך. זכר את הרוח לערך והוא, מלא לערך כלשהו אם, שתי או שאלות משפטים ארכיאולוגיה. ליום בשפה או דרס"
//         underlinedWord="בר קיימא"
//       />
//       <div className="flex flex-col md:flex-row w-full p-8 gap-8 font-sans">
//         {/* Left Section (Services Cards) */}
//         <div className="w-full md:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 gap-2 ">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative md:rounded-lg p-4 group text-center transition-all duration-200 md:hover:transform md:hover:translate-y-[-5px] md:shadow-lg "
//             >
//               {/* Content */}
//               <div className="md:flex items-center md:justify-between justify-center">
//                 <div className="bg-gray-200 size-12 rounded-full flex justify-center items-center text-white mx-auto md:mx-0 mb-6 md:mb-0">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-black md:inline-flex my-4  mt-8 ">
//                     {service.title}
//                   </h3>
//                 </div>
//               </div>
//               <p className="mt-2 text-gray-900 my-12 relative z-10 md:text-end md:w-5/6 ml-auto">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* Right Section (Image on Desktop, Top on Mobile) */}
//         <div className="md:w-1/2">
//           <Image
//             src={tree}
//             alt="Services Image"
//             width={600}
//             height={400}
//             className="rounded-xl object-cover h-[90%] w-[90%] "
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services

//

// COMPONENT BEFORE EFFECTS ORIGINAL VERSION

// import React from 'react'
// import Image from 'next/image'
// import tree from '../../assets/tree2.jpg'
// import TestIcon from '@/assets/SVGs/icons/icon.svg'
// import SectionHeader from '@/components/SectionHeader'
// import IconGradient from '@/components/IconGradient'

// type interfaceServices = {
//   title: string
//   description: string
//   background: string
//   icon: React.ReactNode
// }

// const services: interfaceServices[] = [
//   {
//     title: 'שירות 1',
//     description: 'אלו פרטי השירות המוצע מס 1.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 2',
//     description: 'אלו פרטי השירות המוצע מס 2.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <IconGradient component={TestIcon} size="size-8" />,
//   },
//   {
//     title: 'שירות 3',
//     description: 'אלו פרטי השירות המוצע מס 3.',
//     background:
//       'https://img.freepik.com/free-vector/hand-drawn-abstract-outline-background_23-2150695205.jpg?t=st=1738168359~exp=1738171959~hmac=ee9e1ea102f8c350b681f28d7ef6cf680633794f8b4e3b91f804211536c6db1d&w=2000',
//     icon: <TestIcon className="size-6" />,
//   },
//   {
//     title: 'שירות 4',
//     description: 'אלו פרטי השירות המוצע מס 4.',
//     background: '',
//     icon: <TestIcon className="size-6" />,
//   },
//   {
//     title: 'שירות 5',
//     description: 'אלו פרטי השירות המוצע מס 5.',
//     background: '/path/to/bg5.jpg',
//     icon: <TestIcon className="size-6" />,
//   },
//   {
//     title: 'שירות 6',
//     description: 'אלו פרטי השירות המוצע מס 6.',
//     background: '/path/to/bg6.jpg',
//     icon: <TestIcon className="size-6" />,
//   },
// ]

// const Services = () => {
//   return (
//     <div className="container mt-36 md:mt-4">
//       <SectionHeader
//         eyeCatch="מי אנחנו"
//         title="שירותי גננות בר קיימא"
//         description="ב החופשית בהיסטוריה עוד. אל בהשחתה טכניים היא. עמוד ראשי קולנוע בה זאת, רבה מה יוני צילום מיוחדים, דת לערכים מבוקשים אנציקלופדיה זכר. ישראל לעריכה זכר בה. שער ב שמות בגרסה והגולשים, כדי אם יסוד הבקשה, צרפתית הספרות אחר גם. בדף רב־לשוני לויקיפדים בהתייחסות של, אל החול צרפתית ויקימדיה בקר. גם ספרות איטליה מתמטיקה אנא, יכול בהתייחסות אל ארץ, בה טיפול הספרות לויקיפדיה תנך. את שונה נבחרים ואמנות צעד, סדר גם ספרות יוצרים, שתי ב והגולשים וספציפיים. זאת של החלה לערך. זכר את הרוח לערך והוא, מלא לערך כלשהו אם, שתי או שאלות משפטים ארכיאולוגיה. ליום בשפה או דרס"
//         underlinedWord="בר קיימא"
//       />
//       <div className="flex flex-col md:flex-row w-full p-8 gap-8 font-sans">
//         {/* Left Section (Services Cards) */}
//         <div className="w-full md:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 gap-2 ">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="relative md:rounded-lg p-4 group text-center transition-all duration-200 md:hover:transform md:hover:translate-y-[-5px] md:shadow-lg "
//             >
//               {/* Content */}
//               <div className="md:flex items-center md:justify-between justify-center">
//                 <div className="bg-gray-200 size-12 rounded-full flex justify-center items-center text-white mx-auto md:mx-0 mb-6 md:mb-0">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-black md:inline-flex my-4  mt-8 ">
//                     {service.title}
//                   </h3>
//                 </div>
//               </div>
//               <p className="mt-2 text-gray-900 my-12 relative z-10 md:text-end md:w-5/6 ml-auto">
//                 {service.description}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* Right Section (Image on Desktop, Top on Mobile) */}
//         <div className="md:w-1/2">
//           <Image
//             src={tree}
//             alt="Services Image"
//             width={600}
//             height={400}
//             className="rounded-xl object-cover h-[90%] w-[90%] "
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services
