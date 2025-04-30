/** @type {import('next').NextConfig} */
const nextConfig = {
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
