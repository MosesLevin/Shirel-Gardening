import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Timeline from './sections/Timeline'
import Services from './sections/Services'
import About from './sections/About'
// import Portfolio from './sections/Portfolio'
// import Blog from './sections/Blog'
// import Faq from './sections/Faq'
import Footer from './sections/Footer'
import Reviews from './sections/Reviews'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Timeline />
      <Services />
      <About />
      <Reviews />
      {/* <Portfolio />
      <Blog />
      <Faq /> */}
      <Footer />
    </div>
  )
}
