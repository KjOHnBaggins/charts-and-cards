import Breadcrumb from "../../src/components/Common/Breadcrumb";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CardComp from "./CardComp";
import MetricsComp from "./MetricsComp";
import ColumnChart from "./ColumnChart";
import ActivityComp from "./ActivityComp";
import AdComp from "./AdComp";
import CityRankings from "./CityRankings";
import { fetchInternetUsage, fetchGDP } from "../../src/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [internetUsage, setInternetUsage] = useState();
  const [gdp, setGdp] = useState();
  useEffect(() => {
    fetchInternetUsage("us").then(({ internetUsage }) => {
      setInternetUsage(internetUsage[1][1].value);
    });
    fetchGDP("us").then(({ gdp }) => {
      setGdp(gdp[1][1].value);
    });
  }, []);

  const reports = [
    {
      title: "GDP",
      iconClass: "fa-globe",
      description: `${(gdp / Math.pow(10, 12))?.toFixed(4)} trillion dollars`,
      percent: "+1.2",
    },
    {
      title: "Individuals using internet (% of population)",
      iconClass: "fa-sack-dollar",
      description: `${internetUsage?.toFixed(2)}%`,
      percent: "-5",
    },
  ];

  return (
    <>
      <Container>
        <Breadcrumb title="Admin" breadcrumbItem="Dashboard" />
        <Row>
          <Col xl="4">
            <CardComp />
            <MetricsComp />
          </Col>
          <Col xl="8">
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
              <Col xs="12">
                <Card>
                  <ColumnChart dataColors={["#a855f7", "#3258f2", "#a0eade"]} />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <AdComp />
          </Col>
          <Col xl="4">
            <ActivityComp />
          </Col>
          <Col xl="4">
            <CityRankings />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
