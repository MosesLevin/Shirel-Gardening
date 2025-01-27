import React from 'react'
import Image from 'next/image'
import tree from '../../assets/tree2.jpg'
import SectionHeader from '@/components/SectionHeader'

const services = [
  {
    title: 'שירות 1',
    description: 'אלו פרטי השירות המוצע מס 1.',
    background:
      'https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'שירות 2',
    description: 'אלו פרטי השירות המוצע מס 2.',
    background: '/path/to/bg2.jpg',
  },
  {
    title: 'שירות 3',
    description: 'אלו פרטי השירות המוצע מס 3.',
    background: '/path/to/bg3.jpg',
  },
  {
    title: 'שירות 4',
    description: 'אלו פרטי השירות המוצע מס 4.',
    background: '/path/to/bg4.jpg',
  },
  {
    title: 'שירות 5',
    description: 'אלו פרטי השירות המוצע מס 5.',
    background: '/path/to/bg5.jpg',
  },
  {
    title: 'שירות 6',
    description: 'אלו פרטי השירות המוצע מס 6.',
    background: '/path/to/bg6.jpg',
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
              className="relative overflow-hidden rounded-lg bg-cover bg-center border-2 border-black/50 p-4 group md:hover:scale-105 transition-transform duration-200 text-center"
            >
              {/* Background Image with hover effect */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-0 -z-10 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${service.background})` }}
              ></div>

              {/* Overlay for initial background */}
              <div className="absolute inset-0 bg-gray-200 opacity-30 -z-10 group-hover:opacity-0 transition-opacity duration-300"></div>

              <h3 className="text-xl font-semibold text-black ">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-900 opacity-100 md:opacity-0 md:translate-y-3 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0 my-12">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        {/* Right Section (Image on Desktop, Top on Mobile) */}
        <div className="">
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
