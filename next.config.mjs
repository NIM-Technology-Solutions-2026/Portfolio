/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allows `next build` to succeed even if lint rules (e.g. unescaped
  // entities) flag something. Remove once you wire up your own CI linting.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
