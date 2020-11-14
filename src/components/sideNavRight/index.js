/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Icon from "../../assets/images/Icon_1.png";
import Icon2 from "../../assets/images/Icon_2.png";
import Icon3 from "../../assets/images/Icon_3.png";
import PicIcon from "../../assets/images/Profile_pic4.png";
import PicIcon2 from "../../assets/images/Profile_pic4.png";
export default () => {
  return (
    <>
      <div className="zurvos-working">
        <h4>How Zurvos Works</h4>
        <div className="d-flex mrg-top-30">
          <div>
            <img src={Icon} alt="" />
          </div>
          <div className="mrg-left-20">
            <h6>Find Gyms Near You</h6>
            <p>Take advantage of Free Traning Programs.</p>
          </div>
        </div>
        <div className="d-flex mrg-top-0">
          <div>
            <img src={Icon2} alt="" />
          </div>
          <div className="mrg-left-20">
            <h6>Filter to get Your Best Match.</h6>
            <p>Take advantage of Free Traning Programs.</p>
          </div>
        </div>
        <div className="d-flex mrg-top-0">
          <div>
            <img src={Icon3} alt="" />
          </div>
          <div className="mrg-left-20">
            <h6>Pay as You Go</h6>
            <p>Take advantage of Free Traning Programs.</p>
          </div>
        </div>
        <div className="mrg-top-50 ">
          <h4 className="color-grey">Recent Feeds</h4>
          <div className="d-flex mrg-top-30">
            <div>
              <img src={PicIcon} alt="" />
            </div>
            <div className="mrg-left-20">
              <h6>Congratulations!</h6>
              <p>
                <span className="a-tag">Kevin Bruce</span> &{" "}
                <span className="a-tag">16 others</span> liked your photos.
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex mrg-top-20">
            <div>
              <img src={PicIcon2} alt="" />
            </div>
            <div className="mrg-left-20">
              <h6>Congratulations!</h6>
              <p>
                <span className="a-tag">Kevin Bruce</span> &{" "}
                <span className="a-tag">16 others</span> liked your photos.
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex mrg-top-20">
            <div>
              <img src={PicIcon} alt="" />
            </div>
            <div className="mrg-left-20">
              <h6>Congratulations!</h6>
              <p>
                <span className="a-tag">Kevin Bruce</span> &{" "}
                <span className="a-tag">16 others</span> liked your photos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="container-fluid side-nav">
    //   {/* <div className="inner-div-side pd-top-5">
    //     <div>test</div>
    //   </div> */}
    // </div>
  );
};
