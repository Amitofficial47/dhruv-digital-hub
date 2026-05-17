import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  allowedDevOrigins: [
    "https://aa45-2409-40d1-50e-b21-e072-670d-6854-7ca7.ngrok-free.app",
  ],
};

export default nextConfig;
