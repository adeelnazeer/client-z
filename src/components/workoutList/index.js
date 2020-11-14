/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/test.jpg";
import Dot from "../../assets/images/icons/Dot_menu.png";
export default () => {
  const data = [
    {
      id: 0,
      image: Image,
      heading: "Workout title",
      paragraph: "12 videos",
      icon: Dot,
    },
    {
      id: 1,
      image: Image,
      heading: "Workout title",
      paragraph: "12 videos",
      icon: Dot,
    },
    {
      id: 2,
      image: Image,
      heading: "Workout title",
      paragraph: "12 videos",
      icon: Dot,
    },
    {
      id: 3,
      image: Image,
      heading: "Workout title",
      paragraph: "12 videos",
      icon: Dot,
    },
    // {
    //   id: 4,
    //   image: Image,
    //   heading: "George Smith",
    //   paragraph: "Los Angeles",
    //   icon: Dot,
    // },
    // {
    //   id: 5,
    //   image: Image,
    //   heading: "George Smith",
    //   paragraph: "Lora ipsam dolor sit amet",
    //   date: "Close X",
    //   time: "20m ago",
    // },
  ];
  return (
    <div className="msg-main-workout-list">
      <div className="d-flex jst-cont-between alg-itm-end">
        <h5>Workout list</h5>
        <button className="add-new-list">Add New List</button>
      </div>
      {data.map((sin) => (
        <div className="msg-contant mrg-top-20">
          <div className="d-flex jst-cont-between">
            <div className="d-flex mrg-top-15 ">
              <div>
                <img className="img" src={sin.image} alt="" />
              </div>
              <div className="mrg-left-20 mrg-top-20">
                <h4 className="fnt-w-700">{sin.heading}</h4>
                <p>{sin.paragraph}</p>
                {/* <p className="mrg-top-30">{sin.time}</p> */}
              </div>
            </div>
            <div>
              <img src={sin.icon} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
