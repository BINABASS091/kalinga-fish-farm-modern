import { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { heroSlides } from '../data/images'

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (heroSlides.length <= 1) return
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden"
    >
      {/* Slide images — all pre-rendered and stacked, cross-fade via opacity */}
      {heroSlides.map((slide, i) => (
        <Motion.img
          key={slide.url}
          src={slide.url}
          alt="Kalinga fish farm aquaculture"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: slide.position, zIndex: 0 }}
          loading={i === 0 ? 'eager' : 'lazy'}
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={{
            opacity: i === activeIndex ? 1 : 0,
            scale: i === activeIndex ? 1 : 1.05,
          }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      ))}

      {/* Gradient overlay — directional dark left, lighter right for image visibility */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background:
            'linear-gradient(105deg, rgba(4,25,18,0.82) 0%, rgba(6,30,28,0.68) 40%, rgba(11,110,79,0.38) 70%, rgba(44,125,160,0.28) 100%)',
        }}
      />
      {/* Bottom dark fade for wave blending */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ zIndex: 2, background: 'linear-gradient(to bottom, transparent, rgba(4,25,18,0.55))' }}
      />
      {/* Radial accent glow top-right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full"
        style={{ zIndex: 2, background: 'radial-gradient(circle, rgba(244,162,97,0.10) 0%, transparent 65%)' }}
      />

      {/* Content */}
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
        style={{ zIndex: 10 }}
      >
        {/* Kicker badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Sustainable aquaculture · Iringa, Tanzania
        </div>

        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.12] text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
          Sustainable Fish Farming &{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #6ee7b7, #7dd3fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Fresh Aquaculture
          </span>{' '}
          Products
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Premium Catfish and Tilapia raised with eco-conscious methods — plus hands-on farmer training and reliable supply for homes, restaurants, and retailers.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#about"
            className="rounded-full bg-[--accent] px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-xl shadow-black/30 transition hover:translate-y-[-2px] hover:bg-amber-400"
          >
            Explore Our Farm
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[--primary]"
          >
            Order Fresh Fish
          </a>
        </div>

        {/* Info chips */}
        <div className="mt-12 flex flex-wrap gap-3">
          {[
            { label: 'Location', value: 'Iringa, Tanzania' },
            { label: 'Specialty', value: 'Catfish & Tilapia' },
            { label: 'Support', value: 'Training & Supply' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 backdrop-blur-sm"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">{item.label}</p>
              <p className="mt-1 text-sm font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Slide dots */}
        <div className="mt-10 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? 'h-2 w-10 bg-white shadow-md'
                  : 'h-2 w-2 bg-white/35 hover:bg-white/65'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 10 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0,30 C480,80 960,-20 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

export default Hero

