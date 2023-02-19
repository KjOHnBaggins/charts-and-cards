import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery, gql } from "@apollo/client";

const CountryCard = ({ countryCode }) => {
  const COUNTRY = gql`
    query CountryInfo($countryCode: String!) {
      countryInfo(id: $countryCode) {
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
        region {
          value
        }
        name
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
          <CardTitle className="mb-4 h2">Country Info</CardTitle>
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
                    <p className="mb-0">Internet Usage</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {data.countryInfo.internetUsage.value[0]}%
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Military Expense</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {data.countryInfo.militaryExpense.value[0]} $
                    </p>
                  </td>
                  {/* <td>
                    <Progress
                      value={
                        malePopulationSeries
                          ? Math.round(
                              (malePopulationSeries[0]?.value /
                                populationSeries[0]?.value) *
                                100
                            )
                          : 0
                      }
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td> */}
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Life Expectancy</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {data.countryInfo.lifeExpectancy.value[0]} yrs
                    </p>
                  </td>
                  {/* <td>
                    <Progress
                      value={
                        femalePopulationSeries
                          ? Math.round(
                              (femalePopulationSeries[0]?.value /
                                populationSeries[0]?.value) *
                                100
                            )
                          : 0
                      }
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td> */}
                </tr>
                {/* <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Individuals using internet</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {internetUsage ? internetUsage.toFixed(2) : 0}%
                    </p>
                  </td>
                  <td>
                    <Progress
                      value={`${internetUsage?.toFixed(2)}`}
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CountryCard;
