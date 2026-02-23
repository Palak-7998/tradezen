import React from "react";

function LeftSection({
  image,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Image */}
        <div className="col-6 text-center">
          <img src={image} alt={productName} style={{ width: "90%" }} />
        </div>

        {/* Content */}
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDesription}</p>

          <div className="mt-3">
            {tryDemo && <a href={tryDemo}>Try demo →</a>}
            {learnMore && (
              <a href={learnMore} style={{ marginLeft: "30px" }}>
                Learn more →
              </a>
            )}
          </div>

          {(googlePlay || appStore) && (
            <div className="mt-4">
              {googlePlay && (
                <img
                  src={googlePlay}
                  alt="Google Play"
                  style={{ width: "150px" }}
                />
              )}
              {appStore && (
                <img
                  src={appStore}
                  alt="App Store"
                  style={{ width: "150px", marginLeft: "20px" }}
                />
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default LeftSection;