/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "standalone", // docker

  // async headers() {
  //   return [
  //     {
  //       source: "/:path*", // Match all routes
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "no-store, no-cache, must-revalidate, proxy-revalidate",
  //         },
  //         { key: "Pragma", value: "no-cache" },
  //         { key: "Expires", value: "0" },
  //       ],
  //     },
  //   ];
  // },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // 365일 캐시 설정
          },
        ],
      },
    ];
  },
};

export default nextConfig;
