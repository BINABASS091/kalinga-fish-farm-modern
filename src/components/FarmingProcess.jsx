import { motion as Motion } from 'framer-motion'
import { FaSeedling, FaWater, FaFish, FaChartLine, FaTruck } from 'react-icons/fa'

const steps = [
  {
    title: 'Pond Preparation',
    icon: FaWater,
    desc: 'Cleaning, liming, and conditioning ponds for optimal water quality before stocking begins.',
  },
  {
    title: 'Stocking Fingerlings',
    icon: FaSeedling,
    desc: 'Introducing healthy fingerlings at ideal densities to maximize early survival and growth.',
  },
  {
    title: 'Feeding & Growth',
    icon: FaFish,
    desc: 'Daily nutrition schedules using premium feed formulated for efficient fish weight gain.',
  },
  {
    title: 'Monitoring',
    icon: FaChartLine,
    desc: 'Regular water tests, health checks, and growth tracking to catch issues early.',
  },
  {
    title: 'Harvesting',
    icon: FaTruck,
    desc: 'Careful netting, sorting, and fresh delivery to markets and individual customers.',
  },
]

function FarmingProcess() {
  return (
    <section className="section-shell relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(244,162,97,0.16),transparent_35%)]" />
      <div className="section-wrap relative">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[--accent]">Farming process</p>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">From pond to plate</h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          A disciplined process that protects fish health, quality, and predictable harvest timelines.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <Motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-xl shadow-black/20"
              >
                {/* Large step number watermark */}
                <span className="pointer-events-none absolute right-3 top-3 select-none font-display text-6xl font-bold leading-none text-white/10">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="inline-flex rounded-xl bg-[--secondary]/25 p-3 text-xl text-[--accent]">
                  <Icon />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-[--accent]">Step {index + 1}</p>
                <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </Motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FarmingProcess
