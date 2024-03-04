import React, { useState, useEffect } from "react";
import database from "../service/firebase-config";

function MoistureLevelChart() {
  const [moistureLevel, setMoistureLevel] = useState(null);

  useEffect(() => {
    // Reference to your database path
    const moistureLevelRef = database.ref("moistureLevel");

    // Listen for changes in the moistureLevel data
    const listener = moistureLevelRef.on("value", (snapshot: int) => {
      setMoistureLevel(snapshot.val());
    });

    // Clean up listener on unmount
    return () => moistureLevelRef.off("value", listener);
  }, []);
  const iconV1 = moistureLevel > 100 ? "↑" : "↓";
  return (
    <div>
      <div className="text-start">
       <small className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Plant A5</small>
      </div>
      <h1>
        Moisture Level:{" "}
        <span
          className={moistureLevel > 100 ? "text-green-500" : "text-red-500"}
        >
          {moistureLevel}
          <span className="ml-4">{iconV1}</span>
        </span>{" "}
      </h1>
    </div>
  );
}

export default MoistureLevelChart;
