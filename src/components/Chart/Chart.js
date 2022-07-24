import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((cur) => cur.value);

  const totalMaxi = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((cur) => (
        <ChartBar
          key={cur.label}
          value={cur.value}
          maxValue={totalMaxi}
          label={cur.label}
        />
      ))}
    </div>
  );
}

export default Chart;
