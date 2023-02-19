import Breadcrumb from "../../src/components/Common/Breadcrumb";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Population from "./Population";
import PopulationByAgesPie from "./PopulationByAgesPie";
import EmploymentChart from "./EmploymentChart";
import UnemploymentChart from "./UnemploymentChart";
import ActivityComp from "./ActivityComp";
import AdComp from "./AdComp";
import CountryCard from "./CountryCard";
import { ThemeContext } from "../../src/context/theme";
import { fetchGDP, fetchCountryInfo } from "../../src/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext, useRef, forwardRef } from "react";
import { useQuery, gql } from "@apollo/client";

const Dashboard = ({ countryCode, githubref, chartsref, aboutref }) => {
  const [{ dark }, toggleDark] = useContext(ThemeContext);

  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountryInfo(countryCode).then(({ country }) => {
      setCountry(country[1]);
    });
  }, [countryCode]);

  const COUNTRYINFO = gql`
    query CountryInfo($countryCode: String!) {
      countryInfo(id: $countryCode) {
        gdp {
          value
        }
      }
      country(id: $countryCode) {
        latitude
        longitude
      }
    }
  `;
  const { loading, error, data } = useQuery(COUNTRYINFO, {
    variables: { countryCode },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const reports = [
    {
      title: "GDP",
      iconClass: "fa-sack-dollar",
      description: data.countryInfo.gdp.value[0],
      percent: "+1.2",
    },
    {
      title: "Coordinates (lat and long)",
      iconClass: "fa-location-dot",
      description: `${data.country.latitude} ${data.country.longitude}`,
      percent: "-5",
    },
  ];

  return (
    <div>
      <Container>
        <Breadcrumb
          title="Admin"
          breadcrumbItem={country ? "Search results" : "Not Found"}
        />
        <Row className="gx-5">
          <Col xl="4">
            <Row>
              <CountryCard countryCode={countryCode} />
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
          </Col>
          <Col xl="8">
            <AdComp ref={githubref} />

            <Card className="my-5">
              <Population
                dark={dark}
                dataColors={["#a855f7", "#3258f2", "#a0eade"]}
                countryCode={countryCode}
              />
            </Card>
            {/* <PopulationByAgesPie country={country} countryCode={countryCode} /> */}
          </Col>
          {/* <UnemploymentChart countryCode={countryCode} ref={chartsref} /> */}
          {/* <EmploymentChart countryCode={countryCode} ref={chartsref} /> */}
        </Row>
        <Row>
          <Col>
            <ActivityComp ref={aboutref} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
