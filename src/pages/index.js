import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/map'), {
  loading: () => <div className="bg-gray-100 h-96 animate-pulse" />,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main className="h-screen bg-red-100">
        <Map locations={[{ latitude: 42.3398, longitude: 71.0892 }]} />
      </main>
    </>
  );
}
