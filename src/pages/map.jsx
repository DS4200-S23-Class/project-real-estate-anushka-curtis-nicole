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
          <div className="p-3">
            <img class="w-16 md:w-32 lg:w-48" src={selectedProperty.imageUrl}></img>
            <h2 className="font-bold">Name</h2>
            {selectedProperty.name || 'Please Select A Property'}
            <h2 className="font-bold">Price</h2>
            <div>${selectedProperty.price || ''}</div>
            <h2 className="font-bold">Beds</h2>
            <div>{selectedProperty.beds}</div>
            <h2 className="font-bold">Baths</h2>
            <div>{selectedProperty.baths}</div>
            <h2 className="font-bold">Listing Date</h2>
            <div>{selectedProperty.dateListed}</div>
            <h2 className="font-bold">Property Status</h2>
            <div>{selectedProperty.status}</div>
            <h2 className="font-bold">Real Estate Agent Name</h2>
            <div>{selectedProperty.listingAgentName}</div>
            <h2 className="font-bold">Real Estate Agent Phone Number</h2>
            <div>{selectedProperty.listingAgentPhoneNumber}</div>
            <h2 className="font-bold">Real Estate Agent Email</h2>
            <div>{selectedProperty.listingAgentEmail}</div>
            <h2 className="font-bold">Real Estate Agency </h2>
            <div>{selectedProperty.listingAgencyName}</div>
          </div>
        </div>
      </main>
    </>
  );
}
