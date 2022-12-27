import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef } from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = ({}, bottom) => {
  return (
    <footer ref={bottom}>
      <Container fluid>
        <Row>
          <Col>&copy; {new Date().getFullYear()} Charts and Cards</Col>
          <Col className="d-flex justify-content-end">Made with love</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default forwardRef(Footer);
