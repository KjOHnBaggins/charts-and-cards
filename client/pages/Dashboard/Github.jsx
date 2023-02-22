import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "reactstrap";
import { forwardRef } from "react";

const Github = ({ props }, githubref) => {
  return (
    <div ref={githubref}>
      <Card className="github-card">
        <div className="ad-container position-relative h-100 p-4">
          <span className="image-cover"></span>
          <div className="f-flex flex-column flex-auto position-relative text-white">
            <h5>Enjoying the site?</h5>
            <p>
              Help me create more stuffs like this, by giving this project a
              star on Github!
            </p>
            <a
              href="https://github.com/KjOHnBaggins/charts-and-cards"
              className="mt-auto mb-0"
            >
              Give a star!&nbsp;&nbsp;
              <FontAwesomeIcon
                icon="fa solid fa-arrow-right"
                className="ml-1"
              />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default forwardRef(Github);
