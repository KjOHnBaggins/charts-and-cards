import { useContext, useEffect, lazy, Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";
import Breadcrumb from "../../src/components/Common/Breadcrumb";
import Github from "./Github";
import CountryCard from "./CountryCard";
import { ThemeContext } from "../../src/context/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Population = lazy(() => import("./Population"));
const PopulationByAgesPie = lazy(() => import("./PopulationByAgesPie"));
const EmploymentChart = lazy(() => import("./EmploymentChart"));
const UnemploymentChart = lazy(() => import("./UnemploymentChart"));
const About = lazy(() => import("./About"));

const Dashboard = ({ githubref, chartsref, aboutref }) => {
  const [{ dark }, toggleDark] = useContext(ThemeContext);
  const { countryCode } = useParams();

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

            <Suspense fallback={<div>Loading Population Demographic...</div>}>
              <PopulationByAgesPie countryCode={countryCode} />
            </Suspense>
          </Col>
        </Row>
        <Card className="mt-3 mb-5">
          <Suspense fallback={<div>Loading Population Chart...</div>}>
            <Population
              ref={chartsref}
              dark={dark}
              dataColors={["#a855f7", "#3258f2", "#a0eade"]}
              countryCode={countryCode}
            />
          </Suspense>
        </Card>
        <Suspense fallback={<div>Loading Unemployment Chart...</div>}>
          <UnemploymentChart countryCode={countryCode} />
        </Suspense>
        <Suspense fallback={<div>Loading Employment Chart...</div>}>
          <EmploymentChart countryCode={countryCode} />
        </Suspense>
        <About ref={aboutref} />
      </Container>
    </div>
  );
};

export default Dashboard;
