import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { fetchFromAPI } from "../../src/data";

const ColumnChart = ({ dataColor }) => {
  const [series, setSeries] = useState([]);
  const [unemploymentSeries, setUnemploymentSeries] = useState([]);
  const [maleEmploymentSeries, setMaleEmploymentSeries] = useState([]);
  const [femaleEmploymentSeries, setFemaleEmploymentSeries] = useState([]);

  const chartData = {
    name: series[0]?.country?.value,
    population: series
      .map((data) => Math.floor(data.value / 1000000))
      .reverse()
      .slice(18),
    timeline: series
      .map((data) => data.date)
      .reverse()
      .slice(18),
    unemployment: unemploymentSeries
      .map((data) => Math.round(data.value * 100) / 100)
      .reverse()
      .slice(18),
    maleEmployment: maleEmploymentSeries
      .map((data) => parseFloat(data.value?.toFixed(3)) * 100)
      .reverse(),

    femaleEmployment: femaleEmploymentSeries
      .map((data) => parseFloat(data.value?.toFixed(3)) * 100)
      .reverse(),
  };

  useEffect(() => {
    fetchFromAPI("us").then(
      ({ data, res, maleEmployment, femaleEmployment }) => {
        setSeries(data[1]);
        setUnemploymentSeries(res[1]);
        setMaleEmploymentSeries(maleEmployment[1]);
        setFemaleEmploymentSeries(femaleEmployment[1]);
      }
    );
  }, []);
  console.log(chartData.maleEmployment);
  console.log(chartData.femaleEmployment);
  // console.log(chartData.population);
  // console.log(series);
  // console.log(unemploymentSeries);
  // console.log(maleEmploymentSeries);
  // console.log(femaleEmploymentSeries);

  const dataLines = [
    // {
    //   name: `pop`,
    //   data: chartData.population,
    // },
    {
      name: `unemploy`,
      data: chartData.unemployment,
    },
    {
      name: `maleemploy`,
      data: chartData.maleEmployment,
    },
    {
      name: `femaleunemploy`,
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
      text: `${chartData.name} population in million`,
      align: "left",
    },
    xaxis: {
      categories: chartData.timeline,
    },
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
            text: "2008 Financial Crisis hits",
          },
        },
      ],
      points: [
        {
          x: chartData.timeline[17],
          y: 300,
          marker: {
            size: 9,
            fillColor: "#fff",
            strokeColor: "red",
            radius: 2,
            // cssClass: "apexcharts-custom-class",
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#FF4560",
              background: "transparent",
            },

            text: "300M",
          },
        },
      ],
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
