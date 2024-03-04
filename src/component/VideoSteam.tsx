import React from "react";
import MoistureLevelChart from "./MoistureLevelChart";
import LineChart from "./LineChart";

function VideoSteam() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <video
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay
        loop
        muted
      >
        <source src="public/video.mp4" type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontWeight: "bold",
          fontSize: "2rem",
          zIndex: "99",
          width: "50%",
        }}
      >
        <LineChart />
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Black overlay with 50% opacity
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "15%",
          color: "white",
          fontWeight: "bold",
          fontSize: { sx: "1rem", lg: "3rem" },
        }}
      >
        <MoistureLevelChart />
      </div>
    </div>
  );
}

export default VideoSteam;
