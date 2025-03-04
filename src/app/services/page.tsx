'use client'
import React from 'react'
import Services from '../sections/Services'
import image1 from '@/assets/1.jpg'
import image2 from '@/assets/2.jpg'
import image3 from '@/assets/3.jpg'
import image4 from '@/assets/4.jpg'
import image5 from '@/assets/5.jpg'
import image6 from '@/assets/6.jpg'
import NavServices from '@/components/NavServices'

function page() {
  const items = [
    {
      id: '1',
      text: 'הקמת גינות',
      href: '/שירותים/הקמת-גינות',
      imageUrl: image1.src,
    },
    {
      id: '2',
      text: 'אחזקת גינות',
      href: '/שירותים/אחזקת-גינות',
      imageUrl: image2.src,
    },
    {
      id: '3',
      text: 'גיזום עצים',
      href: '/שירותים/גיזום-עצים',
      imageUrl: image3.src,
    },
    {
      id: '4',
      text: "פרמקלצ'ר",
      href: '/שירותים/פרמקלצר',
      imageUrl: image4.src,
    },
    {
      id: '5',
      text: 'מערכות השקיה',
      href: '/שירותים/מערכות-השקיה',
      imageUrl: image5.src,
    },
    {
      id: '6',
      text: 'עבודות עץ',
      href: '/שירותים/עבודות-עץ',
      imageUrl: image6.src,
    },
  ]
  return (
    <div className=" container">
      <div className="">
        <Services sectionHeader image />
        <NavServices items={items} defaultImage={image1} />
      </div>
    </div>
  )
}

export default page
