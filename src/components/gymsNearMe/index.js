/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./style.scss";
import Icon from "../../assets/images/zym_3.png";
import Icon2 from "../../assets/images/zym_2.png";
export default () => {
  return (
    <div className="main-container-gym">
      <div>
        <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
          <input
            class="form-control form-control-sm  search-input"
            type="text"
            placeholder="Search by location"
            aria-label="Search"
          />
        </form>
        <div className="mrg-top-20 d-flex main-div">
          <div className="icon-div">
            <img src={Icon} alt="" />
          </div>
          <div className="content-div mrg-left-30">
            <div>
              <h6 className="fnt-w-700">FITHUBZ</h6>
            </div>
            <div>icon</div>
            <div className="a-tag mrg-top-5">Cost - $4.75/workout</div>
          </div>
        </div>
        <div className="mrg-top-20 d-flex main-div">
          <div className="icon-div">
            <img src={Icon2} alt="" />
          </div>
          <div className="content-div mrg-left-30">
            <div>
              <h6 className="fnt-w-700">GYMZO</h6>
            </div>
            <div>icon</div>
            <div className="a-tag mrg-top-5">Cost - $4.75/workout</div>
          </div>
        </div>
        <div className="mrg-top-20 d-flex main-div">
          <div className="icon-div">
            <img src={Icon} alt="" />
          </div>
          <div className="content-div mrg-left-30">
            <div>
              <h6 className="fnt-w-700">ABFIT</h6>
            </div>
            <div>icon</div>
            <div className="a-tag mrg-top-5">Cost - $4.75/workout</div>
          </div>
        </div>
        <div className="mrg-top-20 d-flex main-div">
          <div className="icon-div">
            <img src={Icon} alt="" />
          </div>
          <div className="content-div mrg-left-30">
            <div>
              <h6 className="fnt-w-700">FITHUBZ 2</h6>
            </div>
            <div>icon</div>
            <div className="a-tag mrg-top-5">Cost - $4.75/workout</div>
          </div>
        </div>
        <div className="mrg-top-20 d-flex main-div">
          <div className="icon-div">
            <img src={Icon2} alt="" />
          </div>
          <div className="content-div mrg-left-30">
            <div>
              <h6 className="fnt-w-700">GYMZO 2</h6>
            </div>
            <div>icon</div>
            <div className="a-tag mrg-top-5">Cost - $4.75/workout</div>
          </div>
        </div>
      </div>
    </div>
  );
};
