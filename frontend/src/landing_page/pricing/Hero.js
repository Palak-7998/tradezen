import React from "react";
import zeroImg from "../assests/images/zero.jpeg";
import twentyImg from "../assests/images/twenty.jpeg";

function Hero() {
  return (
    <div className="container">
      {/* Header */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Pricing cards */}
      <div className="row p-5 mt-5 text-center">
        
        {/* ₹0 */}
        <div className="col-4 p-4">
          <img src={zeroImg} alt="Zero brokerage" style={{ width: "80px" }} />
          <h1 className="fs-3 mt-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* ₹20 */}
        <div className="col-4 p-4">
          <img src={twentyImg} alt="Twenty rupees brokerage" style={{ width: "80px" }} />
          <h1 className="fs-3 mt-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order.
          </p>
        </div>

        {/* MF */}
        <div className="col-4 p-4">
          <img src={zeroImg} alt="Free mutual funds" style={{ width: "80px" }} />
          <h1 className="fs-3 mt-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Hero;