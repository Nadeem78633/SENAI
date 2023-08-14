import React from "react";
import GaugeChart from "react-gauge-chart";

const Speedometer = () => {
  return (
    <div style={{ height: "58px", width: "150px" }}>
      <GaugeChart
        arcsLength={[0.2, 0.2, 0.2, 0.2, 0.2]}
        colors={["#5c9ce5", "#5c9ce5", "#dcdcdc", "#dcdcdc", "#dcdcdc"]}
        arcPadding={0.02}
        arcWidth={0.15}
      />
    </div>
  );
};

export default Speedometer;
