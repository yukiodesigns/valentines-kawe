// components/MusicPlayer.js
'use client';
import { useEffect, useState } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio('/music/Keshi - UNDERSTAND.mp3 ');

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <button
      className="absolute top-4 right-4 bg-gray-800 px-4 py-2 rounded-lg text-white"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      {isPlaying ? 'Pause Music' : 'Play Music'}
    </button>
  );
};

export default MusicPlayer;
