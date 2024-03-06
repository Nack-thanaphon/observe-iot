import MoistureLevelChart from "./MoistureLevelChart";
import { Box } from "@mui/material";
import LiquidLevelChart from "./LiquidLevelChart";
import TemptureLevelChart from "./TemptureLevelChart";

function VideoSteam() {
  return (
    <>
      <video
        style={{
          position: "relative",
          overflow:"hidden",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius:'10px'
        }}
        autoPlay
        loop
        muted
      >
        <source src="public/video.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          padding: "3px",
          
          background:"white",          zIndex: 9999,
        }}
      >
        <LiquidLevelChart />
        <MoistureLevelChart />
        <TemptureLevelChart />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          height: "70px",
         
          zIndex: 9999,
        }}
      >
        {/* <p>Live</p> */}
      </Box>
    </>
  );
}

export default VideoSteam;
