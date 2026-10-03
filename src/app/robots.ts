import { MetadataRoute } from 'next'

/**
 * robots.txt generator for Next.js App Router
 * Ensures Search Engines index correctly.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jobayerahmed.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Disallow crawlers from accessing your API routes
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
