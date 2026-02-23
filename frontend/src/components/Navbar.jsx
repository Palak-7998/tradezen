import React from "react";
import { Link } from "react-router-dom";
import logo from "../landing_page/assests/images/Zerodhalogo.jpeg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-white">
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Zerodha Logo" style={{ width: "120px" }} />
        </Link>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/product">Product</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;