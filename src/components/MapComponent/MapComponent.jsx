'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  return (
    <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
      <MapContainer
        center={[6.5244, 3.3792]} // Lagos coordinates
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.5244, 3.3792]}>
          <Popup>You are here! 🚀</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
