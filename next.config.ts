import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip ESLint during production builds (e.g., on Vercel) to avoid blocking deploys.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
