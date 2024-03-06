import { useState, useEffect } from "react";
import database from "../service/firebase-config";

function LiquidLevelChart() {
  const [moistureLevel, setMoistureLevel] = useState<number | null>(null);

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
    <div>
      <h1 className="flex justify-between">
        <span className="mr-2">ระดับแสงแดด : </span>
        <span
          className={moistureLevel && moistureLevel > 100 ? "text-green-500" : "text-red-500"}
        >
          {moistureLevel ?? 0}
          <span className="ml-0.3">{iconV1}</span>
        </span>{" "}
      </h1>
    </div>
  );
}

export default LiquidLevelChart;