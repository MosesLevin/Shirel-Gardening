import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
// import Timeline from './sections/Timeline'
import Services from './sections/Services'
import About from './sections/About'
// import Portfolio from './sections/Portfolio'
// import Blog from './sections/Blog'
// import Faq from './sections/Faq'
import Footer from './sections/Footer'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Timeline /> */}
      <About />
      <Services />
      {/* <Portfolio />
      <Blog />
      <Faq /> */}
      <Footer />
    </div>
  )
}
