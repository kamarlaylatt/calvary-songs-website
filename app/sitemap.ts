import { MetadataRoute } from 'next'
import { songs } from '@/lib/data/songs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://calvary-songs.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/songs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Song pages
  const songPages = songs.map((song) => ({
    url: `${baseUrl}/songs/${song.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...songPages]
}
