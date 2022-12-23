import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "reactstrap";

const AdComp = () => {
  return (
    <Card>
      <div className="ad-container position-relative h-100 p-4">
        <span className="image-cover"></span>
        <div className="f-flex flex-column flex-auto position-relative">
          <h5 className="text-white">Enjoying the site?</h5>
          <p className="text-white">
            Help me create more stuffs like this, by giving this project a star
            on Github!
          </p>
          <a
            href="https://github.com/KjOHnBaggins/react-dashboard"
            className="mt-auto mb-0 text-white"
          >
            Give a star!
            <FontAwesomeIcon icon="fa solid fa-arrow-right" className="ml-1" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default AdComp;
