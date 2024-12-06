"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const VideoBackground: React.FC = () => {
  const { theme } = useTheme(); // Get the current theme
  const [videoSrc, setVideoSrc] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Update video source based on the theme
    const newVideoSrc = theme === "dark" ? "/video/orb.webm" : "/video/orb-w.webm";
    setVideoSrc(newVideoSrc);
    setVideoLoaded(false); // Reset loading state

    // Preload the video
    const video = document.createElement("video");
    video.src = newVideoSrc;
    video.oncanplaythrough = () => setVideoLoaded(true);

    return () => {
      video.oncanplaythrough = null;
    };
  }, [theme]); // Dependency on `theme`

  return (
    <div className="footer-bg">
      {videoLoaded && (
        <video autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/webm" />
        </video>
      )}
    </div>
  );
};

export default VideoBackground;
