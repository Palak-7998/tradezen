import React from "react";
import varsityImg from "../assests/images/varsity.jpeg";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        
        <div className="col-6">
          <img
            src={varsityImg}
            alt="Varsity education platform"
            style={{ width: "70%" }}
          />
        </div>

        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <span
            style={{
              color: "#387ed1",
              cursor: "pointer",
              display: "inline-block",
              marginBottom: "20px",
            }}
          >
            Varsity <i className="fa fa-long-arrow-right"></i>
          </span>

          <p>
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <span
            style={{
              color: "#387ed1",
              cursor: "pointer",
            }}
          >
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </span>

        </div>
      </div>
    </div>
  );
}

export default Education;