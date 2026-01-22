import type { NextConfig } from "next";

/*
 * Next.js Configuration
 *
 * Static export enabled for Vercel deployment.
 * No server-side rendering needed for this marketing site.
 */

const nextConfig: NextConfig = {
  // Enable static export for Vercel deployment
  output: "export",

  // Disable image optimization for static export
  // (Vercel will still optimize images at the edge)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
