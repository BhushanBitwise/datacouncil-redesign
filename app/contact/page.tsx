
import type { Metadata } from "next";
// import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EnquirySection from "@/components/home/EnquirySection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Data Council in Karvenagar, Pune, for software technology training and course enquiries.",
};

const contactDetails = [
  {
    label: "Email",
    value: "hr@datacouncil.in",
    href: "mailto:hr@datacouncil.in",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 8080152238",
    href: "tel:+918080152238",
    icon: Phone,
  },
  {
    label: "Phone",
    value: "+91 80876 01850",
    href: "tel:+918087601850",
    icon: Phone,
  },
];

const address =
  "3rd Floor, Above Jijamata Mahila Sahakari Bank, Karvenagar, Pune, Maharashtra 411052";

export default function ContactPage() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(address);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#f4f0e8]">
        <section className="container-main pb-14 pt-12 sm:pb-20 sm:pt-20">
          <ScrollReveal>
            <p className="eyebrow">Contact Data Council</p>

            <h1 className="display-heading mt-8 max-w-5xl">
              Let’s talk about
              <br />
              <span className="text-[#77766f]">your next step.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
              Have questions about courses, training schedules or placement
              support? Reach out to the Data Council team.
            </p>
          </ScrollReveal>
        </section>

        <section className="container-main pb-20 sm:pb-28">
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
            <ScrollReveal direction="left">
              <div className="h-full rounded-3xl bg-[#101010] p-7 text-[#f4f0e8] sm:p-9">
                <p className="eyebrow">Get in touch</p>

                <h2 className="mt-6 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                  We’re here to help.
                </h2>

                <div className="mt-9 space-y-6">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <a
                        key={`${detail.label}-${detail.value}`}
                        href={detail.href}
                        className="group flex items-start gap-4"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-[#c9ff3b] group-hover:text-[#c9ff3b]">
                          <Icon size={18} />
                        </span>

                        <span className="min-w-0 pt-1">
                          <span className="block text-xs text-white/45">
                            {detail.label}
                          </span>

                          <span className="mt-1 block break-words text-sm font-medium">
                            {detail.value}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="ml-auto mt-2 shrink-0 text-white/35 transition-colors group-hover:text-[#c9ff3b]"
                        />
                      </a>
                    );
                  })}
                </div>

                <div className="mt-9 border-t border-white/15 pt-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15">
                      <MapPin size={18} />
                    </span>

                    <div>
                      <p className="text-xs text-white/45">Visit us</p>
                      <p className="mt-2 text-sm leading-7">{address}</p>
                    </div>
                  </div>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline-button mt-6 border-white/20 text-white hover:border-[#c9ff3b] hover:bg-white/10"
                  >
                    Open in Google Maps
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-3xl border border-black/10 bg-white/40 p-3 sm:p-6 lg:p-8">
                <EnquirySection />
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
