// src/components/Layout.tsx
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Pagination, Typography } from "@mui/material";

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
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box marginY={2}>
            <Typography fontSize={{ smart: 40 }} textAlign={"start"}>
              วันที่ 7 มีนาคม พ.ศ.2567
            </Typography>
            <Typography fontSize={{ smart: 30 }} textAlign={"start"}>
              เวลา {currentDate.toLocaleTimeString()}
            </Typography>
          </Box>
          <Pagination 
          sx={{
            marginY:'auto'
          }}
          
          />
        </Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
