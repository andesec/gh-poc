import type { NextConfig } from "next";

const repositoryName = "gh-poc";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repositoryName}`,
  assetPrefix: `/${repositoryName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
