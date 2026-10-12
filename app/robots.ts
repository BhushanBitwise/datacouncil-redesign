
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.datacouncil.in/sitemap.xml",
    host: "https://www.datacouncil.in",
  };
}
