/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import "./style.scss";
import Img1 from "../../assets/images/zym_2.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="session-main">
      <h5 className="fnt-w-700">All Sessions</h5>
      <div className="d-flex mrg-top-20 caledner-main op-70">
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="mrg-left-10 mrg-right-10">-</div>
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      <div className="content-session mrg-top-30">
        <div className="date">
          <p>Dec 19,2019</p>
        </div>
        <div className="d-flex ">
          <div>
            <img src={Img1} alt="hyx" />
          </div>
          <div className="mrg-left-20">
            <h5>FITHUBZ</h5>
            <p className="a-tag fnt-w-600">Cost - $3.50/workout</p>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex jst-cont-between">
          <div className="fnt-w-600">Time Spent</div>
          <div className="fnt-w-600">2h</div>
        </div>
        <div className="d-flex jst-cont-between mrg-top-20">
          <div className="fnt-w-600">Cost</div>
          <div className="fnt-w-600">$10</div>
        </div>
        <hr></hr>
        <div className="d-flex jst-cont-between">
          <div>
            <h6>Total</h6>
          </div>
          <div>
            <h6>$10</h6>
          </div>
        </div>
      </div>
      <div className="content-session mrg-top-20">
        <div className="date">
          <p>Dec 19,2019</p>
        </div>
        <div className="d-flex ">
          <div>
            <img src={Img1} alt="hyx" />
          </div>
          <div className="mrg-left-20">
            <h5>FITHUBZ</h5>
            <p className="a-tag fnt-w-600 op-70">Cost - $3.50/workout</p>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex jst-cont-between">
          <div className="fnt-w-600 op-70">Time Spent</div>
          <div className="fnt-w-600 op-70">2h</div>
        </div>
        <div className="d-flex jst-cont-between mrg-top-20">
          <div className="fnt-w-600 op-70">Cost</div>
          <div className="fnt-w-600 op-70">$10</div>
        </div>
        <hr></hr>
        <div className="d-flex jst-cont-between">
          <div>
            <h6>Total</h6>
          </div>
          <div>
            <h6>$10</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
