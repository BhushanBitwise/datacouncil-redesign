
import ScrollReveal from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    quote:
      "Excellent training in AI & Data Science. The projects were very practical and focused on Machine Learning & Analytics.",
    name: "Ajit Shelke",
    program: "AI & Data Science",
  },
  {
    quote:
      "This is a very nice place to learn full stack. The training is interesting and practical.",
    name: "Yakub Sayyad",
    program: "Full Stack",
  },
  {
    quote:
      "The best full stack class in Pune. The main focus is on practical learning.",
    name: "Jairam Deo",
    program: "Full Stack",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="dark-section section-space">
      <div className="container-main">
        <ScrollReveal>
          <p className="eyebrow">Student experiences</p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.07em] sm:text-6xl">
            Real learning.
            <br />
            Real perspectives.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.09}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.035] p-6 sm:p-8">
                <span
                  aria-hidden="true"
                  className="text-5xl leading-none text-[#c9ff3b]"
                >
                  “
                </span>

                <blockquote className="mt-5 flex-1 text-base leading-7 text-white/80">
                  {item.quote}
                </blockquote>

                <figcaption className="mt-8 border-t border-white/15 pt-5">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-xs text-white/50">{item.program}</p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-white/40">
          Feedback is adapted from publicly published Data Council testimonials.
          Confirm exact wording and attribution before launch.
        </p>
      </div>
    </section>
  );
}
