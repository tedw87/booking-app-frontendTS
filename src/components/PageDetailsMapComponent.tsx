import { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';

export default function PageDetailsMapComponent() {
  const position = { lat: 53.54, lng: 10 };
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: '600px' }}>
        <Map zoom={9} center={position}></Map>
      </div>
    </APIProvider>
  );
}
