import MoistureLevelChart from "./MoistureLevelChart";
import { Box, Stack } from "@mui/material";
import LiquidLevelChart from "./LiquidLevelChart";
import TemptureLevelChart from "./TemptureLevelChart";
import VideoPlayer from "../component/VideoPlayer";

function VideoSteam() {
  const videoSrc:string = "https://contactus.work/uploads/plant.m3u8";

  return (
    <>
      <Box position={"relative"}>
        <Stack
          bgcolor={"white"}
          position={"absolute"}
          whiteSpace={"nowrap"}
          top={10}
          left={10}
          paddingX={3}
          borderRadius={3}
        >
          <span>
            <span className="dot"></span> Live
          </span>
        </Stack>
        <VideoPlayer src={videoSrc} />
      </Box>
      <Box
        display={"grid"}
        gridTemplateColumns={{ sm: "1fr", lg: "1fr 1fr 1fr" }}
        gap={2}
        marginTop={1}
      >
        <LiquidLevelChart />
        <MoistureLevelChart />
        <TemptureLevelChart />
      </Box>
    </>
  );
}

export default VideoSteam;
