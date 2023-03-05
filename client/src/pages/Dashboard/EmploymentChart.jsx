import { forwardRef } from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery, gql } from "@apollo/client";

const EmploymentChart = ({ dataColors, countryCode }, chartsref) => {
  const EMPLOYMENT = gql`
    query Employment($countryCode: String!) {
      employment(id: $countryCode) {
        employment {
          date
          value
        }
        maleEmployment {
          date
          value
        }
        femaleEmployment {
          date
          value
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(EMPLOYMENT, {
    variables: { countryCode },
  });

  if (loading) return "Loading Employment Chart...";
  if (error) return `Error! ${error.message}`;

  const chartData = {
    name: "Employment population ratio total %",
    timeline: data.employment.employment.date,
    employment: data.employment.employment.value.map((value) =>
      value ? Math.round(value * 10) / 10 : null
    ),
    maleEmployment: data.employment.maleEmployment.value.map((value) =>
      value ? Math.round(value * 10) / 10 : null
    ),
    femaleEmployment: data.employment.femaleEmployment.value.map((value) =>
      value ? Math.round(value * 10) / 10 : null
    ),
  };
  const dataLines = [
    {
      name: `Employment Total`,
      type: "column",
      data: chartData.employment,
    },
    {
      name: `Male Employment`,
      type: "area",
      data: chartData.maleEmployment,
    },
    {
      name: `Female Employment`,
      type: "line",
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
        enabled: true,
      },
    },
    colors: dataColors,
    dataLabels: {
      enabled: false,
    },
    title: {
      text: `${chartData.name}`,
      align: "left",
    },
    markers: {
      size: 3,
      hover: {
        size: 7,
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
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
          text: "Employment",
        },
        seriesName: "Employment",
      },
    ],
    annotations: {
      position: "front",
      xaxis: [
        {
          x: 0,
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
        type="line"
        options={options}
        series={dataLines}
        height="420"
        className="apex-charts"
      />
      <p className="text-center pt-3 px-3">
        Employment to population ratio is the proportion of a country's
        population that is employed.
      </p>
    </div>
  );
};

export default forwardRef(EmploymentChart);
