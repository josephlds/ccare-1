'use client'
import React, { useState, useEffect } from "react";

const VideoPlayer = () => {
  const [autoplay, setAutoplay] = useState(false); // Control autoplay state
  const [muted, setMuted] = useState(true); // Default to muted autoplay

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") { // Autoplay only when visible
        // Check browser support for autoplay (consider adding a polyfill if needed)
        if (typeof document.createElement("video").autoplay !== "undefined") {
          setAutoplay(true);
        } else {
          console.warn("Autoplay not supported by your browser.");
        }
      } else {
        setAutoplay(false); // Pause when not visible
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []); // Empty dependency array to run only once

  return (
    <video width="1920" height="1080" controls autoPlay={autoplay} muted={muted}>
      <source src="/_next-video/CUTICLE OIL.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
