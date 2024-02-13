// pages/page2.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

const Page2 = () => {
  const [currentPage, setCurrentPage] = useState('page2');
  const [color, setColor] = useState('bg-red-300');

  return (
    <div className={`flex flex-col justify-center items-center h-screen ${color}`}>
      <h1 className="text-4xl text-white">Page 2</h1>
      <p className="mb-20">I got you, you got me
            When it's us, babe, you make me feel complete
            You're all I need
      </p>
      <div className="flex justify-between w-full max-w-screen-xl px-4">
        <div>
          <img src="/imgs/kawe.jpg" alt="Left Image" className="w-32 h-55" />
        </div>
        <div>
          <img src="/imgs/us2.jpg" alt="Middle Image" className="w-32 h-50" />
        </div>
        <div>
          <img src="/imgs/yuki.jpg" alt="Right Image" className="w-32 h-50" />
        </div>
      </div>
      <div className="flex">
        <Link
            href="/page1"
            className="mt-8 mr-4 bg-white px-4 py-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
            onClick={() => {
            setCurrentPage('index');
            setColor('bg-blue-300');
            }}
        >
            Previous Page
        </Link>
        <Link
            href="/page3"
            className="mt-8 bg-white px-4 py-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
            onClick={() => {
            setCurrentPage('index');
            setColor('bg-blue-300');
            }}
        >
            Next Page
        </Link>
       </div>
    </div>
  );
};

export default Page2;
