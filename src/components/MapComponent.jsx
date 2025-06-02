import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { useState } from 'react';






export default function MapComponent() {
const [open, setOpen] = useState(false)

    const position = {
        lat: 39.087365,
        lng: -84.325568
    };

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const mapID = import.meta.env.VITE_MAP_ID;

     // Custom logo as marker icon
    const logoIcon = {
        url: "https://img.icons8.com/office/40/pyramid-toy--v1.png",
        scaledSize: { width: 40, height: 40 }, 
    };

    const handleMarkerClick = () => {
        const googleMapsUrl = `https://www.google.com/maps?q=${position.lat},${position.lng}`;
        window.open(googleMapsUrl, "_blank");
    };

    return (
        <APIProvider apiKey={apiKey}>
            <Map defaultZoom={12} defaultCenter={position} mapId={mapID}>              
          
                <AdvancedMarker key="The Preschool" position={position} onClick={handleMarkerClick} icon={logoIcon} />
            </Map>
            
        </APIProvider>
    );
}