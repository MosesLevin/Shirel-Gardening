import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Timeline from './sections/Timeline'
import Services from './sections/Services'
import About from './sections/About'
import Blog from './sections/Blog'
import Footer from './sections/Footer'
import Reviews from './sections/Reviews'
import Gallery from './sections/Gallery'
import HomeFaq from './sections/HomeFaq'
import Location from './sections/Location'
import CTA from './sections/CTA'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Timeline />
      <Services />
      <Reviews />
      <About />
      <Gallery />
      <Blog />
      <Location />
      <HomeFaq />
      <CTA />
      <Footer />
    </div>
  )
}
