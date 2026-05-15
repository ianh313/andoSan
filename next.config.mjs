/** @type {import('next').NextConfig} */
const isGhPages = process.env.GITHUB_PAGES === "true";
const repo = "andoSan";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGhPages ? `/${repo}` : "",
  assetPrefix: isGhPages ? `/${repo}/` : "",
};

export default nextConfig;
