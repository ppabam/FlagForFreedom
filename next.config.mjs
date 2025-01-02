import { readFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

const commitHash = execSync('git rev-parse --short HEAD').toString().trim();
const packageJson = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8'));
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

  env: {
    APP_VERSION: packageJson.version,
    BASE_CAMP: "https://github.com/ppabam/FlagForFreedom",
    // BASE_CAMP: "https://github.com/dMario24/flag123",
    COMMIT_HASH: commitHash,
  },

  async headers() {
    return [
      {
        source: "/:path*(.webp|.jpg|.jpeg|.png|.gif|.svg)", // Apply cache control to image paths
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
