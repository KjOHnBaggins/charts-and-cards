import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const Users = () => {
  return (
    <Container>
      <h1 className="display-3">For Developers</h1>
      <p className="lead my-5">
        This project is from a tutorial content of a youtube channel named&nbsp;
        <a href="https://www.youtube.com/channel/UCObrjoZZJSjznfCO5Vx9qUQ/videos">
          webdecoded
        </a>
        . If you like this site, suscribe to the channel on youtube. Giving a
        &nbsp;
        <a href="https://github.com/KjOHnBaggins/react-dashboard">
          star on Github
        </a>
        &nbsp;would be an honor...
      </p>
      <p className="fw-bold mb-5 p-3 text-white invert-card">
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
                className="img-fluid mb-1"
                alt=""
              />
              <p className="lead">Population</p>
              <ul className="list-group list-group-flush">
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
                className="img-fluid mb-1"
                alt=""
              />
              <p className="lead">Labour statistics</p>
              <ul className="list-group list-group-flush">
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
                className="img-fluid mb-1"
                alt=""
              />
              <p className="lead">Population By Ages</p>
              <ul className="list-group list-group-flush">
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
                className="img-fluid"
                alt=""
              />
              <p className="lead">Country Info</p>
              <ul className="list-group list-group-flush">
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
                className="img-fluid"
                alt=""
              />
              <p className="lead">GDP and Coordinates</p>
              <ul className="list-group list-group-flush">
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
              <img src="/images/github-star.png" className="img-fluid" alt="" />
              <p className="lead">Github</p>
              <ul className="list-group list-group-flush">
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
              <img src="/images/about.png" className="img-fluid" alt="" />
              <p className="lead">About</p>
              <ul className="list-group list-group-flush">
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

export default Users;
