import Breadcrumb from "../../src/components/Common/Breadcrumb";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CardComp from "./CardComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const reports = [
    {
      title: "Orders",
      iconClass: "fa-bag-shopping",
      description: "1,235",
      percent: "+1.2",
    },
    {
      title: "Revenue",
      iconClass: "fa-money-check-dollar",
      description: "$35, 723",
      percent: "-5",
    },
    {
      title: "Sales",
      iconClass: "fa-sack-dollar",
      description: "$160,230",
      percent: "+20",
    },
  ];

  return (
    <>
      <Container>
        <Breadcrumb title="Admin" breadcrumbItem="Dashboard" />
        <Row>
          <Col xl="4">
            <CardComp />
          </Col>
          <Col xl="8">
            <Row>
              {reports.map((report, key) => (
                <Col md="4" key={"_col_" + key}>
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
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
