"use client";

import { useEffect, useRef, useState } from "react";

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play();

    video.onended = () => {
      setLoaded(true);
      setTimeout(() => {
        onFinish();
      }, 500); // short delay for fade
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-700 ${
        loaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/intro.mp4"
        className="w-full h-full object-cover"
        playsInline
        muted
      />
    </div>
  );
}
