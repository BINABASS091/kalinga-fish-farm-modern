import { motion as Motion } from 'framer-motion'
import { brandName, brandLogo, contactInfo } from '../data/contact'

const bubbles = [
  { size: 6, left: '12%', delay: 0, duration: 4.5 },
  { size: 4, left: '28%', delay: 0.8, duration: 5.2 },
  { size: 8, left: '45%', delay: 1.5, duration: 3.9 },
  { size: 5, left: '62%', delay: 0.3, duration: 4.8 },
  { size: 7, left: '75%', delay: 1.1, duration: 5.5 },
  { size: 4, left: '88%', delay: 0.6, duration: 4.1 },
  { size: 6, left: '5%', delay: 2.0, duration: 5.0 },
  { size: 5, left: '95%', delay: 1.7, duration: 4.3 },
]

function WelcomeScreen() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Deep aquatic background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,#0d4f3c_0%,transparent_50%),radial-gradient(ellipse_at_80%_80%,#083344_0%,transparent_50%),linear-gradient(160deg,#020d08_0%,#041f18_40%,#061a2f_100%)]" />

      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Large ambient glow orbs */}
      <Motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[-12%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#0b6e4f] blur-[100px]"
      />
      <Motion.div
        animate={{ scale: [1, 1.14, 1], opacity: [0.14, 0.22, 0.14] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[-12%] right-[-10%] h-[480px] w-[480px] rounded-full bg-[#2c7da0] blur-[110px]"
      />
      <Motion.div
        animate={{ scale: [1, 1.22, 1], opacity: [0.10, 0.18, 0.10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute left-[40%] top-[60%] h-[280px] w-[280px] rounded-full bg-[#f4a261] blur-[90px]"
      />

      {/* Rising bubbles */}
      {bubbles.map((b, i) => (
        <Motion.div
          key={i}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ y: '-10vh', opacity: [0, 0.55, 0.55, 0] }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute rounded-full border border-white/20 bg-white/10"
          style={{ width: b.size, height: b.size, left: b.left }}
        />
      ))}

      {/* Horizontal shimmer line */}
      <div className="absolute inset-x-0 top-[42%] h-px bg-gradient-to-r from-transparent via-[#0b6e4f]/40 to-transparent" />

      {/* Main content */}
      <Motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center px-5 py-14 text-center"
      >
        {/* Logo ring */}
        <div className="relative mb-8">
          {/* Rotating gradient ring */}
          <Motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, #0b6e4f, #2c7da0, #f4a261, #0b6e4f)',
              padding: 3,
              borderRadius: '50%',
            }}
          />
          <div className="relative rounded-full bg-[#041f18] p-1.5">
            <Motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              src={brandLogo}
              alt={brandName}
              className="h-28 w-28 rounded-full object-cover sm:h-36 sm:w-36"
              loading="eager"
            />
          </div>
          {/* Pulse ring */}
          <Motion.div
            animate={{ scale: [1, 1.45], opacity: [0.4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full border-2 border-[#0b6e4f]"
          />
        </div>

        {/* Kicker */}
        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0b6e4f]/50 bg-[#0b6e4f]/20 px-5 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Welcome to
        </Motion.p>

        {/* Brand name with gradient text */}
        <Motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="max-w-xl font-display text-3xl font-bold leading-tight sm:text-5xl"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #6ee7b7 45%, #7dd3fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {brandName}
        </Motion.h1>

        {/* Tagline */}
        <Motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.58, duration: 0.6 }}
          className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base"
        >
          Premium Catfish & Tilapia from sustainable ponds in Iringa, Tanzania — fresh supply, fingerlings & farmer training.
        </Motion.p>

        {/* Feature chips */}
        <Motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {['🐟 Catfish & Tilapia', '🌿 Eco-Farming', '🚚 Fresh Delivery', '📚 Training'].map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            >
              {label}
            </span>
          ))}
        </Motion.div>

        {/* Loading bar */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mt-12 w-full max-w-xs"
        >
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <Motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 1, duration: 1.6, ease: 'easeInOut' }}
              className="h-full rounded-full bg-gradient-to-r from-[#0b6e4f] via-[#2c7da0] to-[#f4a261]"
            />
          </div>
          <p className="mt-4 text-xs text-slate-500">
            Loading… call us at{' '}
            <a href={contactInfo.phoneHref} className="text-emerald-400 hover:text-emerald-300">
              {contactInfo.phoneDisplay}
            </a>
          </p>
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default WelcomeScreen

