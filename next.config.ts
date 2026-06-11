import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // the hero background is a subtle gradient that bands at the default q75
    qualities: [75, 90],
  },
};

export default nextConfig;
