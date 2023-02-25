import { useContext, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";
import LazyComponent from "../../components/Common/LazyComponent";
import { ThemeContext } from "../../context/theme";
const Breadcrumb = lazy(() => import("../../components/Common/Breadcrumb"));
const Github = lazy(() => import("./Github"));
const CountryCard = lazy(() => import("./CountryCard"));
const Population = lazy(() => import("./Population"));
const PopulationByAgesPie = lazy(() => import("./PopulationByAgesPie"));
const EmploymentChart = lazy(() => import("./EmploymentChart"));
const UnemploymentChart = lazy(() => import("./UnemploymentChart"));
const About = lazy(() => import("./About"));

const Dashboard = ({ githubref, chartsref, aboutref }) => {
  const [{ dark }, toggleDark] = useContext(ThemeContext);
  const { countryCode } = useParams();
  const dataColors = ["#EC4E20", "#F7B538", "#026C7C"];

  return (
    <div>
      <Container>
        <Breadcrumb title="Github Repo" breadcrumbItem={"Search Results:"} />
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
        <LazyComponent>
          <Card className="mt-3 mb-5">
            <Suspense fallback={<div>Loading Population Chart...</div>}>
              <Population
                ref={chartsref}
                dark={dark}
                dataColors={dataColors}
                countryCode={countryCode}
              />
            </Suspense>
          </Card>
          <Suspense fallback={<div>Loading Unemployment Chart...</div>}>
            <UnemploymentChart
              countryCode={countryCode}
              dataColors={["#2F131E", "#FFC857", "#DE3C4B"]}
            />
          </Suspense>
          <Suspense fallback={<div>Loading Employment Chart...</div>}>
            <EmploymentChart
              countryCode={countryCode}
              dataColors={["#DB3A34", "#FFC857", "#084C61"]}
            />
          </Suspense>
        </LazyComponent>
        <About ref={aboutref} />
      </Container>
    </div>
  );
};

export default Dashboard;
