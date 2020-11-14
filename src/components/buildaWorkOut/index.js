/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/test.jpg";
import Image2 from "../../assets/images/zym_3.png";
export default () => {
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <div className="container-fluid build-workout-container">
      <div className="row inner">
        <div className="col-10">
          <h5 className="txt-align-cntr">Build a Workout</h5>
          <h6 className="mrg-top-90">Select the type of workout</h6>
          <select>
            <option>Indoor</option>
            <option>Outdoor</option>
          </select>
          <h6 className="mrg-top-30">Intensity level</h6>
          <div className="radio-buttons">
            <label class="container">
              Easy
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Hard
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Intense
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          <h6 className="mrg-top-40">Your goal</h6>
          <div className="radio-buttons">
            <label class="container">
              Lose fat
              <input type="radio" checked="checked" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Build muscle
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="container">
              Got stronger
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
          {url === "/workout" && (
            <div className="workout-time d-flex mrg-top-40">
              <h6 className=" fnt-w-700">Workout Time</h6>
              <select>
                <option>9:30 PM</option>
                <option>10:30 PM</option>
                <option>11:30 PM</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <hr></hr>
      {url === "/workout" && (
        <div>
          <h5 className="fnt-w-600">Total 123 workout buddy found</h5>
          <div className="vedio-div mrg-top-20">
            <div className="image-text">
              <img className="image" src={Image2} alt="" />
              <div className="mrg-left-20">
                <h3 className="fnt-w-700">George Smith</h3>
                <p>by creator name</p>
                {/* <h5 className="a-tag">Add Workouts list</h5> */}
              </div>
              <div className="send-req">
                <button>Send Request</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {url !== "/workout" && (
        <div className="vedio-div">
          <div className="image-text">
            <img className="image" src={Image} alt="" />
            <div className="mrg-left-20">
              <h5>Video title</h5>
              <p>by creator name</p>
              <h5 className="a-tag">Add Workouts list</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
