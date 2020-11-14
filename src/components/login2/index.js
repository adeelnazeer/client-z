/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../login/style.scss";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/facebook.png";
export default () => {
  return (
    <div className="container-fluid main-container-login">
      <div className="login-main-two">
        <div className="container inner-container col-10">
          <div className="content">
            <div className="content-inner row">
              <div class="col-5 content-one pd-top-btm-20">
                <div className="">
                  <div className="mrg-top-25 txt-align-cntr">
                    <h3 className="heading">Login</h3>
                  </div>
                  <div className="mrg-top-60">
                    <div>
                      <label className="fnt-w-600">Email Address</label>
                    </div>
                    <div>
                      <input
                        className="inputs"
                        placeholder="*****"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="mrg-top-20">
                    <div className="d-flex jus-con-bet">
                      <label className="fnt-w-600">Password</label>
                      <a href="/" className="fnt-w-600">
                        Reset Password
                      </a>
                    </div>
                    <div>
                      <input
                        className="inputs"
                        placeholder="*****"
                        type="password"
                      />
                    </div>
                  </div>
                  <div class="form-group form-check mrg-top-10">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <p class="form-check-label" for="exampleCheck1">
                      Remember login info
                    </p>
                  </div>
                  {/* <div className="mrg-top-20">
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
                  </div> */}
                  {/* <div className="email">
                    <div>
                      <label className="label">Repeat Password</label>
                    </div>
                    <div>
                      <input placeholder="*****" type="password" />
                    </div>
                  </div> */}
                  <Link to="/dashboard">
                    <div className="mrg-top-25 ">
                      <button className="btn-blue">LOGIN</button>
                    </div>
                  </Link>
                  {/* <div className="txt-align-cntr mrg-top-20">
                    <p>Skip</p>
                  </div> */}
                  <div className="paragraph txt-align-cntr">
                    <p>or continue with</p>
                  </div>
                  <div>
                    <hr className="hr-line"></hr>
                  </div>
                  <div className="txt-align-cntr">
                    <img className="facebook-icon" src={Facebook} alt="" />
                  </div>
                  <div className="paragraph txt-align-cntr">
                    <p>
                      I don't have an account{" "}
                      <a href="/signup" className="a-tag cursor-pointer">
                        Sign up Now!
                      </a>
                    </p>
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
