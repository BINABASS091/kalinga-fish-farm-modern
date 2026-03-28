import { useEffect, useRef, useState } from 'react'
import { motion as Motion, useInView } from 'framer-motion'
import { FaWater, FaFish, FaStar, FaHandshake } from 'react-icons/fa'

const statsData = [
  { label: 'Fish Ponds', value: 5, suffix: '', icon: FaWater },
  { label: 'Fish Produced', value: 10000, suffix: '+', icon: FaFish },
  { label: 'Years Experience', value: 5, suffix: '+', icon: FaStar },
  { label: 'Happy Customers', value: 100, suffix: '+', icon: FaHandshake },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 1200
    const start = performance.now()

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setDisplay(Math.floor(progress * value))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl">
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

function Stats() {
  return (
    <section className="section-shell bg-[--bg-soft]">
      <div className="section-wrap mb-10 max-w-2xl">
        <p className="section-kicker">Farm stats</p>
        <h2 className="section-title">Measured growth you can trust</h2>
      </div>

      <div className="section-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statsData.map((item, index) => {
          const Icon = item.icon
          return (
            <Motion.article
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-card relative overflow-hidden p-6 transition hover:translate-y-[-3px] hover:shadow-xl"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[--primary] via-[--secondary] to-[--accent]" />
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-[--secondary]/15 to-[--primary]/10 p-3 text-xl text-[--secondary]">
                <Icon />
              </div>
              <Counter value={item.value} suffix={item.suffix} />
              <p className="mt-3 text-slate-600">{item.label}</p>
            </Motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default Stats
