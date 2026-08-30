import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Static export has no server to run next/image's optimization API
  // route (/_next/image) -- Nav.tsx's <Image src="/logo.png" .../> was
  // silently pointing there and 404ing on Cloudflare Pages, which has no
  // Next.js server at all, just static files. `unoptimized: true` makes
  // next/image render a plain <img src="/logo.png"> instead, which is
  // the documented fix for next/image + output: "export".
  images: { unoptimized: true },
};

export default nextConfig;
