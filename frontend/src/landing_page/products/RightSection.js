import React from "react";

function RightSection({ image, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Content */}
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDesription}</p>
          {learnMore && <a href={learnMore}>Learn more →</a>}
        </div>

        {/* Image */}
        <div className="col-6 text-center">
          <img src={image} alt={productName} style={{ width: "90%" }} />
        </div>

      </div>
    </div>
  );
}

export default RightSection;