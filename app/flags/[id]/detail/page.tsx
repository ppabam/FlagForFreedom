import { fetchFlagById } from "@/app/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import MapSection from "@/app/ui/map/MapSection";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// https://react-icons.github.io/react-icons/icons/si/
// import { SiKakaotalk } from "react-icons/si";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const flag = await fetchFlagById(id);
  const { latitude, longitude } = flag;

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
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  process.env.NEXT_PUBLIC_SITE_URL || ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
              >
                <FaFacebookF size={33} className="text-blue-600" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  process.env.NEXT_PUBLIC_SITE_URL || ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Twitter"
              >
                <FaTwitter size={33} className="text-sky-400" />
              </a>

              <a
                href={`https://www.instagram.com/`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Instagram"
              >
                <FaInstagram size={33} className="text-pink-500" />
              </a>
              {/* <a
                href={`https://api.kakao.com/v2/share?url=${encodeURIComponent(
                  process.env.NEXT_PUBLIC_SITE_URL || ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on KakaoTalk"
              >
                <SiKakaotalk size={55} className="text-yellow-400" />
              </a> */}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Section */}
      <MapSection latitude={latitude} longitude={longitude} />
    </div>
  );
}
