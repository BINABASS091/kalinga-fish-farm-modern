import { motion as Motion } from 'framer-motion'
import { aboutImage } from '../data/images'
import { brandName } from '../data/contact'

function About() {
  return (
    <section id="about" className="section-shell bg-[--bg-soft]">
      <div className="section-wrap grid gap-14 lg:grid-cols-2 lg:items-center">
        <Motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={aboutImage}
            alt="Aquaculture pond management"
            loading="lazy"
            className="h-80 w-full rounded-3xl object-cover shadow-2xl shadow-[--secondary]/20 sm:h-[440px]"
          />
          {/* Floating achievement panel */}
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/90 px-5 py-4 shadow-2xl shadow-slate-900/20 backdrop-blur-xl">
            <div className="grid grid-cols-3 divide-x divide-slate-200 text-center">
              <div className="px-2">
                <p className="font-display text-2xl font-bold text-[--primary]">20+</p>
                <p className="mt-0.5 text-xs text-slate-500">Active Ponds</p>
              </div>
              <div className="px-2">
                <p className="font-display text-2xl font-bold text-[--primary]">5+</p>
                <p className="mt-0.5 text-xs text-slate-500">Years Active</p>
              </div>
              <div className="px-2">
                <p className="font-display text-2xl font-bold text-[--primary]">100+</p>
                <p className="mt-0.5 text-xs text-slate-500">Customers</p>
              </div>
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-kicker">About our farm</p>
          <h2 className="section-title">
            Smart fish farming powered by sustainability
          </h2>
          <p className="section-copy">
            {brandName} combines practical field experience with modern aquaculture systems
            to raise healthy Catfish and Tilapia at scale. We focus on water quality, responsible
            feeding, and efficient pond management to ensure consistent harvests.
          </p>
          <p className="mt-4 text-slate-600">
            Beyond production, we train aspiring fish farmers and support local food supply chains
            with fresh, high-quality fish that meets market demand year-round.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[--primary] shadow-sm">
              Biosecure pond practices
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[--primary] shadow-sm">
              Reliable fresh harvest schedule
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[--primary] shadow-sm">
              Practical farmer mentorship
            </span>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}

export default About
