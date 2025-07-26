'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  return (
    <div className="w-full h-[500px] rounded-[16px] overflow-hidden">
      <MapContainer
        center={[6.5244, 3.3792]} // Example: Lagos
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
        
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.5244, 3.3792]}>
          <Popup>
            A sample marker in Lagos.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
