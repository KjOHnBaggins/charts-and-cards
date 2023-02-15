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

export default ColumnChart;
