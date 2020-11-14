/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
export default () => {
  return (
    <div className="contact-us-container">
      <div className="contact-use-inner">
        <h5 className="fnt-w-700">Contact Zurvos</h5>
        <div className="mrg-top-40">
          <h6>Subject</h6>
          <input />
        </div>
        <div className="mrg-top-40">
          <h6>Your Message</h6>
          <textarea
            placeholder="Message..."
            rows="4"
            maxLength="120"
          ></textarea>
        </div>
        <p>Character limit 120</p>
        <div className="mrg-top-60">
          <button className="btn-blue">SEND</button>
        </div>
      </div>
    </div>
  );
};
