/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luserylabs-ghost.up.railway.app",
      },
    ],
  },
};

export default nextConfig;

