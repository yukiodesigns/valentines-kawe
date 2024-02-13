// pages/page2.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

const Page6 = () => {
  const [currentPage, setCurrentPage] = useState('page6');
  const [color, setColor] = useState('bg-red-300');

  return (
    <div className={`flex flex-col justify-center items-center h-screen ${color}`}>
      <h1 className="text-4xl text-white">Page 6</h1>
      <p className='mb-20'>Maybe we can try it if you let me
        Take you by the hand
        You're the only one who understands</p>

        <div>
          <img src="/imgs/us.jpg" alt="Left Image" className="w-32 h-55" />
        </div>
      <Link href="/page5" className="mt-8 bg-white px-4 py-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
          onClick={() => {
            setCurrentPage('index');
            setColor('bg-blue-300');
          }}>
          Previous Page
      </Link>
    </div>
  )
};

export default Page6;
