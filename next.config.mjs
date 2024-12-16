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
  output: 'standalone', // docker

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
};

export default nextConfig;
