import React, { forwardRef, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { fetchEmploymentData } from "../../src/data";

const MetricsComp = ({ dataColor, countryCode }, chartsref) => {
  const [unemploymentSeries, setUnemploymentSeries] = useState([]);
  const [employmentSeries, setEmploymentSeries] = useState([]);
  const [maleEmploymentSeries, setMaleEmploymentSeries] = useState([]);
  const [femaleEmploymentSeries, setFemaleEmploymentSeries] = useState([]);

  const chartData = {
    name: unemploymentSeries[0]?.country?.value,
    timeline: unemploymentSeries
      .map((data) => data.date)
      .reverse()
      .slice(18),
    unemployment: unemploymentSeries
      .map((data) => (data.value ? Math.round(data.value * 100) / 100 : null))
      .reverse()
      .slice(18),
    employment: employmentSeries
      .map((data) => (data.value ? Math.round(data.value * 100) / 100 : null))
      .reverse(),
    maleEmployment: maleEmploymentSeries
      .map((data) => (data.value ? Math.round(data.value * 100) / 100 : null))
      .reverse(),

    femaleEmployment: femaleEmploymentSeries
      .map((data) => (data.value ? Math.round(data.value * 100) / 100 : null))
      .reverse(),
  };

  useEffect(() => {
    fetchEmploymentData(countryCode).then(
      ({ unemployment, employment, maleEmployment, femaleEmployment }) => {
        setUnemploymentSeries(unemployment[1]);
        setEmploymentSeries(employment[1]);
        setMaleEmploymentSeries(maleEmployment[1]);
        setFemaleEmploymentSeries(femaleEmployment[1]);
      }
    );
  }, [countryCode]);

  const dataLines = [
    {
      name: `Unemployment Total`,
      data: chartData.unemployment,
    },
    {
      name: `Employment Total`,
      data: chartData.employment,
    },
    {
      name: `Male Employment`,
      data: chartData.maleEmployment,
    },
    {
      name: `Female Employment`,
      data: chartData.femaleEmployment,
    },
  ];

  const options = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      dataLabels: {
        enabled: false,
      },
    },
    title: {
      text: `${chartData.name} labour statistics`,
      align: "left",
    },
    markers: {
      size: 5,
      hover: {
        size: 9,
      },
    },
    tooltip: {
      intersect: true,
      shared: false,
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
      {
        opposite: true,
        title: {
          text: "Employment",
        },
        seriesName: "Employment",
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
    <div className="my-5" ref={chartsref}>
      <ReactApexChart
        type="area"
        options={options}
        series={dataLines}
        height="420"
        className="apex-charts"
      />
    </div>
  );
};

export default forwardRef(MetricsComp);
