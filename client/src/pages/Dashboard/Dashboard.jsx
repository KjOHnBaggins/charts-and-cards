import { useContext, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "reactstrap";
import LazyLoadedComponent from "../../components/Common/LazyLoadedComponent";
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
        <Row className="gx-4">
          <Col xl="4">
            <LazyLoadedComponent>
              <Suspense fallback={<div>Loading...</div>}>
                <CountryCard countryCode={countryCode} />
              </Suspense>
            </LazyLoadedComponent>
          </Col>
          <Col xl="8">
            <Github ref={githubref} />

            <LazyLoadedComponent>
              <Suspense fallback={<div>Loading...</div>}>
                <PopulationByAgesPie countryCode={countryCode} />
              </Suspense>
            </LazyLoadedComponent>
          </Col>
        </Row>
        <LazyLoadedComponent>
          <Card className="mt-3 mb-5">
            <Suspense fallback={<div>Loading...</div>}>
              <Population
                ref={chartsref}
                dark={dark}
                dataColors={dataColors}
                countryCode={countryCode}
              />
            </Suspense>
          </Card>
        </LazyLoadedComponent>
        <LazyLoadedComponent>
          <Suspense fallback={<div>Loading...</div>}>
            <UnemploymentChart
              countryCode={countryCode}
              dataColors={["#2F131E", "#FFC857", "#DE3C4B"]}
            />
          </Suspense>
        </LazyLoadedComponent>
        <LazyLoadedComponent>
          <Suspense fallback={<div>Loading...</div>}>
            <EmploymentChart
              countryCode={countryCode}
              dataColors={["#DB3A34", "#FFC857", "#084C61"]}
            />
          </Suspense>
        </LazyLoadedComponent>
        <LazyLoadedComponent>
          <About ref={aboutref} />
        </LazyLoadedComponent>
      </Container>
    </div>
  );
};

export default Dashboard;
