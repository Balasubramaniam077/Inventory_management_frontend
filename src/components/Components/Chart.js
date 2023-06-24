
import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(0,0,255)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const PieChart = () => {
  const [chartData, setChartData] = useState(data);

  return (
    <div>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;