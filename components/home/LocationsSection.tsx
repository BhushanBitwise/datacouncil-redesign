
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { locations } from "@/data/locations";

export default function LocationsSection() {
  return (
    <section className="section-space overflow-hidden">
      <div className="container-main">
        <ScrollReveal>
          <p className="eyebrow">FIND YOUR LOCATION</p>
          <div className="mt-5 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="display-heading max-w-3xl !text-4xl sm:!text-6xl">
              Explore our locations.
            </h2>
            <p className="max-w-sm text-sm leading-7 text-black/55">
              Explore Full Stack Development learning information and
              contact Data Council to confirm the options available to you.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {locations.map((location, index) => (
            <ScrollReveal key={location.slug} delay={index * 0.08}>
              <Link
                href={`/locations/${location.slug}`}
                className="group flex h-full min-h-64 flex-col justify-between rounded-3xl border border-black/10 bg-white/20 p-6 transition-colors duration-300 hover:bg-white/60 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-[#c9ff3b]">
                    <MapPin size={19} aria-hidden="true" />
                  </span>
                  <span className="text-xs text-black/40">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-10">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-black/45">
                    Data Council
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {location.city}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/55">
                    {location.title}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-sm font-medium">
                  Explore location
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
