import Breadcrumb from "../../src/components/Common/Breadcrumb";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Population from "./Population";
import PopulationByAgesPie from "./PopulationByAgesPie";
import EmploymentChart from "./EmploymentChart";
import UnemploymentChart from "./UnemploymentChart";
import About from "./About";
import Github from "./Github";
import CountryCard from "./CountryCard";
import { ThemeContext } from "../../src/context/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";

const Dashboard = ({ countryCode, githubref, chartsref, aboutref }) => {
  const [{ dark }, toggleDark] = useContext(ThemeContext);

  return (
    <div>
      <Container>
        <Breadcrumb title="Admin" breadcrumbItem={"This is the country name"} />
        <Row className="gx-5">
          <Col xl="4">
            {/* <Row> */}
            <CountryCard countryCode={countryCode} />
            {/* </Row> */}
            {/* <Row>
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
            </Row> */}
          </Col>
          <Col xl="8">
            <Github ref={githubref} />
            <PopulationByAgesPie countryCode={countryCode} />
          </Col>
          <Card className="my-5">
            <Population
              dark={dark}
              dataColors={["#a855f7", "#3258f2", "#a0eade"]}
              countryCode={countryCode}
            />
          </Card>
          <UnemploymentChart countryCode={countryCode} ref={chartsref} />
          <EmploymentChart countryCode={countryCode} ref={chartsref} />
        </Row>
        <Row>
          <Col>
            <About ref={aboutref} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
