/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/157781817581281082-1-.png";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/facebook.png";
export default () => {
  return (
    <div className="container-fluid main-container-login">
      <div className="login-main">
        <div className="container inner-container col-10">
          <div className="content">
            <div className="content-inner row">
              <div class="col-5 content-one pd-top-botton">
                <div>
                  <img className="image-login" src={Image} alt="" />
                  <div className="mrg-top-25 txt-align-cntr">
                    <h2 className="heading">Welcome to Zurvos</h2>
                  </div>
                  <Link to="/signup">
                    <div className="mrg-top-60">
                      <button className="btn-blue">SIGN UP</button>
                    </div>
                  </Link>
                  <div className="mrg-top-25">
                    <button className="btn-gray">LOGIN</button>
                  </div>
                  <div className="paragraph txt-align-cntr">
                    <p>or continue with</p>
                  </div>
                  <div>
                    <hr className="hr-line"></hr>
                  </div>
                  <div className="txt-align-cntr">
                    <img className="facebook-icon" src={Facebook} alt="" />
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
