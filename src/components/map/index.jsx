import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function Map({ properties, setSelectedProperty }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    // The latitude and longitude of the center of Martha's Vineyard
    latitude: 41.3893,
    longitude: -70.6122,
    zoom: 10,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
      initialViewState={viewport}
      style={{ height: '100vh' }}
    >
      {properties.map((property) => (
        <div key={property.id}>
          <Marker
            onClick={() => setSelectedProperty(property)}
            latitude={property['location/latitude']}
            longitude={property['location/longitude']}
            anchor="bottom"
          />
        </div>
      ))}
    </ReactMapGL>
  );
}
