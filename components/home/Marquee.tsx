
export default function Marquee() {
  const items = [
    "LEARN BY BUILDING",
    "SOFTWARE TECHNOLOGY",
    "CAREER DEVELOPMENT",
    "PROJECT-BASED LEARNING",
  ];

  return (
    <section
      aria-label="Our learning approach"
      className="overflow-hidden border-y border-black/10 bg-[#c9ff3b] py-5"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex shrink-0 items-center"
          >
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center gap-7 px-5 text-sm font-bold tracking-[-0.02em] sm:gap-10 sm:px-8 sm:text-base"
              >
                {item}
                <span className="text-xl" aria-hidden="true">
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
