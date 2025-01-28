import React from 'react'
import Image from 'next/image'
import tree from '../../assets/tree2.jpg'
import TestIcon from '@/assets/SVGs/icons/icon.svg'
import SectionHeader from '@/components/SectionHeader'

type interfaceServices = {
  title: string
  description: string
  background: string
  icon: React.ReactNode
}
// "Stack" or toolbox - all could be pulled from a database if larger projectand not hard coded
const services: interfaceServices[] = [
  {
    title: 'שירות 1',
    description: 'אלו פרטי השירות המוצע מס 1.',
    background: '',
    icon: <TestIcon className="size-4" />,
  },
  {
    title: 'שירות 2',
    description: 'אלו פרטי השירות המוצע מס 2.',
    background: '',
    icon: <TestIcon />,
  },
  {
    title: 'שירות 3',
    description: 'אלו פרטי השירות המוצע מס 3.',
    background: '',
    icon: <TestIcon />,
  },
  {
    title: 'שירות 4',
    description: 'אלו פרטי השירות המוצע מס 4.',
    background: '',
    icon: <TestIcon />,
  },
  {
    title: 'שירות 5',
    description: 'אלו פרטי השירות המוצע מס 5.',
    background: '/path/to/bg5.jpg',
    icon: <TestIcon />,
  },
  {
    title: 'שירות 6',
    description: 'אלו פרטי השירות המוצע מס 6.',
    background: '/path/to/bg6.jpg',
    icon: <TestIcon />,
  },
]

const Services = () => {
  return (
    <div className="container mt-36 md:mt-4">
      <SectionHeader
        eyeCatch="מי אנחנו"
        title="שירותי גננות בר קיימא"
        description="ב החופשית בהיסטוריה עוד. אל בהשחתה טכניים היא. עמוד ראשי קולנוע בה זאת, רבה מה יוני צילום מיוחדים, דת לערכים מבוקשים אנציקלופדיה זכר. ישראל לעריכה זכר בה. שער ב שמות בגרסה והגולשים, כדי אם יסוד הבקשה, צרפתית הספרות אחר גם. בדף רב־לשוני לויקיפדים בהתייחסות של, אל החול צרפתית ויקימדיה בקר. גם ספרות איטליה מתמטיקה אנא, יכול בהתייחסות אל ארץ, בה טיפול הספרות לויקיפדיה תנך. את שונה נבחרים ואמנות צעד, סדר גם ספרות יוצרים, שתי ב והגולשים וספציפיים. זאת של החלה לערך. זכר את הרוח לערך והוא, מלא לערך כלשהו אם, שתי או שאלות משפטים ארכיאולוגיה. ליום בשפה או דרס"
        underlinedWord="בר קיימא"
      />
      <div className="flex flex-col md:flex-row w-full p-8 gap-8">
        {/* Left Section (Services Cards) */}
        <div className="w-full md:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 gap-2 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden md:rounded-lg p-4 group md:hover:scale-[105%] md:hover:shadow-lg transition-transform duration-200 text-center"
            >
              {/* Background Image (always visible) */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-100"
                style={{ backgroundImage: `url(${service.background})` }}
              ></div>

              {/* Content */}
              <div className="md:flex items-center justify-between relative z-10">
                <div className="ml-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black md:inline-flex">
                  {service.title}
                </h3>
              </div>
              <p className="mt-2 text-gray-900 my-12 relative z-10 md:text-end md:w-5/6 ml-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {/* Right Section (Image on Desktop, Top on Mobile) */}
        <div className="md:w-1/2">
          <Image
            src={tree}
            alt="Services Image"
            width={600}
            height={400}
            className="rounded-xl object-cover h-[95%]"
          />
        </div>
      </div>
    </div>
  )
}

export default Services

// <SectionHeader
// eyeCatch="מי אנחנו"
// title="שירותי גננות בר קיימא"
// description="ב החופשית בהיסטוריה עוד. אל בהשחתה טכניים היא. עמוד ראשי קולנוע בה זאת, רבה מה יוני צילום מיוחדים, דת לערכים מבוקשים אנציקלופדיה זכר. ישראל לעריכה זכר בה. שער ב שמות בגרסה והגולשים, כדי אם יסוד הבקשה, צרפתית הספרות אחר גם. בדף רב־לשוני לויקיפדים בהתייחסות של, אל החול צרפתית ויקימדיה בקר. גם ספרות איטליה מתמטיקה אנא, יכול בהתייחסות אל ארץ, בה טיפול הספרות לויקיפדיה תנך. את שונה נבחרים ואמנות צעד, סדר גם ספרות יוצרים, שתי ב והגולשים וספציפיים. זאת של החלה לערך. זכר את הרוח לערך והוא, מלא לערך כלשהו אם, שתי או שאלות משפטים ארכיאולוגיה. ליום בשפה או דרס"
// underlinedWord="בר קיימא"
// />

// import SectionHeader from '@/components/SectionHeader'

// export default function Services() {
//   const service = [
//     {
//       title: 'Service 1',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nullam non ligula ut dolor suscipit iaculis. Sed ac lacus nec nunc ultricies ultricies. Nam ut sapien auctor, commodo purus sit amet, vulputate nunc. Sed nec libero non felis ornare tincidunt. Nullam nec eros nec mi blandit tincidunt. Donec auctor, nunc nec ultricies aliqu',
//       icon: 'icon1',
//     },
//   ]

//   return (
//     <div className="bg-slate-100">
//       <div className="container  py-12">
//         <SectionHeader
//           eyeCatch="מי אנחנו"
//           title="שירותי גננות בר קיימא"
//           description="ב החופשית בהיסטוריה עוד. אל בהשחתה טכניים היא. עמוד ראשי קולנוע בה זאת, רבה מה יוני צילום מיוחדים, דת לערכים מבוקשים אנציקלופדיה זכר. ישראל לעריכה זכר בה. שער ב שמות בגרסה והגולשים, כדי אם יסוד הבקשה, צרפתית הספרות אחר גם. בדף רב־לשוני לויקיפדים בהתייחסות של, אל החול צרפתית ויקימדיה בקר. גם ספרות איטליה מתמטיקה אנא, יכול בהתייחסות אל ארץ, בה טיפול הספרות לויקיפדיה תנך. את שונה נבחרים ואמנות צעד, סדר גם ספרות יוצרים, שתי ב והגולשים וספציפיים. זאת של החלה לערך. זכר את הרוח לערך והוא, מלא לערך כלשהו אם, שתי או שאלות משפטים ארכיאולוגיה. ליום בשפה או דרס"
//           underlinedWord="בר קיימא"
//         />
//         {service.map((service, index) => (
//           <div key={index} className="flex">

//             <div className="flex overflow-hidden">
//               <div className="">{service.title}</div>
//               <div>{service.description}</div>
//               <div>{service.icon}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
