import type { Metadata } from "next";
import OJTPage from "@/components/ojt/OJTPage";

export const metadata: Metadata = {
  title: "OJT Training in Pune | Data Council",
  description:
    "Explore Data Council's On-the-Job Training programme, proposed practical workflow, learning tracks, syllabus framework and fee instalments.",
  alternates: {
    canonical: "/ojt",
  },
  openGraph: {
    title: "OJT Training in Pune | Data Council",
    description:
      "Learn about the OJT programme, practical project workflow, learning tracks and instalment plan.",
    url: "/ojt",
    type: "website",
  },
};

export default function Page() {
  return <OJTPage />;
}
