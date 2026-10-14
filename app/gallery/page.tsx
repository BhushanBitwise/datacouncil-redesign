
import type { Metadata } from "next";
import GalleryPage from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Data Council training sessions, classrooms, student moments and learning milestones.",
};

export default function Page() {
  return <GalleryPage />;
}
