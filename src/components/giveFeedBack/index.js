/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
export default () => {
  return (
    <div className="feedback-main">
      <div className="feedback-inner">
        <h5 className="fnt-w-700">
          Overall, how did you feel about the services?
        </h5>
        <div className="radio-buttons">
          <label class="container">
            Very Satisfied
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Neither Satisfied or dissatisfied
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Dissatisfied
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="container">
            Very Dissatisfied
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
        <h5 className="mrg-top-40">How could we improve our services?</h5>
        <textarea className="mrg-top-10" rows="3" maxLength="120" />
        <p>character limit 120</p>
        <h6 className="mrg-top-10">
          Please don't include any financial information such as your credit
          card number.
        </h6>
        <div className="mrg-top-30">
          <button className="btn-blue">GIVE FEEDBACK</button>
        </div>
      </div>
    </div>
  );
};
