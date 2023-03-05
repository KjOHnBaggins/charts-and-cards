import { Card, CardBody, CardHeader } from "reactstrap";

const LoadingCard = () => {
  return (
    <Card className="pt-3 mb-5 w-100 loading-chart">
      <CardHeader>Loading Search Data</CardHeader>
      <CardBody className="d-flex justify-content-center align-items-center">
        <p className="text-center">Please Wait...</p>
      </CardBody>
    </Card>
  );
};

export default LoadingCard;
