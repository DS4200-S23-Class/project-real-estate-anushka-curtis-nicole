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

export default function Home({ properties }) {
  return (
    <>
      <main className="relative">
        <Map
          locations={properties.map((property) => ({
            latitude: property['location/latitude'],
            longitude: property['location/longitude'],
          }))}
        />
        <div className="absolute px-4 py-2 bg-white top-4 left-4">
          <h1 className="text-xl font-bold">Real Estate Visualization</h1>
        </div>
      </main>
    </>
  );
}
