import { cloudinaryVideos } from './images'

const extraVideos = [
  'https://res.cloudinary.com/diyy8h0d9/video/upload/v1771848174/fish48_qj7tqm.mp4',
  'https://res.cloudinary.com/diyy8h0d9/video/upload/v1771856392/fish43_wvngur.mp4',
]

const fallbackVideos = [
  'https://res.cloudinary.com/diyy8h0d9/video/upload/v1772540688/WhatsApp_Video_2026-03-03_at_15.18.58_wzqqpy.mp4',
  'https://res.cloudinary.com/diyy8h0d9/video/upload/v1772540682/WhatsApp_Video_2026-03-03_at_15.18.51_g3ifgz.mp4',
  'https://res.cloudinary.com/diyy8h0d9/video/upload/v1772540681/WhatsApp_Video_2026-03-03_at_15.18.51_1_dd8dba.mp4',
]

const videoMeta = [
  {
    title: 'REAL FISH SHOWCASE',
    description:
      'Real fish showcase from our ponds, highlighting healthy movement, water quality condition, natural behavior, and strong growth in our farm environment.',
  },
  {
    title: 'POND ACTIVITY MONITORING',
    description: 'Routine checks to maintain healthy pond conditions.',
  },
  {
    title: 'HARVEST AND SORTING DAY',
    description: 'Careful handling and sorting before distribution.',
  },
  {
    title: 'FRESH STOCK POND VIEW',
    description: 'A quick look at healthy fish movement in stocked ponds.',
  },
  {
    title: 'FARM ACTIVITY HIGHLIGHTS',
    description: 'Operations snapshot from feeding, checks, and handling.',
  },
  {
    title: 'INNOVATION PROGRAM SHOWCASE',
    description: 'Showcase from our Innovation Program and modern aquaculture practices.',
  },
]

const mergedVideos = [...new Set([...extraVideos, ...cloudinaryVideos])]

const selectedVideos = mergedVideos.length > 0 ? mergedVideos : fallbackVideos

const farmHighlightsVideo =
  'https://res.cloudinary.com/diyy8h0d9/video/upload/v1771856418/fish36_gkjav4.mp4'

const freshStockPondVideo =
  'https://res.cloudinary.com/diyy8h0d9/video/upload/v1771848228/fish24_qfwagk.mp4'

const innovationProgramVideo =
  'https://res.cloudinary.com/diyy8h0d9/video/upload/v1771856323/fish50_nk8dax.mp4'

const fillVideoAt = (index) => selectedVideos[index] ?? fallbackVideos[index] ?? selectedVideos[0] ?? ''

const optimizeCloudinaryVideo = (url) => {
  if (!url || !url.includes('res.cloudinary.com') || url.includes('/upload/f_auto')) {
    return url
  }

  return url.replace('/upload/', '/upload/f_auto,q_auto:eco,vc_auto/')
}

const orderedShowcaseVideos = [
  fillVideoAt(0),
  fillVideoAt(1),
  fillVideoAt(2),
  freshStockPondVideo,
  farmHighlightsVideo,
  innovationProgramVideo,
]

export const farmVideos = orderedShowcaseVideos.map((url, index) => ({
  title: videoMeta[index]?.title ?? `Farm Video ${index + 1}`,
  description:
    videoMeta[index]?.description ?? 'Inside our farm operations and fish growth process.',
  url: url === freshStockPondVideo ? freshStockPondVideo : optimizeCloudinaryVideo(url),
}))
