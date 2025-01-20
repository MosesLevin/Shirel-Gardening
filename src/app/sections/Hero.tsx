import HeroImage from '@/assets/plant-roots.jpg'

export default function Hero() {
  return (
    <section className="z-0">
      <div className="container">
        <div
          className="absolute inset-0 -z-50  bg-center bg-cover bg-no-repeat -bottom-36 md:-bottom-4"
          style={{ backgroundImage: `url(${HeroImage.src})` }}
        ></div>
        <div className="absolute inset-0 -z-40 bg-black bg-opacity-70"></div>
      </div>
      <div className="mx-auto min-h-screen max-w-7xl h-full bg-blue-400/50  ">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <p className="text-red-500">Hero Content</p>
        </div>
      </div>
    </section>
  )
}
