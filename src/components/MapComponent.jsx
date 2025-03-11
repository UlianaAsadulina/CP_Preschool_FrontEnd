import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';






export default function MapComponent() {
    const position = {
        lat: 39.087365,
        lng: -84.325568
    };

    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const mapID = import.meta.env.VITE_MAP_ID;

    return  (
    <APIProvider apiKey={apiKey}>      
            
        
            <Map defaultZoom={12} 
                defaultCenter={position} 
                mapId={mapID}>
                <AdvancedMarker key="The Preschool" position={position}>
                    <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
                </AdvancedMarker>
            </Map>
            
    
    </APIProvider>
    );
}