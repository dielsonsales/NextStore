import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: false, // see https://www.reddit.com/r/nextjs/comments/1qzuahr/psa_if_you_use_nextjs_161_turborepo_exclude/
  },
};

export default nextConfig;
