
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";

// import Navbar from "@/components/layout/Navbar";
// import Hero from "@/components/home/Hero";
// import Marquee from "@/components/home/Marquee";
// import CoursesSection from "@/components/home/CoursesSection";
// import ScrollReveal from "@/components/ui/ScrollReveal";
// import PlacementSection from "@/components/home/PlacementSection";
// import TestimonialsSection from "@/components/home/TestimonialsSection";
// import EnquirySection from "@/components/home/EnquirySection";

// const stats = [
//   { value: "25k", label: "Students" },
//   { value: "20+", label: "Courses" },
//   { value: "15+", label: "Instructors" },
//   { value: "20+", label: "Languages" },
// ];

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <Hero />

//         <Marquee />

//         {/* Overview statistics */}
//         <section
//           aria-label="Data Council overview"
//           className="border-b border-black/10 bg-[#f4f0e8] py-12 sm:py-16"
//         >
//           <div className="container-main grid grid-cols-2 gap-y-8 sm:grid-cols-4">
//             {stats.map((stat, index) => (
//               <ScrollReveal key={stat.label} delay={index * 0.06}>
//                 <div className="border-l border-black/15 pl-5 sm:pl-7">
//                   <p className="text-4xl font-semibold tracking-[-0.075em] sm:text-5xl">
//                     {stat.value}
//                   </p>
//                   <p className="mt-2 text-xs text-black/55 sm:text-sm">
//                     {stat.label}
//                   </p>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>

//           <p className="container-main mt-8 text-xs text-black/45">
//             Published figures should be verified before the final production
//             launch.
//           </p>
//         </section>

//         {/* Courses */}
//         <CoursesSection />

//         {/* About Data Council */}
//         <section className="section-space">
//           <div className="container-main">
//             <ScrollReveal>
//               <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
//                 <div>
//                   <p className="eyebrow">The Data Council approach</p>

//                   <h2 className="display-heading mt-7 max-w-3xl !text-5xl sm:!text-7xl">
//                     Learn beyond
//                     <br />
//                     the classroom.
//                   </h2>
//                 </div>

//                 <div>
//                   <p className="max-w-xl text-base leading-8 text-black/60">
//                     Explore technology training, practical learning and career
//                     development opportunities offered by Data Council.
//                   </p>

//                   <Link href="/about" className="lime-button mt-7">
//                     Discover Data Council
//                     <ArrowUpRight size={17} />
//                   </Link>
//                 </div>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>

//         {/* Placement highlights */}
//         <PlacementSection />

//         {/* Student testimonials */}
//         <TestimonialsSection />

//         {/* Enquiry form */}
//         <EnquirySection />

//         {/* Final call to action */}
//         <section className="dark-section py-20 sm:py-28">
//           <div className="container-main">
//             <ScrollReveal>
//               <div className="rounded-3xl border border-white/15 bg-white/[0.035] p-7 sm:p-12 lg:p-16">
//                 <p className="eyebrow">Your next step</p>

//                 <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
//                   Ready to explore
//                   <br />
//                   your learning path?
//                 </h2>

//                 <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
//                   Contact Data Council to discuss available training programs
//                   and placement assistance.
//                 </p>

//                 <Link href="/contact" className="lime-button mt-8">
//                   Enquire now
//                   <ArrowUpRight size={17} />
//                 </Link>
//               </div>
//             </ScrollReveal>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-black/10 bg-[#f4f0e8] py-8">
//         <div className="container-main flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <Link href="/" className="text-sm font-bold tracking-tight">
//             DATA COUNCIL
//           </Link>

//           <nav
//             aria-label="Footer navigation"
//             className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-black/55"
//           >
//             <Link href="/about" className="hover:text-black">
//               About
//             </Link>
//             <Link href="/placements" className="hover:text-black">
//               Placements
//             </Link>
//             <Link href="/contact" className="hover:text-black">
//               Contact
//             </Link>
//           </nav>

//           <p className="text-xs text-black/45">
//             Training &amp; Placement
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// }




import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import CoursesSection from "@/components/home/CoursesSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import PlacementSection from "@/components/home/PlacementSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import EnquirySection from "@/components/home/EnquirySection";

const stats = [
  { value: "25k", label: "Students" },
  { value: "20+", label: "Courses" },
  { value: "15+", label: "Instructors" },
  { value: "20+", label: "Languages" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Marquee />

        {/* Overview statistics */}
        <section
          aria-label="Data Council overview"
          className="border-b border-black/10 bg-[#f4f0e8] py-12 sm:py-16"
        >
          <div className="container-main grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.06}>
                <div className="border-l border-black/15 pl-5 sm:pl-7">
                  <p className="text-4xl font-semibold tracking-[-0.075em] sm:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-black/55 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <p className="container-main mt-8 text-xs text-black/45">
            Published figures should be verified before the final production
            launch.
          </p>
        </section>

        {/* Courses */}
        <CoursesSection />

        {/* About Data Council */}
        <section className="section-space overflow-hidden">
          <div className="container-main">
            <ScrollReveal>
              <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className="flex flex-col items-start">
                  <p className="eyebrow">The Data Council approach</p>

                  <h2 className="display-heading mt-7 max-w-3xl !text-5xl sm:!text-7xl">
                    Learn beyond
                    <br />
                    the classroom.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                    Explore technology training, practical learning and
                    career development opportunities offered by Data Council.
                  </p>

                  <Link href="/about" className="lime-button mt-7">
                    Discover Data Council
                    <ArrowUpRight size={17} />
                  </Link>

                  <div className="mt-10 grid w-full grid-cols-2 gap-4 border-t border-black/10 pt-6">
                    <div>
                      <p className="text-sm font-semibold">Practical learning</p>
                      <p className="mt-1 text-xs leading-5 text-black/50">
                        Explore concepts through hands-on practice.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Career development</p>
                      <p className="mt-1 text-xs leading-5 text-black/50">
                        Learn about training and placement support.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#e6e0d5] sm:aspect-[5/4]">
                    <Image
                      src="/images/classroom-training.webp"
                      alt="Students learning and developing technology skills at Data Council"
                      fill
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.035]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                        Learn · Practice · Grow
                      </p>
                      <p className="mt-2 max-w-sm text-2xl font-semibold tracking-tight sm:text-3xl">
                        Build skills for your next chapter.
                      </p>
                    </div>
                  </div>

                  <div className="absolute -right-2 -top-4 flex size-14 items-center justify-center rounded-full bg-[#c9ff3b] text-[#101010] shadow-lg sm:-right-4 sm:-top-5 sm:size-16">
                    <MoveUpRight size={24} strokeWidth={1.8} />
                  </div>

                  <p className="mt-3 text-right text-[11px] text-black/45">
                    Training imagery · Data Council
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Placement highlights */}
        <PlacementSection />

        {/* Student testimonials */}
        <TestimonialsSection />

        {/* Enquiry form */}
        <EnquirySection />

        {/* Final call to action */}
        <section className="dark-section py-20 sm:py-28">
          <div className="container-main">
            <ScrollReveal>
              <div className="rounded-3xl border border-white/15 bg-white/[0.035] p-7 sm:p-12 lg:p-16">
                <p className="eyebrow">Your next step</p>

                <h2 className="mt-7 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                  Ready to explore
                  <br />
                  your learning path?
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                  Contact Data Council to discuss available training programs
                  and placement assistance.
                </p>

                <Link href="/contact" className="lime-button mt-8">
                  Enquire now
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-[#f4f0e8] py-8">
        <div className="container-main flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-sm font-bold tracking-tight">
            DATA COUNCIL
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-black/55"
          >
            <Link href="/about" className="hover:text-black">
              About
            </Link>
            <Link href="/courses" className="hover:text-black">
              Courses
            </Link>
            <Link href="/placements" className="hover:text-black">
              Placements
            </Link>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
          </nav>

          <p className="text-xs text-black/45">Training &amp; Placement</p>
        </div>
      </footer>
    </>
  );
}
