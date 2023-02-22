import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef } from "react";

const About = ({ props }, aboutref) => {
  return (
    // wrapper div need for ref to work, otherwise react throws an error and refs doesnt work
    <div className="" ref={aboutref}>
      <Card className="px-3">
        <CardBody>
          <CardTitle className="mb-5 fw-bold">
            About this project
            <p className="mt-2">
              This project is created in celebration of ten years anniversary of
              a subreddit called r/dataisbeautiful.
            </p>
          </CardTitle>
          <ul className="verti-timeline list-unstyled">
            <li className="event-list">
              <div className="event-timeline-icon">
                <FontAwesomeIcon
                  icon="fa-solid fa-dice-one"
                  style={{ color: "#3258f2" }}
                />
              </div>
              <div className="flex-shrink-0 ">
                <div className="me-3">
                  <h5 className="">February 14, 2012</h5>
                </div>
                <div className="flex-grow">
                  <a href="https://www.reddit.com/r/dataisbeautiful/">
                    r/dataisbeautiful
                  </a>
                  , also known as Data Is Beautiful, was lauched on reddit.
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
              <div className="flex-shrink-0 ">
                <div className="me-3">
                  <h5 className="">August 9, 2014</h5>
                </div>
                <div className="flex-grow">
                  A VentureBeat article noted that r/dataisbeautiful "...aims to
                  collect the best of the Web in a daily rounded up of gorgeous
                  data visualizations."&nbsp;
                  <a href="https://venturebeat.com/business/data-is-beautiful-is-a-hidden-gem-for-gorgeous-data-visualizations/">
                    Read More
                  </a>
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
              <div className="flex-shrink-0 ">
                <div className="me-3">
                  <h5 className="">November 28, 2019 </h5>
                </div>
                <div className="flex-grow">
                  the decision of moderators at r/dataisbeautiful to temporarily
                  ban animated bar chart graphs showing the relative position of
                  entities on a list over time – so-called bar chart races –
                  received attention from The Next Web.&nbsp;
                  <a href="https://thenextweb.com/news/reddit-dataisbeautiful-race-charts-ban">
                    Read More
                  </a>
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
              <div className="flex-shrink-0 ">
                <div className="me-3">
                  <h5 className="">January 2020 </h5>
                </div>
                <div className="flex-grow">
                  <a href="https://twitter.com/ellieapeake?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    Eleanor Peake
                  </a>
                  &nbsp;noted that, because the subreddit had received so many
                  submissions by Tinder users plotting their experiences on the
                  app, one Reddit user set up a separate subreddit dedicated
                  entirely to Tinder-related data visualizations.
                </div>
              </div>
            </li>
          </ul>
          <div className="text-center mt-4">
            <a
              href="https://en.wikipedia.org/wiki/R/dataisbeautiful#:~:text=It%20was%20created%20in%202012,it%20has%2017.59%20million%20members."
              className="btn btn-primary btn-sm btn-text"
            >
              View More <i className="mdi mdi-arrow-right ms-1"></i>
            </a>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default forwardRef(About);
