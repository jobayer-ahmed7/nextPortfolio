/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from 'next'
import { connectToDatabase } from '@/lib/db'
import Project from '@/models/Projects'

/**
 * Sitemap generator for Next.js App Router
 * This will generate a sitemap.xml dynamically.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Use environment variable for base URL or fallback to a default
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://jobayerahmed.vercel.app'

  // Static routes for the portfolio
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Dynamic routes (projects)
  try {
    // We can fetch directly from the DB here because this runs on the server
    await connectToDatabase()
    // Only select the fields we need (_id and updatedAt)
    const projects = await Project.find({}, { _id: 1, updatedAt: 1 }).lean()
    
    const dynamicProjectRoutes: MetadataRoute.Sitemap = projects.map((project: any) => ({
      url: `${baseUrl}/projects/${project._id.toString()}`,
      lastModified: project.updatedAt || new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

    return [...staticRoutes, ...dynamicProjectRoutes]
  } catch (error) {
    console.error('Sitemap generation error:', error)
    // If DB fails, at least return the static routes
    return staticRoutes
  }
}
