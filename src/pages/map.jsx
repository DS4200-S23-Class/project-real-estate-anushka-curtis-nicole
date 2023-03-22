import dynamic from 'next/dynamic';
import { useState } from 'react';
import * as d3 from 'd3';

const Map = dynamic(() => import('@/components/map'), {
  loading: () => <div className="bg-gray-100 h-96 animate-pulse" />,
  ssr: false,
});

export async function getStaticProps(context) {
  const properties = await d3.csv('http://localhost:3000/properties.csv');

  return {
    props: { properties }, // will be passed to the page component as props
  };
}

export default function MapPage({ properties }) {
  const [selectedProperty, setSelectedProperty] = useState({});

  return (
    <>
      <main className="grid grid-cols-4">
        <div className="relative w-full col-span-3">
          <Map properties={properties} setSelectedProperty={setSelectedProperty} />
          <div className="absolute px-4 py-2 bg-white top-4 left-4">
            <h1 className="text-xl font-bold">Real Estate Visualization</h1>
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-3">{selectedProperty.name || 'Please Select A Property'}</div>
        </div>
      </main>
    </>
  );
}
