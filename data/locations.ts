
export type LocationInfo = {
  slug: string;
  city: string;
  title: string;
  description: string;
  intro: string;
};

const sharedIntro =
  "Data Council provides Full Stack Development training covering web technologies, programming concepts and practical application development. Contact the team to confirm the current curriculum, schedule and availability.";

export const locations: LocationInfo[] = [
  {
    slug: "pune-karvenagar",
    city: "Pune Karvenagar",
    title: "Full Stack Course in Pune Karvenagar",
    description:
      "Explore Full Stack Development training in Pune Karvenagar at Data Council. Contact the team for current course details and availability.",
    intro: sharedIntro,
  },
  {
    slug: "nagpur",
    city: "Nagpur",
    title: "Full Stack Course in Nagpur",
    description:
      "Explore Full Stack Development training options for Nagpur learners at Data Council. Contact the team for current course details and availability.",
    intro: sharedIntro,
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    title: "Full Stack Course in Mumbai",
    description:
      "Explore Full Stack Development training options for Mumbai learners at Data Council. Contact the team for current course details and availability.",
    intro: sharedIntro,
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug);
}
