/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "https://life.futuregenerali.in/:path*",
        },
      ],
    };
  },
};



export default nextConfig;
