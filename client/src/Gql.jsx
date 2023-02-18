import { useQuery, gql } from "@apollo/client";

const Country = gql`
  query Country($countryId: String!) {
    country(id: $countryId) {
      name
    }
  }
`;
const CountryInfo = gql`
  query Country($countryId: String!) {
    countryInfo(id: $countryId) {
      value
      date
    }
  }
`;
const Population = gql`
  query Population($countryId: String!) {
    population(id: $countryId) {
      totalPopulation {
        date
        value
      }
    }
  }
`;
const PopulationByAges = gql`
  query Country($countryId: String!) {
    populationByAges(id: $countryId) {
      value
      date
    }
  }
`;
const Unemployment = gql`
  query Country($countryId: String!) {
    unemployment(id: $countryId) {
      value
      date
    }
  }
`;

const countryId = "US";

const Gql = () => {
  const { loading, error, data } = useQuery(Population, {
    variables: { countryId },
  });
  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  // console.log(data.countryInfo);
  return (
    <div className="gql">
      The setting sun, the rising sun
      {/* {data.country.name} */}
      {data.population.totalPopulation.value.map((pop) => (
        <h6>{pop}</h6>
      ))}
      {/* {data.populationByAges.map((pop) => (
        <h6>{pop.value}</h6>
      ))} */}
      {/* {data.countryInfo.map((info) => (
        <h6>{info.value}</h6>
      ))} */}
    </div>
  );
};

export default Gql;
