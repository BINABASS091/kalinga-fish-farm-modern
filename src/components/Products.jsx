import { motion as Motion } from 'framer-motion'
import { productImages } from '../data/images'

const products = [
  {
    title: 'Catfish',
    description: 'Protein-rich table-size Catfish grown in controlled pond systems.',
    image: productImages.catfish,
  },
  {
    title: 'Tilapia',
    description: 'Fast-growing Tilapia raised with balanced feed and clean water practices.',
    image: productImages.tilapia,
  },
  {
    title: 'Fish Fingerlings',
    description: 'Healthy fingerlings for farmers seeking reliable stocking performance.',
    image: productImages.fingerlings,
  },
]

function Products() {
  return (
    <section id="products" className="section-shell">
      <div className="section-wrap">
        <div className="mb-12 max-w-2xl">
          <p className="section-kicker">Products</p>
          <h2 className="section-title">What we offer</h2>
          <p className="section-copy">Healthy fish stock and premium table-size supply for homes and businesses.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <Motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl shadow-slate-900/25"
            >
              {/* Background image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-900/25 to-transparent" />
              {/* Hover color tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-[--primary]/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              {/* Top badge */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  Available Now
                </span>
              </div>
              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[--accent] px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-black/30 transition hover:translate-y-[-2px] hover:bg-amber-400"
                >
                  Request availability
                </a>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
