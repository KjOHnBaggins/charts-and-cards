import React from "react";
import { Card, Row, Col } from "reactstrap";
const CardComp = () => {
  return (
    <>
      <Card className="overflow-hidden text-whtie bg-primary border-0 credit-card-container p-3 px-5">
        <Row>
          <Col>
            <div className="">
              <p className="font-weight-normal">Name</p>
              <p className="font-weight-bold">Tony</p>
            </div>
            <div className="pt-1">
              <p className="font-weight-normal">Card Number</p>
              <p className="font-weight-bold">4642 3489 9867</p>
            </div>
            <div className="pt-2 d-flex justify-content-between">
              <div className="">
                <p className="font-weight-normal">Valid</p>
                <p className="font-weight-bold">11/15</p>
              </div>
              <div className="">
                <p className="font-weight-normal">Expiry</p>
                <p className="font-weight-bold">11/15</p>
              </div>
              <div className="">
                <p className="font-weight-normal">CVV</p>
                <p className="font-weight-bold">...</p>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default CardComp;
