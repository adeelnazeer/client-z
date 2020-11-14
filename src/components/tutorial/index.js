/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Search from "../../assets/images/icons/Search.png";
import Image1 from "../../assets/images/test.jpg";
import Image2 from "../../assets/images/Leg-Press-Starting-Position.jpg";
import Image3 from "../../assets/images/Article4_HowStrategic.jpg";
import Image4 from "../../assets/images/sieviete-ritenbrauksana-majas-51374279.jpg";
export default () => {
  return (
    <div className="tutorial-container">
      <div className="tutorial-inner">
        <h5>Fitness Videos</h5>
        <div>
          <img src={Search} alt="" />
        </div>
      </div>
      <div className="paid-free">
        <h6>FREE VIDEOS</h6>
        <h6>PAID VIDEOS</h6>
      </div>
      <hr></hr>
      <div className="row image-row-1">
        <div className="col-6">
          <img className="image-large" src={Image1} alt="" />
        </div>
        <div className="col-6">
          <img className="image-large" src={Image2} alt="" />
        </div>
      </div>
      <div className="row image-row-1">
        <div className="col-6">
          <img className="image-large" src={Image3} alt="" />
        </div>
        <div className="col-6">
          <img className="image-large" src={Image4} alt="" />
        </div>
      </div>
    </div>
  );
};
