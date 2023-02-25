import { Card, CardBody, CardTitle, Progress } from "reactstrap";
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
  if (error) return `Oops! Please try again.`;
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-4 h2">{data.country.name}</CardTitle>
          <div className="text-center">
            <div className="mb-4">
              <svg
                width="65px"
                height="65px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM10.25 11C10.25 10.4477 10.6977 10 11.25 10H12.75C13.3023 10 13.75 10.4477 13.75 11V18C13.75 18.5523 13.3023 19 12.75 19H11.25C10.6977 19 10.25 18.5523 10.25 18V11ZM14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7Z"
                    fill="#0F110C"
                    className="info-icon"
                  ></path>{" "}
                </g>
              </svg>
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
