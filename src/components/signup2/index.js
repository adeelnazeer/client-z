/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../login/style.scss";
import { Link } from "react-router-dom";

export default () => {
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <div className="container-fluid main-container-login">
      <div className="signup-main-two">
        <div className="container inner-container col-10">
          <div className="content">
            <div className="content-inner row">
              <div class="col-6 content-one-sign-up">
                <div className="top-color">
                  <div className="one"></div>
                  <div className={url === "/signup2" ? "test " : "two"}></div>
                </div>
                <div className="content-data">
                  <div className="mrg-top-25 txt-align-cntr">
                    <h2 className="heading">Sign up</h2>
                  </div>
                  <div className="mrg-top-95">
                    <div>
                      <label className="fnt-w-600">Zip Code</label>
                    </div>
                    <div>
                      <select className="drop-down ">
                        <option>29690</option>
                        <option>29630</option>
                      </select>
                    </div>
                  </div>
                  <div className="mrg-top-20">
                    <div>
                      <label className="fnt-w-600">T-Shirt Size</label>
                    </div>
                    <div>
                      <select className="drop-down ">
                        <option>XL(18-20)</option>
                        <option>XL(18-20)</option>
                      </select>
                    </div>
                  </div>
                  <div className="mrg-top-20">
                    <div>
                      <label className="fnt-w-600">Phone Number</label>
                    </div>
                    <div>
                      <input
                        className="inputs"
                        placeholder="*****"
                        type="password"
                      />
                    </div>
                  </div>
                  {/* <div className="email">
                    <div>
                      <label className="label">Repeat Password</label>
                    </div>
                    <div>
                      <input placeholder="*****" type="password" />
                    </div>
                  </div> */}
                  <Link to="login">
                    <div className="mrg-top-25 ">
                      <button className="btn-blue">Sign Up</button>
                    </div>
                  </Link>
                  {/* <div className="txt-align-cntr mrg-top-20">
                    <p>Skip</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
