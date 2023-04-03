import dynamic from 'next/dynamic';
import { useState } from 'react';
import * as d3 from 'd3';
import Image from 'next/image';
import Link from 'next/link';
import { LineChart } from '@/components/charts/line';
import { addNumberCommas } from '@/utils/add-number-commas';

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

const listOfAttributes = [
  { name: 'name', as: '', type: 'basic', formatter: (value) => value },
  { name: 'price', as: '', type: 'range', formatter: (value) => `$${addNumberCommas(value)}` },
  { name: 'beds', as: 'Bedrooms', type: 'range', formatter: (beds) => `${beds} Bedrooms` },
  { name: 'baths', as: 'Bathrooms', type: 'range', formatter: (baths) => `${baths} Bathrooms` },
  { name: 'squareFeet', as: 'Square Feet', type: 'range', formatter: (value) => value },
  { name: 'lotSize', as: 'lotSize', type: 'range', formatter: (value) => value },
  { name: 'status', as: '', type: 'basic', formatter: (value) => value },
  { name: 'dateListed', as: 'Date Listed', type: 'basic', formatter: (value) => value },
  { name: 'listingAgentName', as: 'Listing Agent', type: 'basic', formatter: (value) => value },
  {
    name: 'listingAgentPhoneNumber',
    as: 'Agent Phone Number',
    type: 'basic',
    formatter: (value) => value,
  },
  { name: 'listingAgentEmail', as: 'Agent Email', type: 'basic', formatter: (value) => value },
  { name: 'listingAgencyName', as: 'Listing Agency', type: 'basic', formatter: (value) => value },
];

function getMin(attribute, collection) {
  const property = collection.reduce(function (prev, curr) {
    return prev[attribute] < curr[attribute] ? prev : curr;
  });

  return property[attribute];
}

function getMax(attribute, collection) {
  const property = collection.reduce(function (prev, curr) {
    return prev[attribute] > curr[attribute] ? prev : curr;
  });

  return property[attribute];
}

const cityNames = ["Central","Chappy,Downtown","East Chop","Katama","Lagoon",
"Lagoon/Harbor","Lambert's Cove","North","Sengy","South","South Shore", 
"State Beach", "Tashmoo", "West Chop"];

export default function MapPage({ properties }) {
  const [selectedProperty, setSelectedProperty] = useState({});

  console.log(getMin('yearBuilt', properties));

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
          <div className="h-screen overflow-x-hidden overflow-y-scroll">
            {selectedProperty.name ? (
              <>
                {selectedProperty.imageUrl && (
                  <div className="relative h-64">
                    <Image
                      className="object-cover"
                      alt={selectedProperty.name}
                      src={selectedProperty.imageUrl}
                      fill
                    />
                  </div>
                )}
                <div className="px-12 py-6 space-y-4">
                  {listOfAttributes.map((key) => (
                    <div key={key.name}>
                      <h2 className="font-bold capitalize">{key.as || key.name}</h2>
                      {key.type === 'basic' && (
                        <p className="break-all">{key.formatter(selectedProperty[key.name])}</p>
                      )}
                      {key.type === 'range' && (
                        <div className="pt-2 pb-6">
                          {/* <LineChart
                            min={getMin(key.name, properties)}
                            max={getMax(key.name, properties)}
                            value={selectedProperty[key.name]}
                            formatter={key.formatter} */}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <h2 className="px-12 py-6 text-xl font-medium text-center">
                Please Select A Property
              </h2>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
