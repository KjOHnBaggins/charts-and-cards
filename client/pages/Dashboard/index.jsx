import { useContext, useState } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Breadcrumb from "../../src/components/Common/Breadcrumb";
import Population from "./Population";
import PopulationByAgesPie from "./PopulationByAgesPie";
import EmploymentChart from "./EmploymentChart";
import UnemploymentChart from "./UnemploymentChart";
import About from "./About";
import Github from "./Github";
import CountryCard from "./CountryCard";
import { ThemeContext } from "../../src/context/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = ({ countryCode, githubref, chartsref, aboutref }) => {
  const [{ dark }, toggleDark] = useContext(ThemeContext);
  return (
    <div>
      <Container>
        <Breadcrumb title="Admin" breadcrumbItem={"Search Results:"} />
        <Row className="gx-5">
          <Col xl="4">
            <CountryCard countryCode={countryCode} />
          </Col>
          <Col xl="8">
            <Github ref={githubref} />
            <PopulationByAgesPie countryCode={countryCode} />
          </Col>
        </Row>
        <Card className="mt-3 mb-5">
          <Population
            ref={chartsref}
            dark={dark}
            dataColors={["#a855f7", "#3258f2", "#a0eade"]}
            countryCode={countryCode}
          />
        </Card>
        <UnemploymentChart countryCode={countryCode} />
        <EmploymentChart countryCode={countryCode} />
        <About ref={aboutref} />
      </Container>
    </div>
  );
};

export default Dashboard;
