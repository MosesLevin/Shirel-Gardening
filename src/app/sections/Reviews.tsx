'use client'
import Client1 from '@/assets/1.jpg'
import Icon from '@/assets/SVGs/icons/Facebook.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import SectionHeader from '@/components/SectionHeader'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import Card from '@/components/Card'

interface Review {
  name: string
  text: string
  profileAvatar: StaticImageData
  stars: number
}

export default function Reviews() {
  const reviews: Review[] = [
    {
      name: 'משה',
      text: 'וסטיבולום אט דולור, קראסקראס אגת לקטוס וואל אאוגו...',
      profileAvatar: Client1,
      stars: 5,
    },
    {
      name: 'מ3שה',
      text: 'וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו...',
      profileAvatar: Client1,
      stars: 5,
    },
    {
      name: 'מ2שה',
      text: 'וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו...',
      profileAvatar: Client1,
      stars: 5,
    },
    {
      name: 'מ6שה',
      text: 'וסטיבולום אט דולור,  אט דולור,  קראס אגת לקטוס וואל אאוגו...',
      profileAvatar: Client1,
      stars: 5,
    },
    {
      name: 'מ5שה',
      text: 'וסטיבולום אט דולור,  אט דולור,  אט דולור,  אט דולור,  אט דולור, קראס אגת לקטוס וואל אאוגו...',
      profileAvatar: Client1,
      stars: 5,
    },
    {
      name: 'מ4שה',
      text: 'וסטיבולום אט דולור,  אט דולור,  אט ד דולור,  אט דולור,  אט דולור,  אט דולור,  אט דולור, ,  אט דולור,  אט דולור, ,  אט דולור,  אט דולור,  אט דולור, קראס אגת לקטוס וואל אאוגו...',
      profileAvatar: Client1,
      stars: 5,
    },
    // Add more reviews here
  ]

  return (
    <div className="my-12 mx-6 relative">
      <div className="container">
        <SectionHeader eyeCatch="" title="Reviews" description="" />
        <div className="">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="px-2"
            style={{ minHeight: '200px', maxHeight: '400px' }} // Set a minimum height for the Swiper container
          >
            {reviews.map((review, index) => (
              <SwiperSlide
                key={index}
                className="p-2"
                style={{ overflow: 'visible' }}
              >
                {/* Allow overflow */}
                <Card className="max-w-xs md:max-w-md p-6 md:p-8 mt-10 transform origin-center transition duration-200 bg-white shadow-md h-full font-sans text-end">
                  <div className="flex gap-4 items-center ">
                    <div>
                      <div className="font-semibold text-black">
                        {review.name}
                      </div>
                      <div className="text-sm text-black/60">
                        {'⭐'.repeat(review.stars)}
                      </div>
                    </div>
                    <div className="size-14 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
                      <Image
                        src={review.profileAvatar}
                        alt={review.name}
                        width={56}
                        height={56}
                        className="object-cover"
                        loading="lazy"
                        quality={30}
                      />
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base text-black">
                    {review.text}
                  </p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="swiper-button-prev absolute left-0 top-1/4 -mx-4 lg:mx-2 translate-y-1/4 z-10 cursor-pointer p-3 rounded-full md:hover:bg-gray-100 transition">
            <Icon className="text-gray-700" />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/4 -mx-4 lg:mx-2 translate-y-1/4 z-10 cursor-pointer p-3 rounded-full  md:hover:bg-gray-100 transition">
            <Icon className="text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  )
}
