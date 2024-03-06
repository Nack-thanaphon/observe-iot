import { Box, Divider, Typography } from "@mui/material";
import VideoSteam from "../component/VideoSteam";
import LineChart from "../component/LineChart";

function Home() {
  return (
    <Box className="lg:flex justify-between  backdrop-blur-xl bg-white/30 p-3 border-sm rounded-lg">
      <Box>
        <Typography fontSize={{ sm: 10, lg: 28 }} fontWeight={700}>
          PLANT 3
        </Typography>
        <Typography fontSize={{ sm: 10, lg: 28 }}>
          <i className="ri-map-pin-fill text-red-500"></i>
          อำเภอเมือง,กรุงเทพมหานคร
        </Typography>
        <Divider />
        <Box marginY={2}>
          {/* <Typography fontSize={16} fontWeight={700} color={"white"} marginBottom={1}>
            รายละเอียด
          </Typography> */}
          <Typography fontSize={14}>Owner :</Typography>
          <Typography fontSize={20}>Gunja Gold </Typography>
          <Typography fontSize={14}>ขนาดแผลงปลูก :</Typography>
          <Typography fontSize={20}>100 ตารางวา </Typography>
          <Typography fontSize={14}>สถานะ :</Typography>
          <Typography fontSize={30}>สุขภาพดีเยี่ยม </Typography>
          <Typography fontSize={14}>ระยะเวลาแปลงปลูก :</Typography>
          <Typography fontSize={30}>30 วัน </Typography>
        </Box>
        <Box>
          <LineChart />
        </Box>
      </Box>
      <Box className="sm:w-1/2 mt-3">
        <VideoSteam />
      </Box>
    </Box>
  );
}

export default Home;
