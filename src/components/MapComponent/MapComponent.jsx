'use client';

// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  return (
    <div className="w-full h-[500px] rounded-[16px] overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186905.63525309195!2d-81.41342914026532!3d42.948762786611184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20ea88d9b0b%3A0x28c7d7699a056b95!2sLondon%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sng!4v1754620369819!5m2!1sen!2sng" 
        width="800" height="600" style={{ border: 0, width: "100%" }}  
        allowFullScreen="" loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  );
}
