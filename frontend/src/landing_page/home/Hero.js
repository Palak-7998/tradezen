import React from "react";
import heroImg from "../assests/images/Homepage.jpeg"; // ✅ exact name

function Hero() {
  return (
    <div className="text-center mt-5">
      <img
        src={heroImg}
        alt="Hero"
        style={{ width: "70%", marginBottom: "40px" }}
      />

      <h1>Invest in everything</h1>
      <p>
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>

      <button className="btn btn-primary mt-3">Sign up now</button>
    </div>
  );
}

export default Hero;