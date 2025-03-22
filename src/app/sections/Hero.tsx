'use client'
// import HeroImage from '@/assets/plant-roots.jpg'
import Button from '@/components/Button'
import Image from 'next/image'
import wallpaper from '@/assets/wallpaper1.webp'
// import wallpaper2 from '@/assets/wallpaper2.jpeg'
// import wallpaper3 from '@/assets/wallpaper3.webp'

// import UnderlinedText from '@/components/UnderlineText'

export default function Hero() {
  return (
    <section className="relative z-0 ">
      <div className="container">
        <div className="absolute inset-0 -z-50 overflow-hidden">
          <Image
            src={wallpaper}
            alt="Hero Image"
            fill
            quality={50}
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 -z-40 bg-black bg-opacity-70 "></div>
      </div>
      {/* content */}
      <div className=" min-h-screen max-w-7xl h-full">
        <div className="absolute w-9/12 md:w-2/3 -translate-x-1/2 -translate-y-1/2 top-[57%] md:top-1/2 left-1/2 text-center">
          <div dir="rtl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans text-white z-10">
              <span className="underline-with-svg ">גינון מקצועי</span>
              <span className=""> עיצוב ואחזקת גינות </span>
              <span className="bg-p1c1 rounded ">תרבות גן</span>
            </h1>
          </div>
          <p className="text-white p-1 md:mx-10 lg:mx-28 mt-10 font-sans text-xl hebrew-text">
            תכנון ועיצוב גינות ארץ ישראליות. אחזקת גינות על ידי צוות מקצוענים,
            הקמת גינות בהתאמה אישית. שיטת העבודה שלנו מדגישה את שימור יחסי
            הגומלין בטבע
          </p>
          <div className="flex justify-center mt-10 gap-4">
            <Button
              className=" border-white/30  border-[1px] bg-transparent hover:bg-transparent hover:border-white transition-colors hover:duration-300"
              text="לחץ פה"
            />
            <Button className="button-animation" text="לחץ פה" />
          </div>
        </div>
      </div>
    </section>
  )
}
