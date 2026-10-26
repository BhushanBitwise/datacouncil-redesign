
export default function Marquee2() {
  const items = [
    "AGENTIC AI + GENERATIVE AI",
    "DATA SCIENCE + MACHINE LEARNING",
    "REAL-WORLD PROJECT-BASED LEARNING",
    "BUILD. DEPLOY. SHOWCASE.",
    "INDUSTRY-ALIGNED CURRICULUM",
    "MOCK INTERVIEWS + PLACEMENT SUPPORT",
    "PRACTICAL SKILLS OVER JUST THEORY",
    "GITHUB + PROJECT PORTFOLIO",
  ];

  return (
    <section
      aria-label="Why choose Data Council"
      className="overflow-hidden border-y border-black/10 bg-[#c9ff3b] py-5 sm:py-6"
    >
      <div className="marquee-track-benefits flex w-max items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <span
                key={item}
                className="flex shrink-0 items-center gap-6 px-5 text-sm font-bold tracking-[-0.03em] sm:gap-9 sm:px-8 sm:text-base"
              >
                {item}

                <span
                  className="text-xl font-normal"
                  aria-hidden="true"
                >
                  ✳
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
