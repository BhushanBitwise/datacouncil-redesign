
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Data Council",
    short_name: "Data Council",
    description:
      "Explore technology courses, practical training and career development at Data Council.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e8",
    theme_color: "#c9ff3b",
    categories: ["education", "productivity"],
  };
}
