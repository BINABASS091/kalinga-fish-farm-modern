import { motion as Motion } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import { farmVideos } from '../data/videos'

function VideoSection() {
  return (
    <section className="section-shell">
      <div className="section-wrap">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Videos</p>
          <h2 className="section-title">Inside our daily operations</h2>
          <p className="section-copy">Short clips from feeding schedules, pond checks, and harvest activities.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {farmVideos.map((video, index) => (
            <Motion.article
              key={video.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="glass-card rounded-3xl border-2 border-slate-200/80 p-2 shadow-[0_15px_35px_-20px_rgba(15,23,42,0.5)] sm:p-3"
            >
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
                <video
                  src={video.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-video w-full object-contain"
                />
                {/* Play badge */}
                <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <FaPlay className="text-[9px]" />
                  Live Farm
                </div>
              </div>
              <div className="p-5 pt-4">
                <h3 className="font-display text-xl text-slate-900">{video.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{video.description}</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoSection
