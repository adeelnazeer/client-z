/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/Profile_pic_1.png";
import ProfileImage from "../../assets/images/Timeline_image.png";
import Dot from "../../assets/images/icons/Dot_menu.png";
import Location from "../../assets/images/icons/Locations.png";
import Like from "../../assets/images/icons/Like.png";
import Comment from "../../assets/images/icons/Comments.png";
import Share from "../../assets/images/icons/Share.png";
export default () => {
  return (
    <div className="post-container">
      <div className="post-section-one">
        <h5 className="fnt-w-700">Create Post</h5>
      </div>
      <div className="post-row-two">
        <div className="d-flex">
          <div>
            <img className="img-height" src={Image} alt="" />
          </div>
          <div className="mrg-left-10">
            <textarea placeholder="Write somethings?" rows="4"></textarea>
          </div>
        </div>
        <hr></hr>
        <div className="btn-div d-flex">
          <div>
            <button>Add file</button>
          </div>
          <div className="mrg-left-10">
            <button>Camera</button>
          </div>
          <div className="mrg-left-10">
            <button>Check In</button>
          </div>
          <div className="mrg-left-10">
            <button>Tag People</button>
          </div>
        </div>
        <hr></hr>
        <div>
          <button className="btn-blue">POST</button>
        </div>
      </div>
      <div className="section-two mrg-top-10">
        <div className="section-two-row-one ">
          <div className="d-flex ">
            <div className="">
              <img className="profile-img" src={ProfileImage} alt="" />
            </div>
            <div className="mrg-left-10">
              <h6>Caitlyn Thompson</h6>
              <p>
                <img src={Location} alt="" />
                <span className="mrg-left-5">FIThubz</span>
              </p>
            </div>
          </div>
          <div className="d-flex">
            <div className="btn-follow">
              <button>Follow</button>
            </div>
            <div className="mrg-left-10">
              <img src={Dot} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="para">
        <h6>Who else has done their cardio today?</h6>
      </div>
      <div>
        <img className="wd-100" src={ProfileImage} alt="" />
      </div>
      <div className="footer-post">
        <div className="flex-1">
          <div className="d-flex">
            <div>
              <img src={Like} alt="" />
            </div>
            <div className="mrg-left-10">
              <p>Likes</p>
              <p>
                <span className="a-tag">54</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 comments">
          <div className="d-flex">
            <div>
              <img src={Comment} alt="" />
            </div>
            <div className="mrg-left-10">
              <p>Comments</p>
              <p>
                <span className="a-tag">54</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 share">
          <div className="d-flex">
            <div>
              <img src={Share} alt="" />
            </div>
            <div className="mrg-left-10">
              <p>Share</p>
              <p>
                <span className="a-tag">54</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
