import { fetchFlagById } from "@/app/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import MapSection from "@/app/ui/map/MapSection";
import { FaFacebookF, FaHome, FaTwitter } from "react-icons/fa";
// https://react-icons.github.io/react-icons/icons/si/
// import { SiKakaotalk } from "react-icons/si";
import { headers } from "next/headers";
import { Metadata } from "next";
import Link from "next/link";

// ✅ Open Graph 메타데이터 동적 생성
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = params.id;
  const flag = await fetchFlagById(id);

  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const fullUrl = `${protocol}://${host}/flags/${id}/detail`;

  return {
    title: `${flag.name} - 상세 정보`,
    description: flag.name,
    openGraph: {
      title: flag.name,
      description: flag.name,
      url: fullUrl,
      images: [
        {
          url: flag.img_url,
          width: 800,
          height: 600,
          alt: flag.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: flag.name,
      description: flag.name,
      images: [flag.img_url],
    },
  };
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const flag = await fetchFlagById(id);
  const { latitude, longitude } = flag;

  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";

  // 전체 URL 구성
  const fullUrl = `${protocol}://${host}/flags/${params.id}/detail`;
  console.log("fullUrl", fullUrl);
  return (
    <div className="flex flex-col items-center p-6">
      {/* Flag Details Card */}
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            {flag.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-4">
            <Image
              src={flag.img_url}
              alt={flag.name}
              width={500}
              height={300}
              className="rounded-md w-full max-w-md"
            />

            {/* SNS 공유 버튼 */}
            <div className="flex gap-4">
              <Link href="/" aria-label="Go to Home">
                <FaHome
                  size={33}
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                />
              </Link>

              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
              >
                <FaFacebookF size={33} className="text-blue-600" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${fullUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
              >
                <FaTwitter size={33} className="text-sky-400" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Section */}
      <MapSection latitude={latitude} longitude={longitude} />
    </div>
  );
}
