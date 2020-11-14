/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/Small_img_4.png";
import Image1 from "../../assets/images/Small_img_5.png";
import Image2 from "../../assets/images/Product_image_7.png";
import Image3 from "../../assets/images/Product_image_9.png";
export default () => {
  const data = [
    {
      id: 0,
      image: Image,
      heading: "Protein Powder",
      paragraph: "$16.00 USD",
      icon: "PENDING",
      time: "View Details",
    },
    {
      id: 1,
      image: Image1,
      heading: "Protein Powder",
      paragraph: "$16.00 USD",
      icon: "PENDING",
      time: "View Details",
    },
    {
      id: 2,
      image: Image2,
      heading: "Protein Powder",
      paragraph: "$16.00 USD",
      icon: "PENDING",
      time: "View Details",
    },
    {
      id: 3,
      image: Image3,
      heading: "Protein Powder",
      paragraph: "$16.00 USD",
      icon: "PENDING",
      time: "View Details",
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
    <div className="msg-main-order-list">
      <h5 className="fnt-w-700">My Order List</h5>
      {data.map((sin) => (
        <div className="msg-contant mrg-top-30">
          <div className="d-flex jst-cont-between">
            <div className="d-flex mrg-top-15 aln-itm-c ">
              <div>
                <img className="img" src={sin.image} alt="" />
              </div>
              <div className="mrg-left-40">
                <h6 className="fnt-w-700">{sin.heading}</h6>
                <p className="p-dollor">{sin.paragraph}</p>
                <p className="a-tag">{sin.time}</p>
              </div>
            </div>
            <div>
              <p className="pending">{sin.icon}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
