import React from "react";
import { Container, Row, Col } from "reactstrap";

const Users = () => {
  return (
    <Container>
      <Row>
        <h2 className="">For developers</h2>
      </Row>
      <Row>
        <div className="">
          This project is from a tutorial content of a youtube channel named
          &nbsp;
          <a href="https://www.youtube.com/channel/UCObrjoZZJSjznfCO5Vx9qUQ/videos">
            webdecoded
          </a>
        </div>
      </Row>
      <Row>
        <div className="">The API</div>
        <div className="">
          <a href="https://datahelpdesk.worldbank.org/knowledgebase/topics/125589-developer-information">
            World Bank Api
          </a>
        </div>
      </Row>
      <Row>
        <div className="">
          If you like this site, please give it a{" "}
          <a href="https://github.com/KjOHnBaggins/react-dashboard">star</a> on
          Github.
        </div>
      </Row>
    </Container>
  );
};

export default Users;
