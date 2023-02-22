import React, { forwardRef, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery, gql } from "@apollo/client";

const UnemploymentChart = ({ dataColor, countryCode }, chartsref) => {
  const UNEMPLOYMENT = gql`
    query Unemployment($countryCode: String!) {
      unemployment(id: $countryCode) {
        unemployment {
          date
          value
        }
        maleUnemployment {
          date
          value
        }
        femaleUnemployment {
          date
          value
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(UNEMPLOYMENT, {
    variables: { countryCode },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const chartData = {
    name: "Unemployment, total % of labor force",
    timeline: data.unemployment.unemployment.date,
    unemployment: data.unemployment.unemployment.value.map((value) =>
      value ? Math.round(value * 10) / 10 : null
    ),
    maleUnemployment: data.unemployment.maleUnemployment.value.map((value) =>
      value ? Math.round(value * 10) / 10 : null
    ),

    femaleUnemployment: data.unemployment.femaleUnemployment.value.map(
      (value) => (value ? Math.round(value * 10) / 10 : null)
    ),
  };

  const dataLines = [
    {
      name: `Unemployment Total`,
      data: chartData.unemployment,
    },
    {
      name: `Male Unemployment`,
      data: chartData.maleUnemployment,
    },
    {
      name: `Female Unemployment`,
      data: chartData.femaleUnemployment,
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: true,
      },
      stroke: {
        curve: "smooth",
      },
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: `${chartData.name}`,
      align: "left",
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
    },
    tooltip: {
      intersect: false,
      shared: true,
    },
    xaxis: {
      type: "datetime",
      categories: chartData.timeline,
    },
    yaxis: [
      {
        title: {
          text: "Unemployment",
        },
        seriesName: "Unemployment",
      },
    ],
    annotations: {
      xaxis: [
        {
          x: chartData.timeline[18],
          strokeDashArray: 0,
          borderColor: "#775DD0",
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "2008 Financial Crisis",
          },
        },
      ],
    },
  };
  return (
    <div className="pt-3 mb-5 w-100" ref={chartsref}>
      <ReactApexChart
        type="area"
        options={options}
        series={dataLines}
        height="420"
        className="apex-charts"
      />
      <p className="text-center pt-3 px-3">
        Unemployment refers to the share of the labor force that is without work
        but available for and seeking employment.
      </p>
    </div>
  );
};

export default forwardRef(UnemploymentChart);
