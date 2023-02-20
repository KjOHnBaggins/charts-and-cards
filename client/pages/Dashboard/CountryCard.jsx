import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, gql } from "@apollo/client";

const CountryCard = ({ countryCode }) => {
  const COUNTRY = gql`
    query CountryInfo($countryCode: String!) {
      countryInfo(id: $countryCode) {
        gdp {
          value
        }
        internetUsage {
          value
        }
        militaryExpense {
          value
        }
        lifeExpectancy {
          value
        }
      }
      country(id: $countryCode) {
        latitude
        longitude
        name
        region {
          value
        }
        capitalCity
      }
    }
  `;
  const { loading, error, data } = useQuery(COUNTRY, {
    variables: { countryCode },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-4 h2">{data.country.name}</CardTitle>
          <div className="text-center">
            <div className="mb-4">
              <FontAwesomeIcon
                icon="fa-solid fa-circle-info"
                className="fa-3x"
              />
            </div>
          </div>
          <div className="table-responsive mt-4">
            <table className="table align-middle table-nowrap">
              <tbody>
                <tr>
                  <td> Region </td>
                  <td>{data.country.region.value}</td>
                </tr>
                <tr>
                  <td>Capital City</td>
                  <td>
                    <h4>{data.country.capitalCity}</h4>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Coodinates</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {data.country.latitude} °N, {data.country.longitude} °W
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">GDP</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      <b>$</b>{" "}
                      {(data.countryInfo.gdp.value[0] / 1000000000000).toFixed(
                        2
                      )}{" "}
                      Trillion
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Military Expense</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      <b>$</b>{" "}
                      {(
                        data.countryInfo.militaryExpense.value[0] / 1000000000
                      ).toFixed(2)}{" "}
                      Billion
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Life Expectancy</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      Avg.{" "}
                      <b>
                        {data.countryInfo.lifeExpectancy.value[0].toFixed(2)}
                      </b>{" "}
                      Years
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Internet Usage</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {data.countryInfo.internetUsage.value[0].toFixed(2)}% of
                      Population
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CountryCard;
