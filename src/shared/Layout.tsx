// src/components/Layout.tsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Layout: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Box margin={{ xs: 0, lg: 10 }} rounded-lg padding={{ xs: 0.8, lg: 5 }}>
        <Box marginY={2}>
          <Typography fontSize={{smart:40}} textAlign={"start"}>
            วันที่ 12 ธันวาคม พ.ศ.2567
          </Typography>
          <Typography fontSize={{smart:30}} textAlign={"start"}>
            เวลา {currentDate.toLocaleTimeString()}
          </Typography>
        </Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
