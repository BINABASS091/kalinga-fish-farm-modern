import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import FarmingProcess from '../components/FarmingProcess'
import Gallery from '../components/Gallery'
import VideoSection from '../components/VideoSection'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-32 -z-10 mx-auto h-72 w-[86%] rounded-full bg-[--secondary]/10 blur-3xl" />
        <Hero />
        <About />
        <Products />
        <FarmingProcess />
        <Gallery />
        <VideoSection />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
