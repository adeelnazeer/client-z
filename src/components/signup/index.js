/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../login/style.scss";
import { Link } from "react-router-dom";
export default () => {
  return (
    <div className="container-fluid main-container-login">
      <div className="signup-main">
        <div className="container inner-container col-10">
          <div className="content">
            <div className="content-inner row">
              <div class="col-6 content-one-sign-up">
                <div className="top-color">
                  <div className="one"></div>
                  <div className="two"></div>
                </div>
                <div className="content-data">
                  <div className="mrg-top-25 txt-align-cntr">
                    <h2 className="heading">Sign up</h2>
                  </div>
                  <div className="mrg-top-95">
                    <div>
                      <label className="fnt-w-600">User Name</label>
                    </div>
                    <div>
                      <input className="inputs" placeholder="Turner Oaks" />
                    </div>
                  </div>
                  <div className="mrg-top-20">
                    <div>
                      <label className="fnt-w-600">Email</label>
                    </div>
                    <div>
                      <input
                        className="inputs"
                        placeholder="turneroaks@gmail.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="mrg-top-20">
                    <div>
                      <label className="fnt-w-600">Password</label>
                    </div>
                    <div>
                      <input
                        className="inputs"
                        placeholder="*****"
                        type="password"
                      />
                    </div>
                  </div>
                  <div className="mrg-top-20">
                    <div>
                      <label className="fnt-w-600">Repeat Password</label>
                    </div>
                    <div>
                      <input
                        className="inputs"
                        placeholder="*****"
                        type="password"
                      />
                    </div>
                  </div>
                  <Link to="signup2">
                    <div className="mrg-top-25">
                      <button className="btn-blue">NEXT</button>
                    </div>
                  </Link>
                  <div className="txt-align-cntr mrg-top-20">
                    <p>Skip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
