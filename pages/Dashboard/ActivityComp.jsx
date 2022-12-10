import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivityComp = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-5">Activity</CardTitle>
          <ul className="verti-timeline list-unstyled">
            <li className="event-list">
              <div className="event-timeline-icon">
                <FontAwesomeIcon
                  icon="fa-solid fa-dice-one"
                  style={{ color: "#3258f2" }}
                />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">1 Jan </h5>
                </div>
                <div className="flex-grow">
                  <div className="">Release of an Alpha Version</div>
                </div>
              </div>
            </li>
            <li className="event-list">
              <div className="event-timeline-icon">
                <FontAwesomeIcon
                  icon="fa-solid fa-users-line"
                  style={{ color: "#3f2545b" }}
                />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">13 Feb </h5>
                </div>
                <div className="flex-grow">
                  <div className="">
                    Bug fixes and Beta release to a small group of users from
                    testing... <Link to="#">Read More</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="event-list">
              <div className="event-timeline-icon">
                <FontAwesomeIcon
                  icon="fa-solid fa-money-bill-trend-up"
                  style={{ color: "#a93f55" }}
                />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">20 March </h5>
                </div>
                <div className="flex-grow">
                  <div className="">Pre-sedd funding is complete</div>
                </div>
              </div>
            </li>
            <li className="event-list">
              <div className="event-timeline-icon">
                <FontAwesomeIcon
                  icon="fa-solid fa-person-through-window"
                  style={{ color: "#00a9a5" }}
                />
              </div>
              <div className="flex-shrink-0 d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">12 May </h5>
                </div>
                <div className="flex-grow">
                  <div className="">Product market fit found</div>
                </div>
              </div>
            </li>
          </ul>
          <div className="text-center mt-4">
            <Link to="" className="btn btn-primary btn-sm btn-text">
              View More <i className="mdi mdi-arrow-right ms-1"></i>
            </Link>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ActivityComp;
