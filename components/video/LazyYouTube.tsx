'use client'

import Image from 'next/image';
import { useState } from 'react';

interface LazyYouTubeProps {
  videoId: string;
  width?: string;
  height?: string;
  className?: string;
}

const LazyYouTube: React.FC<LazyYouTubeProps> = ({
  videoId,
  width = '560',
  height = '315',
  className = '',
}) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleClick = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div
      className={`${className} relative cursor-pointer`}
      style={{ width, height }}
      onClick={handleClick}
    >
      {isIframeLoaded ? (
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} // autoplay when iframe is loaded
          title="YouTube video player"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div className="relative">
          {/* YouTube Thumbnail */}
          <Image
  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
  alt="YouTube video thumbnail"
  width={560}  // set the width you need
  height={315} // set the height you need
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

export default LazyYouTube;
