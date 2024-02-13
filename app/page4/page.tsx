// pages/page2.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

const Page4 = () => {
  const [currentPage, setCurrentPage] = useState('page4');
  const [color, setColor] = useState('bg-red-300');

  return (
    <div className={`flex flex-col justify-center items-center h-screen ${color}`}>
      <h1 className="text-4xl text-white">Page 4</h1>
      <p className='mb-20'>So I guess that it's time
            I asked you to be mine for all my days
            I hope you'll stay</p>

            <div>
                <img src="/imgs/us4.jpg" alt="Left Image" className="w-32 h-55" />
            </div>
      <div className="flex">
        <Link
            href="/page3"
            className="mt-8 mr-4 bg-white px-4 py-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
            onClick={() => {
            setCurrentPage('index');
            setColor('bg-blue-300');
            }}
        >
            Previous Page
        </Link>
        <Link
            href="/page5"
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

export default Page4;
