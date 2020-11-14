/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import Image from "../../assets/images/Timeline_image_2.png";
import ProductImage from "../../assets/images/Small_img_4.png";
import ProductImage2 from "../../assets/images/Small_img_5.png";
import Cart from "../../assets/images/icons/supermarket.png";
export default () => {
  return (
    <div className="product-container">
      <div className="inner">
        <div className="mrg-top-30">
          <h4>Fitness Product</h4>
        </div>
        <div className="tab mrg-top-30">
          <div>
            <h5 className="fit"> Fitness Product</h5>
          </div>
          <div>
            <h5>Fitness Product</h5>
          </div>
        </div>
      </div>
      <div>
        <img className="image-product" src={Image} alt="" />
      </div>
      <div className="product-content">
        <div className="contant-inner">
          <div>
            <img className="product-img" src={ProductImage} alt="" />
          </div>
          <div className="mrg-left-30">
            <h6>Zurvos Protein Powder</h6>
            <li>5lb of chocolate</li>
            <li>28G Servings</li>
            <div className="btn-buy">
              <div>
                <button>BUY NOW</button>
              </div>
              <div className="mrg-left-20">
                <img className="cart" src={Cart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-content">
        <div className="contant-inner">
          <div>
            <img className="product-img" src={ProductImage2} alt="" />
          </div>
          <div className="mrg-left-30">
            <h6>Zurvos Protein Powder</h6>
            <li>5lb of chocolate</li>
            <li>28G Servings</li>
            <div className="btn-buy">
              <div>
                <button>BUY NOW</button>
              </div>
              <div className="mrg-left-20">
                <img className="cart" src={Cart} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
