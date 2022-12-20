import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { fetchEmploymentData } from "../../src/data";

const MetricsComp = ({ dataColor }) => {
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
    fetchEmploymentData("us").then(
      ({ unemployment, employment, maleEmployment, femaleEmployment }) => {
        setUnemploymentSeries(unemployment[1]);
        setEmploymentSeries(employment[1]);
        setMaleEmploymentSeries(maleEmployment[1]);
        setFemaleEmploymentSeries(femaleEmployment[1]);
      }
    );
  }, []);

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
  // console.log(unemploymentSeries);
  // console.log(employmentSeries);
  // console.log(maleEmploymentSeries);
  // console.log(femaleEmploymentSeries);

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

export default MetricsComp;

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
