import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery, gql } from "@apollo/client";

const PopulationByAgesPie = ({ country, countryCode }) => {
  const POPULATIONBYAGES = gql`
    query PopulationByAges($countryCode: String!) {
      populationByAges(id: $countryCode) {
        child {
          date
          value
        }
        teenage {
          date
          value
        }
        adult {
          date
          value
        }
        elderly {
          date
          value
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(POPULATIONBYAGES, {
    variables: { countryCode },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const options = {
    series: [
      [parseFloat(data.populationByAges.child.value).toFixed(2)],
      [parseFloat(data.populationByAges.teenage.value).toFixed(2)],
      [parseFloat(data.populationByAges.adult.value).toFixed(2)],
      [parseFloat(data.populationByAges.elderly.value).toFixed(2)],
    ],
    chartOptions: {
      labels: ["Age 0-14", "Age 15-24", "Age 25-64", "Age 65 and higher"],
    },
  };

  return (
    <div className="my-5 text-left">
      <p className="fw-bold mx-4">
        take it from the country prop Population by Ages
        {/* {populationByAges?.some((value) => isNaN(value))
          ? " ( Currently Unavailable )"
          : " ( Updated )"} */}
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
export default PopulationByAgesPie;
