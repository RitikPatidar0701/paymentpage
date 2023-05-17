import React from "react";

const Payment = () => {
  return (
    <div className="payment-container">
      <div className="payment-top">
        <div className="sign-up">
          <p className="btn1-2">1</p>
          <p>Sign Up</p>
        </div>
        <div className="subscribe">
          <p className="btn1-2">2</p>
          <p>Subscribe</p>
        </div>
      </div>
      <div>
        <p style={{ textAlign: "center",   fontFamily: "Roboto,sans-serif"
 }}> Select your subscription plan</p>
      </div>

      <div className="plans-offers">
        <div
          className="plan"
          style={{
            border: "2px solid #BEBEBE",
            color: "#BEBEBE",
            background: "#E7E7E7",
            cursor: "none",
          }}
        >
          <div className="text-left">
            <i
              style={{ color: "#BEBEBE" }}
              class="fa-regular fa-circle-check"
            ></i>
            <p> 12 Months Subscription </p>{" "}
          </div>

          <div className="text-rigth">
            <p>
              {" "}
              <span style={{ fontSize: "12px" }}>Total</span> ₹99
            </p>
            <p style={{ fontSize: "12px", textAlign: "end" }}> ₹5/mo</p>
          </div>
          <p className="offer-popup" style={{ background: "#DE4313" }}>
            {" "}
            Offer expired
          </p>
        </div>

        <div
          className="plan"
          style={{ border: "2px solid #47ba68", background: "#D7EDDD" }}
        >
          <div className="text-left">
            <i
              style={{ color: "#47ba68" }}
              class="fa-regular fa-circle-check"
            ></i>
            <p> 12 Months Subscription </p>{" "}
          </div>

          <div className="text-rigth">
            <p>
              {" "}
              <span style={{ fontSize: "12px" }}>Total</span> ₹179
            </p>
            <p style={{ fontSize: "12px", textAlign: "end" }}> ₹15/mo</p>
          </div>
          <p className="offer-popup" style={{ background: "#47ba68" }}>
            Recommended
          </p>
        </div>

        <div className="plan" style={{ border: "2px solid #BEBEBE" }}>
          <div className="text-left">
            <i style={{ color: "#BEBEBE" }} class="fa-regular fa-circle"></i>
            <p> 6 Months Subscription </p>{" "}
          </div>

          <div className="text-rigth">
            <p>
              {" "}
              <span style={{ fontSize: "12px" }}>Total</span> ₹149
            </p>
            <p style={{ fontSize: "12px", textAlign: "end" }}> ₹25/mo</p>
          </div>
        </div>

        <div className="plan" style={{ border: "2px solid #BEBEBE" }}>
          <div className="text-left">
            <i style={{ color: "#BEBEBE" }} class="fa-regular fa-circle"></i>
            <p> 3 Months Subscription </p>{" "}
          </div>

          <div className="text-rigth">
            <p>
              {" "}
              <span style={{ fontSize: "12px" }}>Total</span> ₹99
            </p>
            <p style={{ fontSize: "12px", textAlign: "end" }}> ₹33/mo</p>
          </div>
        </div>
      </div>

      <hr style={{ width: "93.5%", marginLeft: "15px" }} />

      <div className="subscription-fee">
        <p>Subscription Fee</p>
        <p>₹18,500 </p>
      </div>

      <div
        className="plan"
        style={{
          border: "3px solid #ff0000",
          margin: "0 15px",
          background: "#f19d9d",
          color: "#DE4313",
        }}
      >
        <div className="text-left1">
          <p> Limited Time Offer </p>
          <div style={{ fontSize: "14px" }}>
            {" "}
            <i class="fa-regular fa-clock"></i> offer valid till 25th march
          </div>
        </div>

        <div className="text-rigth">
          <p style={{ color: "black", fontWeight: "bolder" }}>₹ -18,401</p>
        </div>
      </div>
      <div className="subscription-fee">
        <p>
          {" "}
          <span style={{ color: "black" }}> Total</span>(incl. of all tax.)
        </p>
        <p style={{ color: "black" }}>₹149 </p>
      </div>

      <div className="buttons">
        <button style={{ border: "2px solid #ff0000", color: "#ff0000" }}>
          {" "}
          CANCEL
        </button>
        <button
          style={{
            border: "2px solid #47ba68",
            background: "#47ba68",
            color: "#ffff",
          }}
        >
          {" "}
          PROCEED TO PAY
        </button>
      </div>

      <div className="rozarpay">
        <img src="../images/frame.png" alt="" />
      </div>
    </div>
  );
};

export default Payment;
