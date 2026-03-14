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
    title: 'Feeding Session at Sunrise',
    description: 'Daily nutrition routines that improve healthy fish growth.',
  },
  {
    title: 'Pond Activity Monitoring',
    description: 'Routine checks to maintain healthy pond conditions.',
  },
  {
    title: 'Harvest and Sorting Day',
    description: 'Careful handling and sorting before distribution.',
  },
  {
    title: 'Fresh Stock Pond View',
    description: 'A quick look at healthy fish movement in stocked ponds.',
  },
  {
    title: 'Farm Activity Highlights',
    description: 'Operations snapshot from feeding, checks, and handling.',
  },
]

const mergedVideos = [...new Set([...extraVideos, ...cloudinaryVideos])]

const selectedVideos = mergedVideos.length > 0 ? mergedVideos : fallbackVideos

export const farmVideos = selectedVideos.slice(0, 5).map((url, index) => ({
  title: videoMeta[index]?.title ?? `Farm Video ${index + 1}`,
  description:
    videoMeta[index]?.description ?? 'Inside our farm operations and fish growth process.',
  url,
}))
