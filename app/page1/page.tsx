'use client';
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Page1 = () => {
  const [currentPage, setCurrentPage] = useState('page1');
  const [color, setColor] = useState('bg-yellow-300');

  return (
    <div className={`flex flex-col justify-center items-center h-screen ${color}`}>
      <h1 className="text-4xl text-white">Page 1</h1>
      <p className='mb-20'>Never thought that I'd find
          That the one in my life would be so near
          And now you're here</p>
          <div>
            <img src="/imgs/kawe.jpg" alt="Left Image" className="w-32 h-55" />
          </div>
      <Link href="/page2" className="mt-8 bg-white px-4 py-2 rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-white transition duration-300 ease-in-out"
          onClick={() => {
            setCurrentPage('page2');
            setColor('bg-red-300');
          }}>
          Next Page
      </Link>
    </div>
  );
};

export default Page1;
