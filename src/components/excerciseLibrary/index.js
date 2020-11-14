/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/test.jpg";
export default () => {
  const data = [
    {
      id: 0,
      txt1: "Video title",
      txt2: "by creator name",
      txt3: "Add Workout Lists",
      btnTxt: "Paid",
      icon: Image,
    },
    {
      id: 1,
      txt1: "Video title",
      txt2: "by creator name",
      txt3: "Add Workout Lists",
      btnTxt: "Free",
      icon: Image,
    },
    {
      id: 2,
      txt1: "Video title",
      txt2: "by creator name",
      txt3: "Add Workout Lists",
      btnTxt: "Paid",
      icon: Image,
    },
    {
      id: 3,
      txt1: "Video title",
      txt2: "by creator name",
      txt3: "Add Workout Lists",
      btnTxt: "Free",
      icon: Image,
    },
  ];
  return (
    <div className="excercise-container">
      <h5>Videos</h5>
      <p>Total 233 workout videos</p>
      <hr></hr>
      {data.map((sin) => (
        <div className="vedio-excercise d-flex" key={sin.id}>
          <div>
            <img className="image-excer" src={sin.icon} alt="" />
          </div>
          <div className="mrg-left-20 txt-excercise">
            <h3>{sin.txt1}</h3>
            <p>{sin.txt2}</p>
            <p className="a-tag">{sin.txt3}</p>
          </div>
          <div className="paid-button">
            <button>{sin.btnTxt}</button>
          </div>
        </div>
      ))}
    </div>
  );
};
