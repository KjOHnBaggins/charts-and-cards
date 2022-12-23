import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>{new Date().getFullYear()} Demo.</Col>
          <Col className="d-flex justify-content-end">Made with love</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
