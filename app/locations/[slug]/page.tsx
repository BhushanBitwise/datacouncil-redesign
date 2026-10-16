
import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import LocationsPage from "@/components/locations/LocationsPage";
import { getLocationBySlug, locations } from "@/data/locations";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Data Council",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = `/locations/${location.slug}`;

  return {
    title: `${location.title} | Data Council`,
    description: location.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${location.title} | Data Council`,
      description: location.description,
      url: canonical,
      siteName: "Data Council",
      type: "website",
    },
  };
}

async function LocationContent({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return <LocationsPage location={location} />;
}

export default function LocationRoute({ params }: Props) {
  return (
    <Suspense
      fallback={
        <main className="container-main flex min-h-[60vh] items-center">
          <p className="text-sm text-black/55" role="status">
            Loading location...
          </p>
        </main>
      }
    >
      <LocationContent params={params} />
    </Suspense>
  );
}
