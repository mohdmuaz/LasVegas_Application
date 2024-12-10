import React, { useRef, useState } from 'react';
import videoBg from '../assets/video/Home_video.mp4';

const Home = () => {
  const videoRef = useRef(null); 
  const [isPaused, setIsPaused] = useState(false); 

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused); 
    }
  };

  return (
    <div className="relative h-screen mt-20">
      {/* Video Section */}
      <video
        ref={videoRef}
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Transparent Pause/Play Symbol */}
      <div className="absolute bottom-5 left-5">
        <button
          onClick={toggleVideoPlayback}
          className="text-white text-3xl hover:scale-110 transition transform"
        >
          {isPaused ? '▶' : '⏸'}
        </button>
      </div>
    </div>
  );
};

export default Home;
