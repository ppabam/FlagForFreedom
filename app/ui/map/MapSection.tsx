'use client';

import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapContainerDynamic = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayerDynamic = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const MarkerDynamic = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

export default function MapSection({ latitude, longitude }: { latitude: number; longitude: number }) {
  return (
    // https://react-leaflet.js.org/docs/api-map/
    // https://yhuj79.github.io/React/241010/
    <div className="mt-8 w-full max-w-2xl h-80">
      <MapContainerDynamic
        center={[latitude, longitude]}
        zoom={14}
        className="w-full h-full rounded-md"
      >
        <TileLayerDynamic
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerDynamic position={[latitude, longitude]} />
      </MapContainerDynamic>
    </div>
  );
}
