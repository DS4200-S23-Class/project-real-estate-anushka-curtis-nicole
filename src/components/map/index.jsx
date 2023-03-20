import { LocationMarkerIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';

export default function Map({ locations }) {
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
    >
      {/* {locations.map((location) => (
        <div key={location.latitude + location.longitude}>
          <Marker
            latitude={location.latitude}
            longitude={location.longitude}
            offsetLeft={-40}
            offsetTop={-20}
          >
            <LocationMarkerIcon className="w-10 h-10 text-primary" />
          </Marker>
        </div>
      ))} */}
    </ReactMapGL>
  );
}
