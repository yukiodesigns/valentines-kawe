import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-300">
      <h1 className="text-4xl text-white">Welcome to Our Book</h1>
      <Link href="/page1" className="mt-8 bg-white px-4 py-2 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
          Start Reading
      </Link>
  </div>
  );
}

