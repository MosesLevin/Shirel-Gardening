'use client'
import HeroImage from '@/assets/plant-roots.jpg'
import Button from '@/components/Button'

// import TextEffect from '@/components/TextEffect'
// import UnderlinedText from '@/components/UnderlineText'

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
            {/* <h1>
              <TextEffect
                className="text-5xl md:text-7xl font-sans font-semibold text-white"
                text="גינון בר קיימא מקצועי"
                textClassName=""
                highlight
                highlightWord="בר קיימא"
                highlightClassName="bg-p1c1"
                underline
                underlineWord="מקצועי"
                underlineClassName="h-[2px] text-red-500"
              />
            </h1> */}
            <h1 className="text-7xl font-bold">
              <span className="text-white">גינון </span>
              <span className="text-white bg-p1c1 rounded ">בר קיימא</span>
              <span className="text-white underline-with-svg"> מקצועי</span>
            </h1>
          </div>

          {/* <span className="relative text-4xl font-bold">
            <span className="text-gray-900">This is an </span>
            <span className="rounded bg-yellow-300 text-black">
              SEO-friendly
            </span>
            <span className="text-gray-900"> </span>
            <span className="text-gray-900 relative">
              Title
              <span className="absolute left-0 right-0 bottom-[-4px] block h-[2px] text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="400"
                  height="32"
                  viewBox="0 0 300 24"
                  className="w-full h-auto"
                >
                  <path d="M127 2.7c-35.7.9-74.4 4-103.5 8.2C4 13.8 3.2 14 5.4 15.2c1.1.6 4.8.7 9 .4 3.9-.4 18.4-.9 32.1-1.2 13.8-.2 28.2-.7 32-1.2 3.9-.4 14.7-.6 24-.5 57.8.6 68.2.6 79-.2 17.1-1.4 54-.7 83 1.4 6.3.5 11.4.5 12 0 .5-.5 2.7-.9 5-1 5.6 0 12.4-1.5 10.5-2.2-3-1.1-57.2-5.7-79-6.7-23.4-1-69.5-1.7-86-1.3"></path>
                </svg>
              </span>
            </span>
            <span className="text-gray-900"></span>
          </span> */}
          {/* <UnderlinedText
            text="Highlight this special word in the text."
            underlinedWord="special"
            className="text-lg font-medium"
            underlineClassName="h-[2px] text-blue-500"
          /> */}
          <p className="text-white p-1 md:mx-10 lg:mx-28 mt-10 font-sans text-base svgUnderline">
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
