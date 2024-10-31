/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost'],  
  },
  reactStrictMode: true,
};

export default nextConfig;
