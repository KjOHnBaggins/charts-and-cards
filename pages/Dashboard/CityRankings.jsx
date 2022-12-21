import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CityRankings = ({
  country,
  internetUsage,
  populationSeries,
  malePopulationSeries,
  femalePopulationSeries,
}) => {
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
                  <td>{country ? country[0]?.region.value : "Loading"}</td>
                </tr>
                <tr>
                  <td>Capital City</td>
                  <td>
                    <h4>{country ? country[0]?.capitalCity : "Loading"}</h4>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Total Population</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {populationSeries
                        ? Math.floor(
                            populationSeries[0]?.value / Math.pow(10, 6)
                          )
                        : "Loading"}
                      million
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Male Population %</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {malePopulationSeries
                        ? Math.floor(
                            malePopulationSeries[0]?.value / Math.pow(10, 6)
                          )
                        : "Loading"}
                      million
                    </p>
                  </td>
                  <td>
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
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Female Population %</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <p className="mb-0">
                      {femalePopulationSeries
                        ? Math.floor(
                            femalePopulationSeries[0]?.value / Math.pow(10, 6)
                          )
                        : "Loading"}
                      million
                    </p>
                  </td>
                  <td>
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
                  </td>
                </tr>
                <tr>
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
