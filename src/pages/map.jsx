import dynamic from 'next/dynamic';
import { useState } from 'react';
import * as d3 from 'd3';
import Image from 'next/image';
import Link from 'next/link';

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

//functions of min max price lines here
const minMax = (data = properties, attributeName = "price") => {

  const totals = data
    .filter(x =>
      x.obj.info.find(y => y.attributeName)
    ).map(x => x.obj.total);

  return [Math.min(...totals), Math.max(...totals)];
}

const priceMinMax = minMax();
const bedsMinMax = minMax(attributeName = "beds");

const XAxis = ({ data, xScale, height }) => {
  return (
    <g className="x-axis">
      {data.map((d, i) => (
        <g key={i} transform={`translate(${xScale(d)},0)`}>
          <line y2={height} />
          <text y={height + 10} dy=".71em" style={{ textAnchor: 'middle' }}>{d}</text>
        </g>
      ))}
    </g>
  );
};

export default XAxis;

const listOfAttributes = ["name", "price", "beds", "baths", "status", "dateListed",
  "listingAgentName", "listingAgentPhoneNumber", "listingAgentEmail",
  "listingAgencyName"];

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
                <div className="p-3 space-y-4">
                  {listOfAttributes.map((key) => (
                    <div key={key}>
                      <h2 className="font-bold capitalize">{key}</h2>
                      <p className="break-all">{selectedProperty[key]}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 space-y-4">
                  <Link href="/line">view price line comparator</Link>
                </div>
              </>
            ) : (
              'Please Select a Property'
            )}
          </div>
        </div>
      </main>
    </>
  );
}




