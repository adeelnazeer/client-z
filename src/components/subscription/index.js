/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
export default () => {
  return (
    <div className="sub-container">
      <div className="row main-row-sub">
        <div className="col-8">
          <h4 className="txt-align-cntr fnt-w-700">My Subscription </h4>
          <p className="txt-align-cntr paragraph">
            Subscribe to your desired plan to get your early content.
          </p>
          <div className="content">
            <p className="txt-align-cntr">BASIC</p>
            <h2 className="txt-align-cntr heading">$9/Month</h2>
            <hr></hr>
            <p className="txt-align-cntr">Unlimited training videos</p>
            <hr></hr>
            <p className="txt-align-cntr">1-2 workout products</p>
            <hr></hr>
            <p className="txt-align-cntr">Free shipping on any products</p>
            <div className="btn-div">
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
