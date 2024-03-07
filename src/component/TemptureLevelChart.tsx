import  { useState, useEffect } from "react";
import database from "../service/firebase-config";

function TemptureLevelChart() {
  const [moistureLevel, setMoistureLevel] = useState(null);

  useEffect(() => {
    // Reference to your database path
    const moistureLevelRef = database.ref("moistureLevel");

    // Listen for changes in the moistureLevel data
    const listener = moistureLevelRef.on("value", (snapshot) => {
      setMoistureLevel(snapshot.val());
    });

    // Clean up listener on unmount
    return () => moistureLevelRef.off("value", listener);
  }, []);
  const iconV1 = moistureLevel && moistureLevel > 100 ? "↑" : "↓";
  return (
    <div
      style={{
        bottom: "10px",
        padding: "10px",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <h1 className="">
        <span className="mr-2"><i className="ri-sun-line mr-2"></i>ระดับอุณหภูมิ : </span>
        <br />
        <span
          className={
            moistureLevel && moistureLevel > 100
              ? "text-green-500"
              : "text-red-500"
          }
        >
          <div className="text-2xl">
            {moistureLevel ?? 0} <span className="ml-0.3">{iconV1} (30%)</span>
          </div>
        </span>{" "}
      </h1>
    </div>
  );
}

export default TemptureLevelChart;
