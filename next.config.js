/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    domains: ["res.cloudinary.com", "kddi-h.assetsadobe3.com"],
  },
};

module.exports = nextConfig;
