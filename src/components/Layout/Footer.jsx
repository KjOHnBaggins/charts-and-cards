import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = ({ scrollWithUseRef, top }, bottom) => {
  const [clicked, setClicked] = useState(false);
  const changeDirection = () => {
    setClicked(!clicked);
  };

  return (
    <footer ref={bottom}>
      <Container fluid>
        <Row>
          <Col>&copy; {new Date().getFullYear()} Charts and Cards</Col>
          <Col className="d-flex justify-content-end">Made with love</Col>
          <button onClick={changeDirection} className="scroll-to-top">
            <FontAwesomeIcon
              icon={`fa-solid fa-circle-arrow-${clicked ? "up" : "down"}`}
              onClick={() => {
                scrollWithUseRef(clicked ? top : bottom);
              }}
            />
          </button>
        </Row>
      </Container>
    </footer>
  );
};

export default forwardRef(Footer);
