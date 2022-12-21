import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const ColumnChart = ({
  dataColor,
  populationSeries,
  malePopulationSeries,
  femalePopulationSeries,
}) => {
  const chartData = {
    name: populationSeries ? populationSeries[0]?.country?.value : null,
    timeline: populationSeries
      ? populationSeries
          .map((data) => data?.date)
          .reverse()
          .slice(18)
      : null,
    population: populationSeries
      ? populationSeries
          .map((data) => (data.value ? Math.floor(data.value / 1000000) : null))
          .reverse()
          .slice(18)
      : null,
    malePopulation: malePopulationSeries
      ? malePopulationSeries
          .map((data) => (data.value ? Math.floor(data.value / 1000000) : null))
          .reverse()
          .slice(18)
      : null,
    femalePopulation: femalePopulationSeries
      ? femalePopulationSeries
          .map((data) => (data.value ? Math.floor(data.value / 1000000) : null))
          .reverse()
          .slice(18)
      : null,
  };

  const dataLines = [
    {
      name: `Total Population`,
      data: chartData.population,
    },
    {
      name: `Male Population`,
      data: chartData.malePopulation,
    },
    {
      name: `Female Population`,
      data: chartData.femalePopulation,
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: `${chartData.name} population`,
      align: "left",
      offsetY: 25,
      offsetX: 20,
    },
    subtitle: {
      text: "Million",
      offsetY: 45,
      offsetX: 20,
    },
    markers: {
      size: 3,
      strokeWidth: 0,
      hover: {
        size: 5,
      },
    },

    xaxis: {
      tooltip: {
        enabled: false,
      },
      categories: chartData.timeline,
    },
  };
  return (
    <div className="">
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

export default ColumnChart;

// annotations: {
//   xaxis: [{
//     x: new Date('23 Nov 2017').getTime(),
//     strokeDashArray: 0,
//     borderColor: '#775DD0',
//     label: {
//       borderColor: '#775DD0',
//       style: {
//         color: '#fff',
//         background: '#775DD0',
//       },
//       text: 'Anno Test',
//     }
//   }, {
//     x: new Date('26 Nov 2017').getTime(),
//     x2: new Date('28 Nov 2017').getTime(),
//     fillColor: '#B3F7CA',
//     opacity: 0.4,
//     label: {
//       borderColor: '#B3F7CA',
//       style: {
//         fontSize: '10px',
//         color: '#fff',
//         background: '#00E396',
//       },
//       offsetY: -10,
//       text: 'X-axis range',
//     }
//   }],
//   points: [{
//     x: new Date('01 Dec 2017').getTime(),
//     y: 8607.55,
//     marker: {
//       size: 8,
//       fillColor: '#fff',
//       strokeColor: 'red',
//       radius: 2,
//       cssClass: 'apexcharts-custom-class'
//     },
//     label: {
//       borderColor: '#FF4560',
//       offsetY: 0,
//       style: {
//         color: '#fff',
//         background: '#FF4560',
//       },

//       text: 'Point Annotation',
//     }
//   }]
// }
