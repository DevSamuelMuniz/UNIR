/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
};

export default nextConfig;
