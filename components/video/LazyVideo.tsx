'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LazyVideoProps {
  videoSrc: string; // URL or path to the local video
  posterSrc: string; // URL or path to the thumbnail image
  width?: string;
  height?: string;
  className?: string;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  videoSrc,
  posterSrc,
  width = '560',
  height = '315',
  className = '',
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleClick = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div
      className={`${className} relative cursor-pointer`}
      style={{ width, height }}
      onClick={handleClick}
    >
      {isVideoLoaded ? (
        <video
          width={width}
          height={height}
          controls
          autoPlay
          className=""
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="relative">
          {/* Video Poster Image (Placeholder) */}
          <Image
            src={posterSrc}
            alt="Video thumbnail"
            width={560} // Set the width of the poster
            height={315} // Set the height of the poster
            style={{ height: '100%', objectFit: 'cover' }}
            className="w-full h-full object-cover"
          />
          {/* Play Button (Centered) */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              padding: '10px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="48px"
              height="48px"
            >
              <path d="M10 8.64v6.72L15.27 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
