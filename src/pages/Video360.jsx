import 'aframe';
import { useEffect, useRef, useState } from 'react';

const Video360 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleInteraction = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = true;
      video.playsInline = true;

      video.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.warn('Video play failed:', err);
        });

      containerRef.current?.removeEventListener('click', handleInteraction);
    };

    containerRef.current?.addEventListener('click', handleInteraction, {
      once: true,
    });

    return () => {
      containerRef.current?.removeEventListener('click', handleInteraction);
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const enterFullscreen = () => {
    if (containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen();
    } else if (containerRef.current?.webkitRequestFullscreen) {
      containerRef.current.webkitRequestFullscreen(); // Safari
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] border border-gray-400 rounded-md overflow-hidden"
    >
      {/* Overlay before user interaction */}
      {!hasInteracted && (
        <div className="absolute inset-0 z-20 bg-black bg-opacity-70 flex items-center justify-center text-white text-xl font-semibold cursor-pointer">
          Tap to Start 360 Video
        </div>
      )}

      {/* Controls */}
      {hasInteracted && (
        <div className="absolute bottom-4 right-4 z-10 flex gap-3">
          <button
            onClick={handlePlayPause}
            className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-200"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={enterFullscreen}
            className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-200"
          >
            Fullscreen
          </button>
        </div>
      )}

      {/* A-Frame Scene */}
      <a-scene embedded className="w-full h-full">
        <a-assets>
          <video
            id="vid"
            ref={videoRef}
            loop
            muted
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            src="/Glo1.mp4"
          ></video>
        </a-assets>

        <a-videosphere src="#vid" crossOrigin="anonymous"></a-videosphere>
        <a-entity camera look-controls wasd-controls position="0 1.6 0"></a-entity>
      </a-scene>
    </div>
  );
};

export default Video360;
