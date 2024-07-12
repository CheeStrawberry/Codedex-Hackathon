import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; 
import '../css/SectionInvitation.css';

function Map() {
  useEffect(() => {
    const map = L.map('map').setView([40.712776, -74.005974], 15); // Brooklyn coordinates

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([40.712776, -74.005974]).addTo(map); // Brooklyn marker
  }, []);

  return <div id="map" className="section-map"></div>;
}

export default Map;
