import React from "react";
import varietyImg from "../assests/images/variety.jpeg";
import varBotImg from "../assests/images/VarBot.jpeg";

function Stats() {
  return (
    <section className="py-5">
      <div className="container">

        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6">
            <h2 className="mb-4">Trust with confidence</h2>

            <h5>Customer-first always</h5>
            <p className="text-muted">
              That’s why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh
              crores worth of investments.
            </p>

            <h5>No spam or gimmicks</h5>
            <p className="text-muted">
              No gimmicks, spam, or annoying push notifications.
            </p>

            <h5>The Zerodha universe</h5>
            <p className="text-muted">
              Not just an app, but a whole ecosystem.
            </p>

            <h5>Do better with money</h5>
            <p className="text-muted">
              We actively help you do better with your money.
            </p>
          </div>

          {/* RIGHT IMAGE + LINKS */}
          <div className="col-md-6 text-center">

            {/* MAIN IMAGE */}
            <img
              src={varietyImg}
              alt="Zerodha products"
              className="img-fluid mb-4"
              style={{ maxWidth: "90%" }}
            />

            {/* LINKS (THIS IS THE IMPORTANT FIX) */}
            <div className="d-flex justify-content-center gap-4">
              <a href="#" className="text-decoration-none">
                Explore our products →
              </a>
              <a href="#" className="text-decoration-none">
                Try Kite demo →
              </a>
            </div>

          </div>
        </div>

        {/* ECOSYSTEM CIRCLE IMAGE */}
        <div className="text-center mt-5">
          <img
            src={varBotImg}
            alt="Zerodha ecosystem"
            className="img-fluid"
            style={{ maxWidth: "80%" }}
          />
        </div>

      </div>
    </section>
  );
}

export default Stats;