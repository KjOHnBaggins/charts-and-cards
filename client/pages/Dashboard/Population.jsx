import ReactApexChart from "react-apexcharts";
import { useQuery, gql } from "@apollo/client";

const Population = ({ dataColor, countryCode }) => {
  const POPULATION = gql`
    query Population($countryCode: String!) {
      population(id: $countryCode) {
        totalPopulation {
          date
          value
        }
        malePopulation {
          date
          value
        }
        femalePopulation {
          date
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
    name: "take it from the country prop",
    timeline: data.population.totalPopulation.date,
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
    <div className="my-5">
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

export default Population;
