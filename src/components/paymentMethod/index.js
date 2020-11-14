/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
export default () => {
  return (
    <div className="payment-main">
      <div className="payment-inner">
        <h4 className="fnt-w-700 mrg-top-10">Select Payment Method</h4>
        <div className="radio-buttons mrg-top-30">
          <label class="container">
            PayPal
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container mrg-left-5">
            Visa
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            {/* Intense
            <input type="radio" name="radio" />
            <span class="checkmark"></span> */}
          </label>
        </div>
        <div className="card-number mrg-top-40">
          <h6>Card number</h6>
          <input className="mrg-top-5" placeholder="xxxxx" />
        </div>
        <div className="d-flex code mrg-top-40">
          <div>
            <h6>CVV Code</h6>
            <input className="mrg-top-5" placeholder="xxxxx" />
          </div>
          <div className="mrg-left-20">
            <h6>Expire date</h6>
            <input className="mrg-top-5 " placeholder="xxxxx" />
          </div>
        </div>
        <div className="card-holder mrg-top-40">
          <h6>Card holder name</h6>
          <input className="mrg-top-5" placeholder="Turner Oaks" />
        </div>
        <div className="mrg-top-40">
          <button className="btn-blue"> ADD PAYMENT DETAILS</button>
        </div>
      </div>
    </div>
  );
};
