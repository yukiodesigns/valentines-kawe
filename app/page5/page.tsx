// pages/page2.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

const Page5 = () => {
  const [currentPage, setCurrentPage] = useState('page5');
  const [color, setColor] = useState('bg-red-300');

  return (
    <div className={`flex flex-col justify-center items-center h-screen ${color}`}>
      <h1 className="text-4xl text-white ">Page 5</h1>
      <p className="mb-20">I'll admit that I'm scared
        'Cause I've never really cared as much as this
        It's worth the risk
      </p>
       
      <div className="flex justify-between w-full max-w-screen-xl px-4">
        <div>
          <img src="/imgs/us2.jpg" alt="Left Image" className="w-32 h-55" />
        </div>
        <div>
          <img src="/imgs/us3.jpg" alt="Middle Image" className="w-32 h-50" />
        </div>
        <div>
          <img src="/imgs/us4.jpg" alt="Right Image" className="w-32 h-50" />
        </div>
      </div>
      <div className="flex">
        <Link
          href="/page4"
          className="mt-8 mr-4 bg-white px-4 py-2 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
          onClick={() => {
            setCurrentPage('index');
            setColor('bg-blue-300');
          }}
        >
          Previous Page
        </Link>
        <Link
          href="/page6"
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

export default Page5;