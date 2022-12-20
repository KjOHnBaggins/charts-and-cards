import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { fetchCountryInfo } from "../../src/data";
const CityRankings = () => {
  const [capitalCity, setCapitalCity] = useState(null);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    fetchCountryInfo("us").then(({ country }) => {
      setCapitalCity(country[1][0]?.capitalCity);
      setRegion(country[1][0]?.region.value);
    });
  }, []);
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Region and Capital City</CardTitle>
          <div className="text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </div>
            <h3>{capitalCity}</h3>
            <p>{region}</p>
          </div>
          <div className="table-responsive mt-4">
            <table className="table align-middle table-nowrap">
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Seattle</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">1,456</p>
                  </td>
                  <td>
                    <Progress
                      value="94"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Houstan</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">1,080</p>
                  </td>
                  <td>
                    <Progress
                      value="83"
                      color="secondary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">San Francisco</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">1,112</p>
                  </td>
                  <td>
                    <Progress
                      value="70"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
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

export default CityRankings;
