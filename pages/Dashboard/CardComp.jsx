import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { fetchPopulationByAges } from "../../src/data";

const CardComp = () => {
  const [populationByAges, setPopulationByAges] = useState([]);
  useEffect(() => {
    fetchPopulationByAges("us").then(({ child, teenage, adult, elderly }) => {
      setPopulationByAges([
        parseFloat(child[1][2].value?.toFixed(3)),
        parseFloat(teenage[1][2].value?.toFixed(3)),
        parseFloat(adult[1][2].value?.toFixed(3)),
        parseFloat(elderly[1][2].value?.toFixed(3)),
      ]);
    });
  }, []);
  const options = {
    series: populationByAges,
    chartOptions: {
      labels: ["Age 0-14", "Age 15-24", "Age 25-64", "Age 65 and higher"],
    },
  };
  return (
    <div className="">
      <p className="">Us Population by Ages</p>
      <ReactApexChart
        type="polarArea"
        options={options.chartOptions}
        series={options.series}
        height="300"
        className="apex-charts"
      />
    </div>
  );
};
export default CardComp;
