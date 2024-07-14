/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['unsplash.com', 'figma.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: 'unsplash/**',
      },
      {
        protocol: 'https',
        hostname: 's3-alpha-sig.figma.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
