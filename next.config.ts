import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  /* Preview domains in the sandbox — lets the JS chunks load from the preview origin */
  allowedDevOrigins: ["localhost", "127.0.0.1", "**.space-z.ai", "*.space-z.ai", "space-z.ai"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
