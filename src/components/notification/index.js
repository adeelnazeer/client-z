/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/jonathan-borba-R0y_bEUjiOM-unsplash.jpg";
import ImageLeft from "../../assets/images/Profile_pic4.png";
export default () => {
  return (
    <div className="notification-main">
      <div className="d-flex jst-cont-between">
        <h5 className="fnt-w-700">Notifications</h5>
        <p>See All</p>
      </div>
      <div className="d-flex mrg-top-30">
        <p className="a-tag  fnt-w-700">TODAY</p>
        <p className="mrg-left-50 fnt-w-700 clr-lighgray">YESTERDAY</p>
      </div>
      <hr></hr>
      <div className="d-flex jst-cont-between">
        <div className="d-flex aln-itm-c">
          <div>
            <img className="img-left" src={ImageLeft} alt="" />
          </div>
          <div className="mrg-left-20">
            <span>
              {" "}
              <span className="a-tag">Kevin Bruce</span> &{" "}
              <span className="a-tag">16 others</span>{" "}
              <span className="clr-lighgray">liked your photo</span>
            </span>
          </div>
          <div className="mrg-left-30">
            <p> 23 M</p>
          </div>
        </div>
        <div>
          <img className="img-right" src={Image} alt="" />
        </div>
      </div>
      <hr></hr>
      <div className="d-flex jst-cont-between">
        <div className="d-flex aln-itm-c">
          <div>
            <img className="img-left" src={ImageLeft} alt="" />
          </div>
          <div className="mrg-left-20">
            <span>
              {" "}
              <span className="a-tag">Kevin Bruce</span> &{" "}
              <span className="a-tag">16 others</span> 
              <span className="clr-lighgray">liked your photo</span>
            </span>
          </div>
          <div className="mrg-left-30">
            <p> 23 M</p>
          </div>
        </div>
        <div>
          <img className="img-right" src={Image} alt="" />
        </div>
      </div>
      <hr></hr>
      <div className="d-flex jst-cont-between">
        <div className="d-flex aln-itm-c">
          <div>
            <img className="img-left" src={ImageLeft} alt="" />
          </div>
          <div className="mrg-left-20">
            <span>
              {" "}
              <span className="a-tag">Kevin Bruce</span> &{" "}
              <span className="a-tag">16 others</span> 
              <span className="clr-lighgray">liked your photo</span>
            </span>
          </div>
          <div className="mrg-left-30">
            <p> 23 M</p>
          </div>
        </div>
        <div>
          <img className="img-right" src={Image} alt="" />
        </div>
      </div>
      <hr></hr>
      <div className="d-flex jst-cont-between">
        <div className="d-flex aln-itm-c">
          <div>
            <img className="img-left" src={ImageLeft} alt="" />
          </div>
          <div className="mrg-left-20">
            <span>
              {" "}
              <span className="a-tag">Kevin Bruce</span> &{" "}
              <span className="a-tag">16 others</span> 
              <span className="clr-lighgray">liked your photo</span>
            </span>
          </div>
          <div className="mrg-left-30">
            <p> 23 M</p>
          </div>
        </div>
        <div>
          <img className="img-right" src={Image} alt="" />
        </div>
      </div>
      <hr></hr>
      <div className="d-flex jst-cont-between">
        <div className="d-flex aln-itm-c">
          <div>
            <img className="img-left" src={ImageLeft} alt="" />
          </div>
          <div className="mrg-left-20">
            <span>
              {" "}
              <span className="a-tag">Kevin Bruce</span> &{" "}
              <span className="a-tag">16 others</span> 
              <span className="clr-lighgray">liked your photo</span>
            </span>
          </div>
          <div className="mrg-left-30">
            <p> 23 M</p>
          </div>
        </div>
        <div>
          <img className="img-right" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};
