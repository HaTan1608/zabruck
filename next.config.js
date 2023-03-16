/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    domains: ["res.cloudinary.com", "cf.shopee.vn", "kddi-h.assetsadobe3.com"],
  },
};

module.exports = nextConfig;
