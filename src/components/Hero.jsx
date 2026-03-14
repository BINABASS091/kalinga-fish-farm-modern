import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { heroSlides } from '../data/images'

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (heroSlides.length <= 1) return

    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden section-shell pb-24 pt-24 sm:pt-28"
    >
      {/* All slides stacked — fade active one in via opacity (pre-loaded, reliable cross-fade) */}
      {heroSlides.map((slide, i) => (
        <Motion.img
          key={slide.url}
          src={slide.url}
          alt="Fish ponds and aquaculture setup"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          style={{ objectPosition: slide.position }}
          loading={i === 0 ? 'eager' : 'lazy'}
          animate={{ opacity: i === activeIndex ? 1 : 0, scale: i === activeIndex ? 1 : 1.04 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b6e4f]/72 via-[#0b4a35]/50 to-[#2c7da0]/64" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_15%,rgba(244,162,97,0.14),transparent_35%)]" />

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="section-wrap text-white"
      >
        <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-1 text-sm font-medium backdrop-blur">
          Sustainable aquaculture for communities and markets
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Sustainable Fish Farming & Fresh Aquaculture Products
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/90 sm:text-lg">
          We cultivate premium Catfish and Tilapia with modern, eco-conscious farming methods,
          hands-on training, and reliable supply for households, restaurants, and retailers.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#about"
            className="rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-[#1f2937] shadow-lg shadow-black/20 transition hover:translate-y-[-2px]"
          >
            Explore Our Farm
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/60 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[--primary]"
          >
            Order Fresh Fish
          </a>
        </div>

        <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.16em] text-white/70">Location</p>
            <p className="mt-2 text-sm font-semibold">Iringa, Tanzania</p>
          </div>
          <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.16em] text-white/70">Specialty</p>
            <p className="mt-2 text-sm font-semibold">Catfish & Tilapia</p>
          </div>
          <div className="rounded-2xl border border-white/25 bg-white/10 px-4 py-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.16em] text-white/70">Support</p>
            <p className="mt-2 text-sm font-semibold">Training & Supply</p>
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="mt-8 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? 'h-2 w-8 bg-white shadow-md'
                  : 'h-2 w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Motion.div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 52" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0,26 C360,78 1080,-26 1440,26 L1440,52 L0,52 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
