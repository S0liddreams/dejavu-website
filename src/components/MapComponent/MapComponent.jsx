'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  return (
    <div className="w-full h-[500px] rounded-[16px] overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11732.853545800222!2d-89.40902987250419!3d40.63365028815955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880baaaaaaaaaaab%3A0x5346b8f2d30609c9!2scobnbix!5e0!3m2!1sen!2sng!4v1754558309831!5m2!1sen!2sng" 
        width="600" height="450" style={{ border: 0, width: "100%" }}   
        allowFullScreen="" loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      {/* <MapContainer
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
      </MapContainer> */}
    </div>
  );
}
