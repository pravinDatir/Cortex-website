import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoName = "Cortex-website";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export", basePath: `/${repoName}`, trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
