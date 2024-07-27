/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: 'unsplash/**',
      },
    ],
    domains: ['s3-alpha-sig.figma.com'],
  },
};

export default nextConfig;
