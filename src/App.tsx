import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import database from "./firebase-config";
import MoistureLevelChart from "./component/MoistureLevelChart";
import VideoSteam from "./component/VideoSteam";

function App() {


  return (
    <>
      <VideoSteam />
    </>
  );
}

export default App;
