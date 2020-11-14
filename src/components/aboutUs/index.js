/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/Product_image_78.png";
export default () => {
  return (
    <div className="about-container">
      <h5 className="fnt-w-700">About ZURVOS</h5>
      <p className="mrg-top-30 para">
        Here's how answer the questions members or clients more often asks
        fitness professionals
      </p>
      <img className="image-about" src={Image} alt="" />
      <h6 className="mrg-top-40">Address</h6>
      <p className="mrg-top-10">Zurvos-444 Belvue Road Greenville,SC 29609</p>
    </div>
  );
};
