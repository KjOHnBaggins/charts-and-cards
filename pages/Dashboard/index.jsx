import Breadcrumb from "../../src/components/Common/Breadcrumb";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CardComp from "./CardComp";
import MetricsComp from "./MetricsComp";
import ColumnChart from "./ColumnChart";
import ActivityComp from "./ActivityComp";
import AdComp from "./AdComp";
import CityRankings from "./CityRankings";
import {
  fetchGDP,
  fetchCountryInfo,
  fetchInternetUsage,
  fetchPopulation,
} from "../../src/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useEffect, useState } from "react";

const Dashboard = ({ countryCode, githubref, chartsref, aboutref }) => {
  const [country, setCountry] = useState(null);
  const [internetUsage, setInternetUsage] = useState(null);
  const [gdp, setGdp] = useState(null);
  const [populationSeries, setPopulationSeries] = useState([]);
  const [malePopulationSeries, setMalePopulationSeries] = useState([]);
  const [femalePopulationSeries, setFemalePopulationSeries] = useState([]);

  useEffect(() => {
    fetchCountryInfo(countryCode).then(({ country }) => {
      setCountry(country[1]);
    });
    fetchGDP(countryCode).then(({ gdp }) => {
      setGdp(gdp[1][1].value);
    });
    fetchInternetUsage(countryCode).then(({ internetUsage }) => {
      setInternetUsage(internetUsage[1][1].value);
    });
    fetchPopulation(countryCode).then(
      ({ population, malePopulation, femalePopulation }) => {
        setPopulationSeries(population[1]);
        setMalePopulationSeries(malePopulation[1]);
        setFemalePopulationSeries(femalePopulation[1]);
      }
    );
  }, [countryCode]);

  const reports = [
    {
      title: "GDP",
      iconClass: "fa-sack-dollar",
      description: gdp
        ? `${(gdp / Math.pow(10, 12))?.toFixed(4)} trillion dollars`
        : "Loading",
      percent: "+1.2",
    },
    {
      title: "Coordinates (lat and long)",
      iconClass: "fa-location-dot",
      description: country
        ? `${country[0].latitude} ${country[0].longitude}`
        : "Loading",
      percent: "-5",
    },
  ];

  return (
    <>
      <Container>
        <Breadcrumb
          title="Admin"
          breadcrumbItem={country ? "Search results" : "Not Found"}
        />
        <Row>
          <Col xl="4">
            <Row>
              <CityRankings
                country={country}
                internetUsage={internetUsage}
                populationSeries={populationSeries}
                malePopulationSeries={malePopulationSeries}
                femalePopulationSeries={femalePopulationSeries}
              />
            </Row>
            <Row>
              {reports.map((report, key) => (
                <Col key={"_col_" + key}>
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-muted fw-medium">{report.title}</p>
                          <h4 className="mb-0">{report.description}</h4>
                        </div>
                        <div className="icon-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                          <span className="icon-container rounded-circle bg-primary">
                            <FontAwesomeIcon
                              icon={`fa-solid ${report.iconClass}`}
                            />
                          </span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row>
              <AdComp ref={githubref} />
            </Row>
          </Col>
          <Col xl="8">
            <MetricsComp countryCode={countryCode} ref={chartsref} />
            <Card className="my-5">
              <ColumnChart
                dataColors={["#a855f7", "#3258f2", "#a0eade"]}
                populationSeries={populationSeries}
                malePopulationSeries={malePopulationSeries}
                femalePopulationSeries={femalePopulationSeries}
              />
            </Card>
            <CardComp country={country} countryCode={countryCode} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ActivityComp ref={aboutref} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
