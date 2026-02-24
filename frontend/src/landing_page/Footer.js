import React from "react";
import logo from "../landing_page/assests/images/Zerodhalogo.jpeg";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          {/* LOGO SECTION */}
          <div className="col">
            <img
              src={logo}
              alt="Zerodha logo"
              style={{ width: "150px" }}
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* COMPANY */}
          <div className="col">
            <p>Company</p>
            <span className="d-block footer-link">About</span>
            <span className="d-block footer-link">Products</span>
            <span className="d-block footer-link">Pricing</span>
            <span className="d-block footer-link">Referral programme</span>
            <span className="d-block footer-link">Careers</span>
            <span className="d-block footer-link">Zerodha.tech</span>
            <span className="d-block footer-link">Press & media</span>
            <span className="d-block footer-link">Zerodha cares (CSR)</span>
          </div>

          {/* SUPPORT */}
          <div className="col">
            <p>Support</p>
            <span className="d-block footer-link">Contact</span>
            <span className="d-block footer-link">Support portal</span>
            <span className="d-block footer-link">Z-Connect blog</span>
            <span className="d-block footer-link">List of charges</span>
            <span className="d-block footer-link">Downloads & resources</span>
          </div>

          {/* ACCOUNT */}
          <div className="col">
            <p>Account</p>
            <span className="d-block footer-link">Open an account</span>
            <span className="d-block footer-link">Fund transfer</span>
            <span className="d-block footer-link">60 day challenge</span>
          </div>

        </div>

        {/* DISCLAIMER */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;