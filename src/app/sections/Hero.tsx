'use client'
import HeroImage from '@/assets/plant-roots.jpg'
import Button from '@/components/Button'
import HighlightedText from '@/components/HighlightedText'

export default function Hero() {
  return (
    <section className="z-0">
      <div className="container">
        <div
          className="absolute inset-0 -z-50  bg-center bg-cover bg-no-repeat -bottom-36 md:-bottom-4"
          style={{ backgroundImage: `url(${HeroImage.src})` }}
        ></div>
        <div className="absolute inset-0 -z-40 bg-black bg-opacity-70 -bottom-36 md:-bottom-4"></div>
      </div>
      <div className=" min-h-screen max-w-7xl h-full">
        <div className="absolute w-9/12 md:w- -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center">
          <div>
            <div className="text-5xl md:text-7xl font-sans font-semibold text-white  mb-40">
              גינון בר קיימא מקצועי
            </div>
            <HighlightedText
              text={'גינון בר-קיימא מקצועי'}
              highlightWord={'בר-קיימא'}
              className="text-5xl md:text-7xl font-sans font-semibold text-white  "
              highlightClassName="bg-p1c1"
            />
          </div>

          <p className="text-white p-1 md:mx-10 lg:mx-28 mt-10 font-sans text-base">
            בהתייחסות של, אל החול צרפתית ויקימדיה בקר. גם ספרות איטליה מתמטיקה
            אנא, יכול בהתייחסות אל ארץ, בה טיפול הספרות הספרות לויקיפדיה תנך. את
            שונה
          </p>
          <div className="flex justify-center mt-10 gap-4">
            <Button
              className=" border-white/30  border-[1px] bg-transparent hover:bg-transparent hover:border-white transition-colors hover:duration-300"
              text="לחץ פה"
            />
            <Button className="button-animation animation " text="לחץ פה" />
          </div>
        </div>
      </div>
    </section>
  )
}
