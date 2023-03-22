import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-6 space-y-8 max-w-7xl">
      <h1 className="text-xl font-bold">Real Estate Data Visualization</h1>
      <div className="px-4 py-2 font-medium text-white bg-blue-600 w-min">
        <Link href="/map">View Visualization</Link>
      </div>
      <p>Blah Blah</p>
    </main>
  );
}
