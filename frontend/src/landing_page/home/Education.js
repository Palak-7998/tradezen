import React from "react";
import varsityImg from "../assests/images/varsity.jpeg";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src={varsityImg}
            style={{ width: "70%" }}
            alt="Varsity"
          />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>
          <br></br>
          <p>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
                    <a href="#" style={{ textDecoration: "none" }}>
             TradingQ&A<i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;