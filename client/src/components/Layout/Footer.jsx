import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = ({ scrollToTop }) => {
  return (
    <footer>
      <button className="scroll-to">
        <FontAwesomeIcon
          className="scroll-to__icon"
          icon={`fa-solid fa-circle-arrow-up`}
          onClick={() => {
            scrollToTop();
          }}
        />
      </button>

      <Container fluid>
        <Row>
          <Col>&copy; {new Date().getFullYear()} Charts and Cards</Col>
          <Col className="d-flex justify-content-end">Made with love</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
