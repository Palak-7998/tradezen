import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import kite from "../assests/images/kite.jpeg";
import consoleImg from "../assests/images/console.jpeg";
import coin from "../assests/images/coin.jpeg";
import kiteconnect from "../assests/images/kiteconnect.jpeg";
import varsity from "../assests/images/varsitym.jpeg";
import googleplay from "../assests/images/googleplay.jpeg";
import appstore from "../assests/images/appstore.jpeg";

function PricingPage() {
  return (
    <>
      <Hero />

      {/* Kite */}
      <LeftSection
        image={kite}
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more."
        tryDemo="#"
        learnMore="#"
        googlePlay={googleplay}
        appStore={appstore}
      />

      {/* Console */}
      <RightSection
        image={consoleImg}
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments."
        learnMore="#"
      />

      {/* Coin */}
      <LeftSection
        image={coin}
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account."
        googlePlay={googleplay}
        appStore={appstore}
      />

      {/* Kite Connect */}
      <RightSection
        image={kiteconnect}
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs."
        learnMore="#"
      />

      {/* Varsity */}
      <LeftSection
        image={varsity}
        productName="Varsity mobile"
        productDesription="An easy to grasp collection of stock market lessons with in-depth coverage."
        googlePlay={googleplay}
        appStore={appstore}
      />

      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech blog.
      </p>

      <Universe />
    </>
  );
}

export default PricingPage;