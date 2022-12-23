import { Link } from "react-router-dom";
import { Row, Col, BreadcrumbItem } from "reactstrap";

const Breadcrumb = ({ title, breadcrumbItem }) => {
  return (
    <Row className="my-3">
      <Col xs="12">
        <div className="page-title d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-2 font-size-19">{breadcrumbItem}</h4>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Link to="#">{title}</Link>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Link to="#">Authorized</Link>
              </BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Breadcrumb;
