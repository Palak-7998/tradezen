import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <h1 className="fs-3 mt-5 mb-4">
        To create a ticket, select a relevant topic
      </h1>

      <div className="row">
        {/* LEFT SIDE */}
        <div className="col-6">
          <Section
            title="Account Opening"
            items={[
              "Online Account Opening",
              "Offline Account Opening",
              "Company, Partnership and HUF",
              "NRI Account Opening",
              "Getting Started",
            ]}
          />

          <Section
            title="Your Zerodha Account"
            items={[
              "Your Profile",
              "Account modification",
              "Client Master Report (CMR)",
              "Nomination",
              "Transfer of securities",
            ]}
          />

          <Section
            title="Kite"
            items={[
              "IPO",
              "Trading FAQs",
              "Charts and orders",
              "Alerts and Nudges",
            ]}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-6">
          <Section
            title="Funds"
            items={[
              "Add money",
              "Withdraw money",
              "Add bank accounts",
              "eMandates",
            ]}
          />

          <Section
            title="Console"
            items={[
              "Portfolio",
              "Corporate actions",
              "Reports",
              "Profile",
            ]}
          />

          <Section
            title="Coin"
            items={[
              "Mutual funds",
              "NPS",
              "Fixed Deposit",
              "Payments and orders",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

/* SECTION COMPONENT */
function Section({ title, items }) {
  return (
    <div className="mb-4">
      <h5>
        <i className="fa fa-plus-circle me-2"></i>
        {title}
      </h5>

      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          className="btn btn-link p-0"
          style={{
            display: "block",
            textAlign: "left",
            textDecoration: "none",
            lineHeight: "2.3",
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CreateTicket;