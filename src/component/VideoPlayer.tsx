import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoData {
  src: string;
}

const VideoPlayer = ({ src }: VideoData) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  let hls: Hls | undefined;

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // This will run in native HLS support like Safari
        video.src = src;
      } else if (Hls.isSupported()) {
        // This will run in browsers without native HLS support
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        console.error("This is a legacy browser that doesn't support MSE");
      }
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      preload="metadata" // Changed to ensure metadata is loaded for faster start
      autoPlay
      loop
      muted
      playsInline // Added for iOS devices to autoplay inline
      controls
      style={{ width: "100%", objectFit: "cover", borderRadius: "10px" }}
    ></video>
  );
};

export default VideoPlayer;