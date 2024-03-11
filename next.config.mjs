/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
