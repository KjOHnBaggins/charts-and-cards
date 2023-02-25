import { Container, Row, Col, Card, CardBody } from "reactstrap";

const ForDevs = ({ scrollToTop }) => {
  return (
    <Container>
      <button className="scroll-to">
        <a onClick={scrollToTop}>
          <svg
            width="30px"
            height="30px"
            viewBox="-6.4 -6.4 76.80 76.80"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#001524"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <title />
              <path
                className="cls-1"
                d="M54.51,41.5a6.12,6.12,0,0,1-1.79-.27L32,34.78,11.28,41.23A6,6,0,0,1,7.72,29.77l22.5-7a6,6,0,0,1,3.56,0L44.3,26a2,2,0,1,1-1.19,3.82L32.59,26.59a2,2,0,0,0-1.18,0l-22.5,7a2,2,0,0,0,1.18,3.82l21.32-6.63a2,2,0,0,1,1.18,0l21.32,6.63a2,2,0,0,0,1.18-3.82L53.3,33a2,2,0,0,1,1.19-3.82l1.79.56a6,6,0,0,1,1,11A5.93,5.93,0,0,1,54.51,41.5Z"
              />
            </g>
          </svg>
        </a>
      </button>
      <h1 className="display-3">For Developers</h1>
      <p className="lead my-5">
        This project uses React, Graphql, Bootstrap and SCSS and built with
        Vite. If you like this site, giving a&nbsp;
        <a href="https://github.com/KjOHnBaggins/charts-and-cards">
          star on Github
        </a>
        &nbsp;would be an honor...
      </p>
      <p className="fw-bold mb-5 p-3 text-white invert-card rounded-4">
        The api is from worldbank data help desk.&nbsp;
        <a href="https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information">
          See here
        </a>
      </p>
      <h2 className="display-6 mb-2">Contextual Components</h2>
      <Row>
        <h3 className="h3 my-2">Charts</h3>
        <p className="lead p-4 mb-2">
          The charts are built with&nbsp;
          <a href="https://apexcharts.com/docs/react-charts/">
            React Apex Chart
          </a>
          .
        </p>
        <Col>
          <Card>
            <CardBody>
              <img
                src="/images/population.png"
                className="img-fluid rounded-2 mb-1"
                alt=""
              />
              <p className="lead">Population</p>
              <ul className="list-group list-group-flush rounded-2">
                <li className="list-group-item">
                  Chart type: <span className="fw-bold">area</span>
                </li>
                <li className="list-group-item">
                  <p className="mb-0">Data from 1990 to 2021</p>
                  <ul className="list-group list-group-numbered">
                    <li className="list-group-item">Total population</li>
                    <li className="list-group-item">Male population</li>
                    <li className="list-group-item">Female population</li>
                  </ul>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <img
                src="/images/labour-statistics.png"
                className="img-fluid rounded-2 mb-1"
                alt=""
              />
              <p className="lead">Labour statistics</p>
              <ul className="list-group list-group-flush rounded-2">
                <li className="list-group-item">
                  Chart type: <span className="fw-bold">area</span>
                </li>
                <li className="list-group-item">
                  <p className="mb-0">
                    Data (mostly null recent yrs, exists short time periods)
                  </p>
                  <ul className="list-group list-group-numbered">
                    <li className="list-group-item">Unemployment rate</li>
                    <li className="list-group-item">Employment rate</li>
                    <li className="list-group-item">Male employment rate</li>
                    <li className="list-group-item">Female employment rate</li>
                  </ul>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <img
                src="/images/population-by-ages.png"
                className="img-fluid rounded-2 mb-1"
                alt=""
              />
              <p className="lead">Population By Ages</p>
              <ul className="list-group list-group-flush rounded-2">
                <li className="list-group-item">
                  Chart type: <span className="fw-bold">polararea</span>
                </li>
                <li className="list-group-item">
                  <p className="mb-0">
                    Data (mostly null recent yrs, exists short time periods)
                  </p>
                  <ul className="list-group list-group-numbered">
                    <li className="list-group-item">Ages 0-14</li>
                    <li className="list-group-item">Ages 15-24</li>
                    <li className="list-group-item">Ages 25-64</li>
                    <li className="list-group-item">Ages 65 and above</li>
                  </ul>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <h3 className="h3">Cards</h3>
        <Col>
          <Card>
            <CardBody>
              <img
                src="/images/country-info.png"
                className="img-fluid rounded-2"
                alt=""
              />
              <p className="lead">Country Info</p>
              <ul className="list-group list-group-flush rounded-2">
                <li className="list-group-item">Data</li>
                <li className="list-group-item">
                  <ul className="list-group list-group-numbered">
                    <li className="list-group-item">Region</li>
                    <li className="list-group-item">Capital city</li>
                    <li className="list-group-item">Total population</li>
                    <li className="list-group-item">Male population</li>
                    <li className="list-group-item">Female population</li>
                    <li className="list-group-item">Internet usage</li>
                    <li className="list-group-item">
                      Internet usage % progress bar
                    </li>
                  </ul>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <img
                src="/images/gdp-and-coordinates.png"
                className="img-fluid rounded-2"
                alt=""
              />
              <p className="lead">GDP and Coordinates</p>
              <ul className="list-group list-group-flush rounded-2">
                <li className="list-group-item">Data</li>
                <li className="list-group-item">
                  <ul className="list-group list-group-numbered">
                    <li className="list-group-item">GDP</li>
                    <li className="list-group-item">Coordinates</li>
                  </ul>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <img
                src="/images/github-star.png"
                className="img-fluid rounded-2"
                alt=""
              />
              <p className="lead">Github</p>
              <ul className="list-group list-group-flush rounded-2">
                <li className="list-group-item">Styles</li>
                <li className="list-group-item">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Background: linear-gradient()
                    </li>
                    <li className="list-group-item">icon arrow-right</li>
                  </ul>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <img
                src="/images/about.png"
                className="img-fluid rounded-2"
                alt=""
              />
              <p className="lead">About</p>
              <ul className="list-group list-group-flush rounded-2">
                <li className="list-group-item">Styles</li>
                <li className="list-group-item">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      border-left (activity-line)
                    </li>
                    <li className="list-group-item">
                      position-absolute (icons)
                    </li>
                  </ul>
                </li>
              </ul>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ForDevs;
