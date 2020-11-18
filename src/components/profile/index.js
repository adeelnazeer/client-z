/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import ICon from "../../assets/images/icons/Emoji.png";
import Image from "../../assets/images/test.jpg";
import Image2 from "../../assets/images/Sign_up2.png";
import Image3 from "../../assets/images/Sign_up6.png";
import Image4 from "../../assets/images/test.jpg";
export default () => {
  return (
    <>
      <div className="profile-main">
        <div className="profile-inner-img">
          <div className="btn-edit">
            <button>Edit Profile</button>
          </div>
        </div>
        <div className="profile-circle">
          <div className="img">
            <div className="first">
              <div>
                <img src={ICon} alt="" />
              </div>
            </div>
          </div>
          <h5 className="pd-top-100">Turner Oaks</h5>
          <p className="a-tag">$34.00 USD</p>
          <div className="mrg-top-30 d-flex jus-con-spacearound footer">
            <div>
              <div className="d-flex">
                <h6 className="a-tag">23</h6>
                <p className="mrg-left-10">Posts</p>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <h6 className="a-tag">203</h6>
                <p className="mrg-left-10">Follower</p>
              </div>
            </div>
            <div>
              <div className="d-flex">
                <h6 className="a-tag">22</h6>
                <p className="mrg-left-10">Following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bio-main mrg-top-10">
        <h6 className="fnt-w-700"> Bio</h6>
        <p className="mrg-top-20">
          Fitness plays an imperative role in your working life because
          professionals life demands...
        </p>
        <h6 className="fnt-w-700 mrg-top-50"> Gallery</h6>
        <div className="d-flex images-profile">
          <div>
            <img src={Image} alt="" />
          </div>
          <div className="mrg-left-5">
            <img src={Image2} alt="" />
          </div>
          <div className="mrg-left-5">
            <img src={Image3} alt="" />
          </div>
          <div className="mrg-left-5">
            <img src={Image4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
