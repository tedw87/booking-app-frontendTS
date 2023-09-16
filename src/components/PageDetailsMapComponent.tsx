import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import mapStyle from "../helpers/mapstyles";

const PageDetailsMap: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

export default PageDetailsMap;

function Map() {
  return (
    <GoogleMap
      zoom={5}
      center={{ lat: 45.89, lng: 24.89 }}
      mapContainerClassName="map-container"
      options={{ styles: mapStyle }}
    ></GoogleMap>
  );
}
