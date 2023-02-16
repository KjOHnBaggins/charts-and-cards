import { useQuery, gql } from "@apollo/client";

const Country = gql`
  query Country($countryId: String!) {
    country(id: $countryId) {
      name
    }
  }
`;
const countryId = "US";
const Gql = () => {
  const { loading, error, data } = useQuery(Country, {
    variables: { countryId },
  });
  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  console.log(data);
  return (
    <div className="gql">
      The setting sun, the rising sun
      {data.country.name}
    </div>
  );
};

export default Gql;
