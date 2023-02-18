import { forwardRef } from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery, gql } from "@apollo/client";

const EmploymentChart = ({ dataColor, countryCode }, chartsref) => {
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

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const chartData = {
    name: "take it from the country prop",
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
        show: true,
      },
      zoom: {
        enabled: true,
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
      size: 3,
      hover: {
        size: 7,
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
    <div className="my-5 w-100" ref={chartsref}>
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

export default forwardRef(EmploymentChart);
