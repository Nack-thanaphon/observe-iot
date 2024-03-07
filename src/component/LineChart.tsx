import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

function LineChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      if (myChartRef) {
        chartInstance.current = new Chart(myChartRef, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "ความเสถียร",
                data: [86, 67, 91, 76, 85, 94],
                fill: false,
                backgroundColor: "rgb(75, 192, 192)",
                borderColor: "rgba(75, 192, 192, 0.2)",
              },
              {
                label: "ความชื้น",
                data: [60, 70, 80, 90, 100, 110],
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
              },
              {
                label: "บรรยากาศ",
                data: [50, 60, 70, 80, 90, 100],
                fill: false,
                backgroundColor: "rgb(54, 162, 235)",
                borderColor: "rgba(54, 162, 235, 0.2)",
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, []);

  return (
    <canvas

      style={{
        // marginTop:'30px',
        left: "20px",
        width: "100%",
        margin:'0px'

      }}
      ref={chartRef}
    />
  );
}

export default LineChart;
