/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/zym_2.png";
export default () => {
  const data = [
    {
      id: 0,
      image: Image,
      heading: "George Smith",
      paragraph: "Lora ipsam dolor sit amet",
      date: "May 12",
    },
    {
      id: 1,
      image: Image,
      heading: "George Smith",
      paragraph: "Lora ipsam dolor sit amet",
      date: "May 12",
    },
    {
      id: 2,
      image: Image,
      heading: "George Smith",
      paragraph: "Lora ipsam dolor sit amet",
      date: "May 12",
    },
    {
      id: 3,
      image: Image,
      heading: "George Smith",
      paragraph: "Lora ipsam dolor sit amet",
      date: "May 12",
    },
    {
      id: 4,
      image: Image,
      heading: "George Smith",
      paragraph: "Lora ipsam dolor sit amet",
      date: "May 12",
    },
    {
      id: 5,
      image: Image,
      heading: "George Smith",
      paragraph: "Lora ipsam dolor sit amet",
      date: "May 12",
    },
  ];
  return (
    <div className="msg-main">
      <h3>Recent messages</h3>
      {data.map((sin) => (
        <div className="msg-contant mrg-top-20">
          <div className="d-flex jst-cont-between">
            <div className="d-flex mrg-top-15">
              <div>
                <img src={sin.image} alt="" />
              </div>
              <div className="mrg-left-20">
                <h6 className="fnt-w-700">{sin.heading}</h6>
                <p>{sin.paragraph}</p>
              </div>
            </div>
            <div>
              <p>{sin.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
