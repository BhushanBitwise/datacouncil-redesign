
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   experimental: {
//     agentFeedback: true,
//   },

//   cacheComponents: true,
//   partialPrefetching: true,

//   turbopack: {
//     rules: {
//       "*.css": {
//         loaders: ["@tailwindcss/turbopack"],
//         as: "*.css",
//       },
//     },
//   },

//   images: {
//     formats: ["image/avif", "image/webp"],
//     qualities: [60, 70, 75],
//     minimumCacheTTL: 60 * 60 * 24 * 30,
//     dangerouslyAllowSVG: false,
//   },

//   poweredByHeader: false,
// };

// export default nextConfig;





import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },

  cacheComponents: true,
  partialPrefetching: true,

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    // Source files already .webp hain, isliye AVIF hata diya (first encode slow hota hai)
    formats: ["image/webp"],
    qualities: [60, 70, 75],
    // Optimized images 1 saal cache: repeat visit instant
    minimumCacheTTL: 60 * 60 * 24 * 365,
    dangerouslyAllowSVG: false,
  },

  poweredByHeader: false,
};

export default nextConfig;