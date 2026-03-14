import { useState } from 'react'
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'
import { brandLogo, brandName, contactInfo } from '../data/contact'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="group inline-flex items-center gap-3">
          <img
            src={brandLogo}
            alt={brandName}
            className="h-14 w-14 object-contain"
            loading="eager"
          />
          <span className="text-sm font-semibold tracking-tight text-[--primary] transition group-hover:text-[--secondary] sm:text-lg">
            {brandName}
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-slate-700 transition hover:text-[--secondary] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[--secondary] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={contactInfo.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[--primary] to-[--secondary] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[--secondary]/30 transition hover:brightness-110 hover:shadow-[--secondary]/50 md:inline-flex"
        >
          <FaPhoneAlt className="text-[10px]" />
          Call Now
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex rounded-md border border-slate-300 p-2 text-slate-700 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-5 py-3 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-sm font-medium text-slate-700"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
