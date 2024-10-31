/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp', 'image/png'],
    domains: ['localhost'],  
  },
  reactStrictMode: true,
};

export default nextConfig;
