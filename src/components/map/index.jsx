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

  console.log({ locations });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/outdoors-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
      initialViewState={viewport}
      style={{ width: '100vw', height: '100vh' }}
    >
      {locations.map((location) => (
        <div key={location.latitude + location.longitude}>
          <Marker latitude={location.latitude} longitude={location.longitude} anchor="bottom" />
        </div>
      ))}
    </ReactMapGL>
  );
}
