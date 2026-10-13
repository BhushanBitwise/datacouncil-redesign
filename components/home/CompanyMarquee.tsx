// "use client";
// // components/CompanyMarquee.tsx  — Next.js (App/Pages Router), zero dependencies.
// // <CompanyMarquee />  |  <CompanyMarquee title="..." />

// import { memo, useEffect, useRef, type ReactNode, type SVGProps } from "react";

// const F = "'Helvetica Neue',Arial,sans-serif";
// const T = (p: SVGProps<SVGTextElement>) => <text fontFamily={F} textAnchor="middle" x={70} {...p} />;
// const S = ({ n, children }: { n: string; children: ReactNode }) => (
//   <svg viewBox="0 0 140 48" width="140" height="48" role="img" aria-label={n} focusable="false">{children}</svg>
// );

// /* ---------- logos (colored, transparent bg) ---------- */
// const LOGOS: [string, ReactNode][] = [
//   ["PayPal", <>
//     <path d="M17 9h11c5 0 8 3 7 8-1 6-5 8-10 8h-3l-2 10h-7z" fill="#003087" />
//     <path d="M21 14h8c4 0 5 2 4 5-1 4-4 5-8 5h-2l-1 6h-5z" fill="#009CDE" />
//     <T x={86} y={33} fontSize={22} fontWeight={800} fontStyle="italic" fill="#003087">Pay<tspan fill="#009CDE">Pal</tspan></T>
//   </>],
//   ["Intel", <>
//     <T y={34} fontSize={30} fontWeight={700} fill="#0071C5" letterSpacing={-1.5}>intel</T>
//     <circle cx={44} cy={13} r={2.8} fill="#0071C5" />
//   </>],
//   ["Lenovo", <>
//     <rect x={14} y={7} width={112} height={34} rx={3} fill="#E2231A" />
//     <T y={32} fontSize={23} fontWeight={800} fill="#fff">Lenovo</T>
//   </>],
//   ["Amazon", <>
//     <T y={27} fontSize={28} fontWeight={700} fill="#232F3E" letterSpacing={-1}>amazon</T>
//     <path d="M32 33q38 12 74-1" stroke="#FF9900" strokeWidth={3.2} fill="none" strokeLinecap="round" />
//     <path d="M99 27l8 4-5 6" stroke="#FF9900" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
//   </>],
//   ["Deloitte", <>
//     <T x={66} y={32} fontSize={24} fontWeight={800} fill="#0B0B0B" letterSpacing={-1}>Deloitte</T>
//     <circle cx={116} cy={30} r={3.8} fill="#86BC25" />
//   </>],
//   ["LTI", <>
//     <T y={35} fontSize={34} fontWeight={900} fill="#2E2A8C" letterSpacing={1}>LTI</T>
//     <rect x={34} y={39} width={72} height={3.5} rx={1.7} fill="#E8344E" />
//   </>],
//   ["Wipro", <>
//     <g transform="translate(32 24)">
//       {["#E63946", "#F4A300", "#2BB673", "#1D9BF0", "#8E44AD", "#FF6FB5"].map((c, i) => (
//         <ellipse key={c} cy={-8} rx={4} ry={8} fill={c} transform={`rotate(${i * 60})`} />
//       ))}
//       <circle r={3} fill="#fff" />
//     </g>
//     <T x={85} y={31} fontSize={23} fontWeight={700} fill="#341C53">wipro</T>
//   </>],
//   ["Cognizant", <T y={31} fontSize={23} fontWeight={800} fill="#1A4CA1" letterSpacing={-1}>Cognizant</T>],
//   ["Capgemini", <>
//     <T x={62} y={31} fontSize={22} fontWeight={700} fill="#0070AD" fontFamily="Georgia,serif" fontStyle="italic">Capgemini</T>
//     <path d="M122 13c6 0 10 4 10 9s-4 9-10 9c-3 0-5-1-7-3 3-1 5-3 5-6s-2-5-5-6c2-2 4-3 7-3z" fill="#12ABDB" />
//   </>],
//   ["TCS", <>
//     <circle cx={26} cy={24} r={13} fill="none" stroke="#2D5BA6" strokeWidth={2.6} />
//     <path d="M17 19h18M26 19v13" stroke="#2D5BA6" strokeWidth={3.2} strokeLinecap="round" />
//     <T x={46} y={25} fontSize={16} fontWeight={800} fill="#1B3F8B" textAnchor="start">TATA</T>
//     <T x={46} y={35} fontSize={6.5} fontWeight={600} fill="#5B6B8C" textAnchor="start">CONSULTANCY</T>
//     <T x={46} y={42} fontSize={6.5} fontWeight={600} fill="#5B6B8C" textAnchor="start">SERVICES</T>
//   </>],
//   ["SAP", <>
//     <path d="M24 6h92L72 42H24z" fill="url(#dcSap)" />
//     <T x={52} y={33} fontSize={22} fontWeight={900} fill="#fff" letterSpacing={1}>SAP</T>
//   </>],
//   ["Accenture", <>
//     <T y={34} fontSize={23} fontWeight={800} fill="#111" letterSpacing={-1}>accenture</T>
//     <path d="M101 8l9 5-9 5" stroke="#A100FF" strokeWidth={3.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
//   </>],
//   ["Oracle", <T y={32} fontSize={23} fontWeight={800} fill="#F80000" letterSpacing={1.5}>ORACLE</T>],
//   ["IBM", <T y={36} fontSize={38} fontWeight={900} fill="url(#dcIbm)" fontFamily="Georgia,serif" letterSpacing={2}>IBM</T>],
//   ["Microsoft", <>
//     <path d="M10 10h13v13H10z" fill="#F25022" /><path d="M25 10h13v13H25z" fill="#7FBA00" />
//     <path d="M10 25h13v13H10z" fill="#00A4EF" /><path d="M25 25h13v13H25z" fill="#FFB900" />
//     <T x={46} y={31} fontSize={19} fill="#737373" textAnchor="start">Microsoft</T>
//   </>],
//   ["Dell", <>
//     <circle cx={70} cy={24} r={20} fill="#007DB8" />
//     <circle cx={70} cy={24} r={17} fill="none" stroke="#fff" strokeWidth={1.3} />
//     <T y={30} fontSize={17} fontWeight={900} fill="#fff" letterSpacing={-0.5}>DELL</T>
//   </>],
//   ["HP", <>
//     <circle cx={70} cy={24} r={20} fill="#0096D6" />
//     <T y={32} fontSize={23} fontWeight={800} fontStyle="italic" fill="#fff" letterSpacing={-1}>hp</T>
//   </>],
//   ["Infosys", <T y={32} fontSize={25} fontWeight={600} fill="#007CC3" letterSpacing={-1.2}>Infosys</T>],
// ];

// const ROWS = [
//   { items: LOGOS.slice(0, 9), rev: false, dur: 40 },
//   { items: LOGOS.slice(9), rev: true, dur: 46 },
// ];

// const Row = memo(function Row({ items, rev, dur }: (typeof ROWS)[number]) {
//   const loop = [...items, ...items]; // 2 copies = seamless loop
//   return (
//     <div className="dcm-mask">
//       <ul className={`dcm-track${rev ? " dcm-rev" : ""}`} style={{ animationDuration: `${dur}s` }}>
//         {loop.map(([n, g], i) => (
//           <li key={`${n}-${i}`} className="dcm-item" aria-hidden={i >= items.length ? true : undefined}>
//             <S n={n}>{g}</S>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// });

// export default function CompanyMarquee({ title = "Our learners work at top companies" }: { title?: string }) {
//   const ref = useRef<HTMLElement>(null);

//   // Animation sirf tab chalti hai jab section screen par dikhe (CPU/GPU bachta hai)
//   useEffect(() => {
//     const el = ref.current;
//     if (!el || typeof IntersectionObserver === "undefined") return;
//     const io = new IntersectionObserver(([e]) => el.toggleAttribute("data-play", e.isIntersecting), { rootMargin: "100px" });
//     io.observe(el);
//     return () => io.disconnect();
//   }, []);

//   const words = title.split(" ");
//   return (
//     <section ref={ref} className="dcm" aria-label="Companies where our learners are placed">
//       <style>{CSS}</style>
//       {/* shared gradients/patterns — sirf ek baar define */}
//       <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
//         <defs>
//           <linearGradient id="dcSap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#00B8F1" /><stop offset="1" stopColor="#0A6ED1" /></linearGradient>
//           <pattern id="dcIbm" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="2.6" fill="#1F70C1" /></pattern>
//         </defs>
//       </svg>
//       <div className="dcm-head">
//         <p className="dcm-eyebrow"><span className="dcm-dot" />PLACEMENTS</p>
//         <h2 className="dcm-title">
//           {words.slice(0, -2).join(" ")} <span className="dcm-hl">{words.slice(-2).join(" ")}.</span>
//         </h2>
//       </div>
//       {ROWS.map((r, i) => <Row key={i} {...r} />)}
//     </section>
//   );
// }

// const CSS = `
// .dcm{--ink:#0b0b0b;--lime:#c6ff1a;padding:clamp(40px,6vw,88px) 0;overflow:hidden;color:var(--ink);
//   font-family:inherit;content-visibility:auto;contain-intrinsic-size:auto 420px}
// .dcm-head{padding:0 clamp(16px,2vw,24px);margin-bottom:clamp(20px,3vw,40px)}
// .dcm-eyebrow{display:flex;align-items:center;gap:10px;margin:0 0 clamp(12px,1.6vw,20px);
//   font-size:clamp(11px,1.1vw,13px);font-weight:600;letter-spacing:.2em}
// .dcm-dot{width:8px;height:8px;border-radius:50%;background:var(--ink)}
// .dcm-title{margin:0;max-width:14ch;font-family:inherit;font-weight:800;line-height:.98;letter-spacing:-.05em;
//   font-size:clamp(38px,6.4vw,92px)}
// .dcm-hl{background:linear-gradient(transparent 66%,var(--lime) 66% 94%,transparent 94%);padding-right:.04em}
// .dcm-mask{overflow:hidden;contain:layout paint;margin-top:clamp(8px,1.4vw,18px);
//   -webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);
//   mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
// .dcm-track{display:flex;width:max-content;margin:0;padding:0;list-style:none;
//   animation:dcm-x 40s linear infinite;animation-play-state:paused;will-change:transform}
// .dcm[data-play] .dcm-track{animation-play-state:running}
// .dcm-rev{animation-direction:reverse}
// @media (hover:hover){.dcm-mask:hover .dcm-track{animation-play-state:paused}}
// .dcm-item{flex:none;padding:0 clamp(14px,2.6vw,40px);display:grid;place-items:center}
// .dcm-item svg{width:clamp(136px,40vw,168px);height:auto;display:block;transition:transform .3s ease}
// @media (min-width:768px){.dcm-item svg{width:clamp(130px,12vw,176px)}}
// @media (hover:hover){.dcm-item:hover svg{transform:scale(1.1)}}
// @keyframes dcm-x{to{transform:translate3d(-50%,0,0)}}
// @media (prefers-reduced-motion:reduce){.dcm-track{animation:none}.dcm-mask{overflow-x:auto}}
// `;












"use client";

import { memo, useEffect, useRef, type ReactNode, type SVGProps } from "react";

const FONT = "Arial, Helvetica, sans-serif";

const T = (props: SVGProps<SVGTextElement>) => (
  <text
    x={70}
    textAnchor="middle"
    fontFamily={FONT}
    {...props}
  />
);

function Logo({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 140 48"
      width="140"
      height="48"
      role="img"
      aria-label={name}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

type Company = {
  name: string;
  content: ReactNode;
};

const LOGOS: Company[] = [
  {
    name: "PayPal",
    content: (
      <>
        <path
          d="M17 8h12c6 0 9 4 8 9-1 6-5 9-11 9h-4l-2 10h-7z"
          fill="#003087"
        />
        <path
          d="M21 13h8c4 0 5 2 4 5-1 4-4 5-8 5h-2l-1 6h-5z"
          fill="#009CDE"
        />
        <T
          x={88}
          y={32}
          fontSize={22}
          fontWeight={800}
          fontStyle="italic"
          fill="#003087"
        >
          Pay<tspan fill="#009CDE">Pal</tspan>
        </T>
      </>
    ),
  },
  {
    name: "Intel",
    content: (
      <>
        <ellipse
          cx={70}
          cy={24}
          rx={34}
          ry={18}
          fill="none"
          stroke="#0071C5"
          strokeWidth={1.5}
        />
        <T y={32} fontSize={29} fontWeight={700} fill="#0071C5">
          intel
        </T>
      </>
    ),
  },
  {
    name: "Lenovo",
    content: (
      <>
        <rect x={14} y={7} width={112} height={34} rx={3} fill="#E2231A" />
        <T y={32} fontSize={23} fontWeight={800} fill="#FFFFFF">
          Lenovo
        </T>
      </>
    ),
  },
  {
    name: "Amazon",
    content: (
      <>
        <T y={27} fontSize={28} fontWeight={700} fill="#232F3E" letterSpacing={-1}>
          amazon
        </T>
        <path
          d="M32 33q38 12 74-1"
          stroke="#FF9900"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M99 27l8 4-5 6"
          stroke="#FF9900"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    name: "Deloitte",
    content: (
      <>
        <T x={66} y={32} fontSize={24} fontWeight={800} fill="#0B0B0B" letterSpacing={-1}>
          Deloitte
        </T>
        <circle cx={116} cy={30} r={3.8} fill="#86BC25" />
      </>
    ),
  },
  {
    name: "LTI",
    content: (
      <>
        <T y={35} fontSize={34} fontWeight={900} fill="#2E2A8C" letterSpacing={1}>
          LTI
        </T>
        <rect x={34} y={39} width={72} height={3.5} rx={1.7} fill="#E8344E" />
      </>
    ),
  },
  {
    name: "Wipro",
    content: (
      <>
        <g transform="translate(29 24)">
          {["#E63946", "#F4A300", "#2BB673", "#1D9BF0", "#8E44AD", "#FF6FB5"].map(
            (color, index) => (
              <ellipse
                key={color}
                cy={-8}
                rx={4}
                ry={8}
                fill={color}
                transform={`rotate(${index * 60})`}
              />
            ),
          )}
          <circle r={3} fill="#FFFFFF" />
        </g>
        <T x={85} y={31} fontSize={23} fontWeight={700} fill="#341C53">
          wipro
        </T>
      </>
    ),
  },
  {
    name: "Cognizant",
    content: (
      <T y={31} fontSize={23} fontWeight={800} fill="#1A4CA1" letterSpacing={-1}>
        Cognizant
      </T>
    ),
  },
  {
    name: "Capgemini",
    content: (
      <>
        <T
          x={62}
          y={31}
          fontSize={22}
          fontWeight={700}
          fill="#0070AD"
          fontFamily="Georgia, serif"
          fontStyle="italic"
        >
          Capgemini
        </T>
        <path
          d="M122 13c6 0 10 4 10 9s-4 9-10 9c-3 0-5-1-7-3 3-1 5-3 5-6s-2-5-5-6c2-2 4-3 7-3z"
          fill="#12ABDB"
        />
      </>
    ),
  },
  {
    name: "TCS",
    content: (
      <>
        <circle cx={26} cy={24} r={13} fill="none" stroke="#2D5BA6" strokeWidth={2.6} />
        <path d="M17 19h18M26 19v13" stroke="#2D5BA6" strokeWidth={3.2} strokeLinecap="round" />
        <text x={46} y={25} fontSize={16} fontWeight={800} fill="#1B3F8B">
          TATA
        </text>
        <text x={46} y={35} fontSize={6.5} fontWeight={600} fill="#5B6B8C">
          CONSULTANCY
        </text>
        <text x={46} y={42} fontSize={6.5} fontWeight={600} fill="#5B6B8C">
          SERVICES
        </text>
      </>
    ),
  },
  {
    name: "SAP",
    content: (
      <>
        <defs>
          <linearGradient id="dc-sap-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00B8F1" />
            <stop offset="100%" stopColor="#0A6ED1" />
          </linearGradient>
        </defs>
        <path d="M24 6h92L72 42H24z" fill="url(#dc-sap-gradient)" />
        <T x={52} y={33} fontSize={22} fontWeight={900} fill="#FFFFFF" letterSpacing={1}>
          SAP
        </T>
      </>
    ),
  },
  {
    name: "Accenture",
    content: (
      <>
        <T y={34} fontSize={23} fontWeight={800} fill="#111111" letterSpacing={-1}>
          accenture
        </T>
        <path
          d="M101 8l9 5-9 5"
          stroke="#A100FF"
          strokeWidth={3.4}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    name: "Oracle",
    content: (
      <T y={32} fontSize={23} fontWeight={800} fill="#F80000" letterSpacing={1.5}>
        ORACLE
      </T>
    ),
  },
  {
    name: "IBM",
    content: (
      <>
        <defs>
          <pattern id="dc-ibm-pattern" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="2.6" fill="#1F70C1" />
          </pattern>
        </defs>
        <T y={36} fontSize={38} fontWeight={900} fill="url(#dc-ibm-pattern)" fontFamily="Georgia, serif" letterSpacing={2}>
          IBM
        </T>
      </>
    ),
  },
  {
    name: "Microsoft",
    content: (
      <>
        <path d="M10 10h13v13H10z" fill="#F25022" />
        <path d="M25 10h13v13H25z" fill="#7FBA00" />
        <path d="M10 25h13v13H10z" fill="#00A4EF" />
        <path d="M25 25h13v13H25z" fill="#FFB900" />
        <T x={46} y={31} fontSize={19} fill="#737373" textAnchor="start">
          Microsoft
        </T>
      </>
    ),
  },
  {
    name: "Dell",
    content: (
      <>
        <circle cx={70} cy={24} r={20} fill="#007DB8" />
        <circle cx={70} cy={24} r={17} fill="none" stroke="#FFFFFF" strokeWidth={1.3} />
        <T y={30} fontSize={17} fontWeight={900} fill="#FFFFFF" letterSpacing={-0.5}>
          DELL
        </T>
      </>
    ),
  },
  {
    name: "HP",
    content: (
      <>
        <circle cx={70} cy={24} r={20} fill="#0096D6" />
        <T y={32} fontSize={23} fontWeight={800} fontStyle="italic" fill="#FFFFFF" letterSpacing={-1}>
          hp
        </T>
      </>
    ),
  },
  {
    name: "Infosys",
    content: (
      <T y={32} fontSize={25} fontWeight={600} fill="#007CC3" letterSpacing={-1.2}>
        Infosys
      </T>
    ),
  },
];

const ROWS = [
  { items: LOGOS.slice(0, 9), reverse: false, duration: 44 },
  { items: LOGOS.slice(9), reverse: true, duration: 48 },
];

type MarqueeRowProps = (typeof ROWS)[number];

const MarqueeRow = memo(function MarqueeRow({
  items,
  reverse,
  duration,
}: MarqueeRowProps) {
  const repeated = [...items, ...items];

  return (
    <div className="dcm-mask">
      <ul
        className={`dcm-track${reverse ? " dcm-reverse" : ""}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {repeated.map((company, index) => (
          <li
            key={`${company.name}-${index}`}
            className="dcm-item"
            aria-hidden={index >= items.length ? true : undefined}
          >
            <Logo name={company.name}>{company.content}</Logo>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default function CompanyMarquee({
  title = "Our learners work at top companies",
}: {
  title?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        section.toggleAttribute("data-play", entry.isIntersecting);
      },
      { rootMargin: "100px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="dcm"
      aria-label="Companies where our learners are placed"
    >
      <div className="dcm-head">
        <p className="dcm-eyebrow">
          <span className="dcm-dot" />
          PLACEMENTS
        </p>

        <h2 className="dcm-title">{title}</h2>

        <p className="dcm-description">
          Explore companies across the technology industry.
        </p>
      </div>

      {ROWS.map((row, index) => (
        <MarqueeRow
          key={index}
          {...row}
        />
      ))}

      <style>{`
        .dcm {
          --ink: #101010;
          --lime: #c9ff3b;
          padding: clamp(42px, 6vw, 84px) 0;
          overflow: hidden;
          color: var(--ink);
          font-family: inherit;
          content-visibility: auto;
          contain-intrinsic-size: auto 420px;
        }

        .dcm-head {
          padding-inline: max(20px, calc((100vw - 1280px) / 2));
          margin-bottom: clamp(22px, 3vw, 38px);
        }

        .dcm-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 clamp(14px, 1.8vw, 22px);
          font-size: 11px;
          font-weight: 650;
          letter-spacing: .2em;
        }

        .dcm-dot {
          width: 8px;
          height: 8px;
          flex: none;
          border-radius: 50%;
          background: var(--ink);
        }

        .dcm-title {
          margin: 0;
          max-width: 900px;
          font-family: inherit;
          font-size: 3rem;
          font-weight: 750;
          line-height: 1.05;
          letter-spacing: -.065em;
          overflow-wrap: break-word;
        }

        .dcm-description {
          margin: 16px 0 0;
          max-width: 600px;
          color: rgb(16 16 16 / 60%);
          font-size: 14px;
          line-height: 1.8;
        }

        .dcm-mask {
          overflow: hidden;
          contain: layout paint;
          margin-top: clamp(10px, 1.4vw, 18px);
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
          mask-image: linear-gradient(
            90deg,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
        }

        .dcm-track {
          display: flex;
          width: max-content;
          margin: 0;
          padding: 0;
          list-style: none;
          animation: dcm-scroll 44s linear infinite;
          animation-play-state: paused;
          will-change: transform;
        }

        .dcm[data-play] .dcm-track {
          animation-play-state: running;
        }

        .dcm-reverse {
          animation-direction: reverse;
        }

        .dcm-item {
          display: grid;
          flex: none;
          place-items: center;
          padding-inline: clamp(16px, 2.6vw, 40px);
        }

        .dcm-item svg {
          display: block;
          width: clamp(136px, 40vw, 168px);
          height: auto;
          overflow: visible;
          transition: transform 250ms ease;
        }

        @media (min-width: 640px) {
          .dcm-title {
            font-size: 4.5rem;
          }

          .dcm-description {
            font-size: 16px;
          }
        }

        @media (min-width: 768px) {
          .dcm-item svg {
            width: clamp(130px, 12vw, 176px);
          }
        }

        @media (hover: hover) {
          .dcm-mask:hover .dcm-track {
            animation-play-state: paused;
          }

          .dcm-item:hover svg {
            transform: scale(1.07);
          }
        }

        @keyframes dcm-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .dcm-track {
            animation: none;
            will-change: auto;
          }

          .dcm-mask {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }
        }
      `}</style>
    </section>
  );
}
