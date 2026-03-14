import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { cloudinaryGallery } from '../data/images'

function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="section-shell bg-[--bg-soft]">
      <div className="section-wrap">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Gallery</p>
          <h2 className="section-title">Farm moments and facilities</h2>
          <p className="section-copy">A visual look at daily operations, fish stock quality, and farm growth.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cloudinaryGallery.map((image, index) => (
            <Motion.button
              type="button"
              key={image}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              onClick={() => setActive(image)}
              className="glass-card group overflow-hidden"
            >
              <img
                src={image}
                alt="Kalinga AquaFarm gallery"
                loading="lazy"
                className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </Motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 rounded-full bg-white p-3 text-slate-900 shadow-lg"
            >
              <FaTimes />
            </button>
            <Motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={active}
              alt="Preview"
              className="max-h-[85vh] w-full max-w-4xl rounded-2xl object-contain"
            />
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
