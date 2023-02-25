import { Col, Container, Row } from "reactstrap";

const Footer = ({ scrollToTop }) => {
  return (
    <footer>
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
