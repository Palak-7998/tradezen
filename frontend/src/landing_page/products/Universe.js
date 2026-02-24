import React from "react";
import smallcase from "../assests/images/smallcase.jpeg";
import sensibull from "../assests/images/sensibul.jpeg";
import tijori from "../assests/images/tijori.jpeg";
import streak from "../assests/images/streak.jpeg";
import ditto from "../assests/images/ditto.jpeg";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <h1>The Zerodha Universe</h1>
      <p className="text-muted">
        Extend your trading and investment experience even further
      </p>

      <div className="row mt-5">
{[smallcase, sensibull, tijori, streak, ditto].map((logo, i) => (
  <div className="col-4 p-4" key={i}>
    <img
      src={logo}
      alt="Zerodha partner"
      style={{ width: "150px" }}
    />
  </div>
))}
      </div>

      <button className="btn btn-primary mt-5 px-4 py-2">
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;