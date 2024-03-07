import { Box, Divider, Typography } from "@mui/material";
import VideoSteam from "../component/VideoSteam";
import LineChart from "../component/LineChart";

function Mobile() {
  return (
    <Box className="lg:flex justify-between  backdrop-blur-xl bg-white/30 p-3 border-sm rounded-lg">
      <Box className="lg:ml-2 mb-2">
        <Box className="mb-3">
          <Typography fontSize={{ sm: 22, lg: 28 }} fontWeight={700}>
            PLANT 3
          </Typography>
          <Typography fontSize={{ sm: 10, lg: 20 }}>
            <i className="ri-map-pin-fill text-red-500 mr-2"></i>
            เขตบางกอกน้อย,กรุงเทพมหานคร
          </Typography>
        </Box>
        <VideoSteam />
      </Box>
      <Box className="lg:w-1/3">
        {/* <Divider /> */}
        <Box marginY={2}>
          {/* <Typography fontSize={16} fontWeight={700} color={"white"} marginBottom={1}>
            รายละเอียด
          </Typography> */}
          <Typography fontSize={14}>Owner :</Typography>
          <Typography fontSize={20}>My Emeralad Gold </Typography>
          <Typography fontSize={14}>ขนาดแผลงปลูก :</Typography>
          <Typography fontSize={20}>5 ไร่ </Typography>
          <Typography fontSize={14}>สถานะ :</Typography>
          <Typography fontSize={30}>สุขภาพดีเยี่ยม </Typography>
          <Typography fontSize={14}>ระยะเวลาแปลงปลูก :</Typography>
          <Typography fontSize={20}>13/01/2567 - Now (30 วัน) </Typography>
        </Box>
        <Box className="backdrop-blur-xl bg-white/30 rounded-lg m-0 p-0 mb-3">
          <LineChart />
        </Box>
        <Box
          // bgcolor={"white"}
          borderRadius={3}
          paddingY={3}
          marginBottom={{ sm: 0, lg: 0 }}
        >
          <Typography fontSize={14}>ผู้รับผิดชอบ :</Typography>
          <Typography fontSize={20}>ธนพล กัลปพฤกษ์</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Mobile;
