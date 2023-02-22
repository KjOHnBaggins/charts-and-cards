import { forwardRef } from "react";
import ReactApexChart from "react-apexcharts";
import { useQuery, gql } from "@apollo/client";

const Population = ({ dataColor, countryCode }, chartsref) => {
  const POPULATION = gql`
    query Population($countryCode: String!) {
      population(id: $countryCode) {
        totalPopulation {
          date
          value
        }
        malePopulation {
          value
        }
        femalePopulation {
          value
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(POPULATION, {
    variables: { countryCode },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const chartData = {
    name: "Population Growth",
    timeline: Array.from(data.population.totalPopulation.date).reverse(),
    population: data.population.totalPopulation.value
      .map((value) => (value ? Math.floor(value / 1000000) : null))
      .reverse(),
    malePopulation: data.population.malePopulation.value
      .map((value) => (value ? Math.floor(value / 1000000) : null))
      .reverse(),
    femalePopulation: data.population.femalePopulation.value
      .map((value) => (value ? Math.floor(value / 1000000) : null))
      .reverse(),
  };

  const dataLines = [
    {
      name: `Total Population`,
      type: "column",
      data: chartData.population,
    },
    {
      name: `Male Population`,
      type: "area",
      data: chartData.malePopulation,
    },
    {
      name: `Female Population`,
      type: "line",
      data: chartData.femalePopulation,
    },
  ];

  const options = {
    chart: {
      zoom: {
        enabled: true,
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
    dataLabels: {
      enabled: false,
    },
    title: {
      text: `${chartData.name}`,
      align: "left",
      offsetY: 25,
      offsetX: 20,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    subtitle: {
      text: "Million",
      offsetY: 45,
      offsetX: 20,
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
  };
  return (
    <div className="mb-5" ref={chartsref}>
      <ReactApexChart
        type="line"
        options={options}
        series={dataLines}
        height="420"
        className="apex-charts"
      />
      <p className="text-center pt-3 px-4">
        Total population is based on the de facto definition of population,
        which counts all residents regardless of legal status or citizenship.
        The values shown are midyear estimates.
      </p>
    </div>
  );
};

export default forwardRef(Population);
