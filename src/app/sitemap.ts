import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bdsn.directory";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/directory`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${siteUrl}/directory/georgia`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/directory/georgia/atlanta`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const categoryRoutes = categories.map((category) => ({
    url: `${siteUrl}/directory/${category.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...coreRoutes, ...categoryRoutes];
}
