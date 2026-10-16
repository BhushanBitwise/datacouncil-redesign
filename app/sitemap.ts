
import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { locations } from "@/data/locations";

const SITE_URL = "https://www.datacouncil.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/courses`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/placements`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/gallery`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/ojt`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = locations.map(
    (location) => ({
      url: `${SITE_URL}/locations/${location.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${SITE_URL}/courses/${course.slug}-in-pune`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...locationRoutes, ...courseRoutes];
}
