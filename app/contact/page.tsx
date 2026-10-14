




import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

// import Navbar from "@/components/layout/Navbar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactEnquiryForm from "@/components/home/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Contact Data Council",
  description:
    "Contact Data Council in Karvenagar, Pune, for course enquiries and training information.",
};

const address =
  "3rd Floor, Above Jijamata Mahila Sahakari Bank, Karvenagar, Pune, Maharashtra 411052";

const mapUrl =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const mapEmbedUrl =
  `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

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

export default function ContactPage() {
  return (
    <>
      {/* <Navbar /> */}

      <main className="min-h-screen overflow-hidden bg-[#f4f0e8] text-[#101010]">
        <section className="container-main pb-10 pt-12 sm:pb-14 sm:pt-20">
          <ScrollReveal>
            <p className="eyebrow">CONTACT DATA COUNCIL</p>

            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-7xl lg:text-8xl">
              Let&apos;s talk about
              <br />
              <span className="text-black/40">your next step.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
              Questions about courses, training schedules or placement
              support? Tell us what you want to learn. Our team can help.
            </p>
          </ScrollReveal>
        </section>

        <section className="container-main pb-14 sm:pb-20">
          <div className="grid items-stretch gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
            <ScrollReveal direction="left">
              <div className="flex h-full flex-col rounded-[28px] bg-[#101010] p-6 text-[#f4f0e8] sm:rounded-[32px] sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9ff3b]">
                  Get in touch
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                  We&apos;re here to help.
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Speak with our team about courses, admissions and learning
                  paths.
                </p>

                <div className="mt-8 space-y-6">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;

                    return (
                      <a
                        key={detail.value}
                        href={detail.href}
                        className="group flex min-w-0 items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b]"
                      >
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-[#c9ff3b] group-hover:text-[#c9ff3b]">
                          <Icon size={19} aria-hidden="true" />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-xs text-white/45">
                            {detail.label}
                          </span>
                          <span className="mt-1 block break-words text-sm font-medium sm:text-base">
                            {detail.value}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="shrink-0 text-white/35 transition-colors group-hover:text-[#c9ff3b]"
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </div>

                <div className="my-8 border-t border-white/15" />

                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15">
                    <MapPin size={20} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <p className="text-xs text-white/45">Visit our office</p>
                    <p className="mt-2 text-sm leading-7 text-white/90">
                      {address}
                    </p>
                  </div>
                </div>

                <Link
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-semibold !text-white transition-colors hover:border-[#c9ff3b] hover:bg-white/10 hover:!text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3b]"
                >
                  Get directions
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-full min-w-0 rounded-[28px] border border-black/10 bg-white/65 p-5 shadow-[0_20px_70px_rgba(16,16,16,0.04)] sm:rounded-[32px] sm:p-8 lg:p-10">
                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                    YOUR ENQUIRY
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                    How can we help?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-black/55">
                    Share your details and select a course. Fields marked *
                    are required.
                  </p>
                </div>

                <ContactEnquiryForm />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Compact Google Maps section */}
        <section className="container-main pb-16 sm:pb-24">
          <ScrollReveal>
            <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                  FIND US
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] sm:text-4xl">
                  Visit Data Council.
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-black/60">
                  {address}
                </p>
              </div>

              <Link
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-[#101010] px-5 text-sm font-semibold !text-white transition-colors hover:bg-[#c9ff3b] hover:!text-[#101010] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101010]"
              >
                Open Google Maps
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-black/10 bg-white p-2 sm:rounded-[28px]">
              <iframe
                title="Data Council office location in Karvenagar, Pune"
                src={mapEmbedUrl}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[240px] w-full rounded-[18px] border-0 sm:h-[280px]"
              />
            </div>
          </ScrollReveal>
        </section>
      </main>
    </>
  );
}
