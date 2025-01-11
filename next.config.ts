import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.businessucces.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.b2geta.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dev-api.b2geta.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dev-img.b2geta.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.b2geta.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.b2geta.com.tr",
        port: "",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "shopwall.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "localhost:3000.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
