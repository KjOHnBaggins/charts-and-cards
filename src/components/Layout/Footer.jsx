import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col md={6}>{new Date().getFullYear()} Demo.</Col>
          <Col md={6}>
            <div className="text-sm-end d-none d-sm-block">Made with love</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
