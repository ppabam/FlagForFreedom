import { fetchFlagById } from "@/app/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import MapSection from "@/app/ui/map/MapSection";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const flag = await fetchFlagById(id);
  const { latitude, longitude } = flag;

  return (
    <div className="flex flex-col items-center p-6">
      {/* Flag Details Card */}
      <Card className="w-full max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">{flag.name}</CardTitle>
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
            <div className="text-gray-600 text-center">
              <p>
                <strong>ID:</strong> {flag.id}
              </p>
              <p>
                <strong>Likes:</strong> {flag.like_count}
              </p>
              <p>
                <strong>Coordinates:</strong> {latitude}, {longitude}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Map Section */}
      <MapSection latitude={latitude} longitude={longitude} />
    </div>
  );
}
