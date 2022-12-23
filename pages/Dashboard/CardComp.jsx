import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { fetchPopulationByAges } from "../../src/data";

const CardComp = ({ country, countryCode }) => {
  const [populationByAges, setPopulationByAges] = useState([]);
  useEffect(() => {
    fetchPopulationByAges(countryCode).then(
      ({ child, teenage, adult, elderly }) => {
        setPopulationByAges([
          !child[1][5].value
            ? "Data doesnt exist"
            : parseFloat(child[1][5].value?.toFixed(3)),
          !teenage[1][5].value
            ? "Data doesnt exist"
            : parseFloat(teenage[1][5].value?.toFixed(3)),
          !adult[1][5].value
            ? "Data doesnt exist"
            : parseFloat(adult[1][5].value?.toFixed(3)),
          !elderly[1][5].value
            ? "Data doesnt exist"
            : parseFloat(elderly[1][5].value?.toFixed(3)),
        ]);
      }
    );
  }, [countryCode]);

  const options = {
    series: populationByAges,
    chartOptions: {
      labels: ["Age 0-14", "Age 15-24", "Age 25-64", "Age 65 and higher"],
    },
  };
  return (
    <div className="my-5 text-left">
      <p className="fw-bold mx-4">
        {country ? country[0].name : "Loading"} Population by Ages
      </p>
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
