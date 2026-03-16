import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa6'
import { brandLogo, brandName, contactInfo } from '../data/contact'

function Footer() {
  return (
    <footer className="relative bg-slate-950 px-5 py-14 text-slate-300 sm:px-8 lg:px-12">
      {/* Subtle gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[--secondary]/70 to-transparent" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-20 items-center justify-center">
              <img
                src={brandLogo}
                alt={brandName}
                className="h-full w-full object-contain object-center"
              />
            </span>
            <h3 className="font-display text-2xl text-white">{brandName}</h3>
          </div>
          <p className="mt-3 max-w-sm text-sm text-slate-400">
            Professional fish farming, practical training, and reliable fresh
            fish delivery — straight from our ponds in Iringa, Tanzania.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-100">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-100">Follow us</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebookF className="text-white" />
              <a
                href={contactInfo.facebookHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {contactInfo.facebookName}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-white" />
              <a
                href={contactInfo.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {contactInfo.instagramName}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-white" />
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {contactInfo.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a href={contactInfo.emailHref} className="hover:text-white">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 w-full max-w-7xl border-t border-white/10 pt-6 text-xs tracking-wide text-slate-500">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
