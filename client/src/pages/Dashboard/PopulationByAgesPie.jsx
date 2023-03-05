import ReactApexChart from "react-apexcharts";
import { useQuery, gql } from "@apollo/client";

const PopulationByAgesPie = ({ countryCode }) => {
  const POPULATIONBYAGES = gql`
    query PopulationByAges($countryCode: String!) {
      populationByAges(id: $countryCode) {
        child {
          date
          value
        }
        teenage {
          date
          value
        }
        adult {
          date
          value
        }
        elderly {
          date
          value
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(POPULATIONBYAGES, {
    variables: { countryCode },
  });

  if (loading) return "Loading Population Demographic...";
  const options = {
    series: [
      [parseFloat(data?.populationByAges.child.value).toFixed(2)],
      [parseFloat(data?.populationByAges.teenage.value).toFixed(2)],
      [parseFloat(data?.populationByAges.adult.value).toFixed(2)],
      [parseFloat(data?.populationByAges.elderly.value).toFixed(2)],
    ],

    chartOptions: {
      labels: ["Age 0-14", "Age 15-24", "Age 25-64", "Age 65 and higher"],
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.85,
      },
    },
  };
  return (
    <div className="my-5 text-left">
      <p className="fw-bold mx-4">
        {error ? "Currently Unavailable..." : "Population by Ages ( Updated )"}
      </p>
      <ReactApexChart
        type="polarArea"
        options={options.chartOptions}
        series={options.series}
        height="300"
        className="apex-charts"
      />
    </div>
  );
};
export default PopulationByAgesPie;
