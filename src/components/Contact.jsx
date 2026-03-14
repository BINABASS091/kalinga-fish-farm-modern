import { motion as Motion } from 'framer-motion'
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import { brandName, contactInfo } from '../data/contact'

function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="section-wrap grid gap-8 rounded-3xl bg-slate-900 p-7 text-white shadow-2xl shadow-slate-900/20 sm:p-10 lg:grid-cols-2">
        <Motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[--accent]">Contact</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Request supply or training</h2>
          <p className="mt-4 text-slate-300">
            Reach out for fresh fish orders, fingerling bookings, and aquaculture training sessions.
          </p>

          {/* Quick-contact CTA row */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-[--accent] px-5 py-2.5 text-sm font-semibold text-slate-900 shadow shadow-black/20 transition hover:translate-y-[-2px] hover:bg-amber-400"
            >
              <FaPhoneAlt className="text-xs" />
              Call Us
            </a>
            <a
              href={contactInfo.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-green-500/50 bg-green-500/15 px-5 py-2.5 text-sm font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
            >
              <FaWhatsapp className="text-base" />
              WhatsApp
            </a>
          </div>

          <ul className="mt-7 space-y-4 text-sm text-slate-200">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[--accent]" />
              <a href={contactInfo.phoneHref} className="transition hover:text-white">
                {contactInfo.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaWhatsapp className="text-[--accent]" />
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                {contactInfo.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[--accent]" />
              <a href={contactInfo.emailHref} className="transition hover:text-white">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[--accent]" />
              Iringa, Tanzania ({brandName})
            </li>
          </ul>
        </Motion.div>

        <Motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
        >
          <label className="block text-sm">
            Name
            <input
              type="text"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none ring-[--accent] transition placeholder:text-slate-400 focus:ring"
              placeholder="Your full name"
            />
          </label>

          <label className="block text-sm">
            Email
            <input
              type="email"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none ring-[--accent] transition placeholder:text-slate-400 focus:ring"
              placeholder="you@example.com"
            />
          </label>

          <label className="block text-sm">
            Message
            <textarea
              rows="5"
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 outline-none ring-[--accent] transition placeholder:text-slate-400 focus:ring"
              placeholder="How can we help you?"
            />
          </label>

          <button
            type="submit"
            className="rounded-full bg-[--accent] px-6 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-2px]"
          >
            Send Message
          </button>
        </Motion.form>
      </div>
    </section>
  )
}

export default Contact
