/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import Logo from "../../assets/images/zurvos full color .png";
import Search from "../../assets/images/icons/Search.png";
import Notification from "../../assets/images/icons/Notifications.png";
import ProfilePic from "../../assets/images/Profile_pic_1.png";
import Dot from "../../assets/images/icons/Dot_menu.png";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./style.scss";

export default () => {
  const [show, setShow] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="container-fluid header-main-desktop">
        <nav class="navbar navbar-light bg-light">
          <Link to="/post">
            <span class="navbar-brand">
              <img className="logo" src={Logo} alt="" />
            </span>
          </Link>
          <form class="form-inline">
            <Link to="/gyms">
              <img className="icon-height mrg-right-30" src={Search} alt="" />
            </Link>
            <Link to="/notification">
              <img
                className="icon-height mrg-right-30"
                src={Notification}
                alt=""
              />
            </Link>
            <img
              className="profile-height mrg-right-5 "
              src={ProfilePic}
              alt=""
            />
            <div className="mrg-right-30">
              <Link to="/profile">
                <span className="fnt-w-700">Turner Oaks</span>
              </Link>
              <div className="fnt-w-500">
                <p href="#" className="a-tag">
                  $34.00 USD
                </p>
              </div>
            </div>
            <img
              className="cursor-pointer"
              src={Dot}
              alt=""
              onClick={() => {
                show ? setShow(false) : setShow(true);
              }}
            />
          </form>
        </nav>
        {show && (
          <div className="model">
            <div>
              <Link to="/message">
                <h6>Message</h6>
              </Link>
              <hr></hr>
              <Link to="/invitation">
                <h6>Invitations</h6>
              </Link>
              <hr></hr>
              <Link to="/buddy-list">
                <h6>Buddy List</h6>
              </Link>
              <hr></hr>
              <Link to="/workout-list">
                <h6>My Workouts LIst</h6>
              </Link>
              <hr></hr>
              <Link to="/order-list">
                <h6>Order List</h6>
              </Link>
              <hr></hr>
              <Link to="/subscription">
                <h6>My Subscription</h6>
              </Link>
              <hr></hr>
              <Link to="/buddy-list">
                <h6>Bugs Reports</h6>
              </Link>
              <hr></hr>
              <Link to="/payment">
                <h6>Add Payment Method</h6>
              </Link>
              <hr></hr>
              <Link to="/dashboard">
                <h6>Privacy Policy</h6>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="show-for-mobile">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
            <Link to="/post">
              <img
                style={{
                  background: "white",
                  width: "80px",
                  margin: "8px",
                }}
                className="lower"
                src={Logo}
                alt="Not Found"
              />
            </Link>
          </div>
          {/* <div>
            <img className="cursor-pointer dot-img-mobile" src={Dot} alt="" />
          </div> */}
          {isOpen && (
            <div className="inner-div-">
              <div className="d-flex jst-cont-between">
                <Link to="/gyms">
                  <p>Gyms Near Me</p>
                </Link>
                <Link to="/tutorial">
                  <p>Tutorials</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/product">
                  <p>Products</p>
                </Link>
                <Link to="/Build-workout">
                  <p>Build a Workout</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/exercise">
                  <p>Excercise Library</p>
                </Link>
                <Link to="/workout">
                  <p>Work Out Buddy</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/session">
                  <p>Sessions</p>
                </Link>
                <Link to="/transaction">
                  <p>Transactions</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/faqs">
                  <p>FAQs</p>
                </Link>
                <Link to="/feedback">
                  <p>Give FeedBack</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/gyms">
                  <p>Search</p>
                </Link>
                <Link to="/contact">
                  <p>Contact Zurvos</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/about">
                  <p>About us</p>
                </Link>
                <Link to="/message">
                  <p>Message</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/invitation">
                  <p>Invitations</p>
                </Link>
                <Link to="/buddy-list">
                  <p>Buddy List</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/workout-list">
                  <p>My Workouts List</p>
                </Link>
                <Link to="/order-list">
                  <p>Order List</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/subscription">
                  <p>My Subscription</p>
                </Link>
                <Link to="/buddy-list">
                  <p>Bugs Reports</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/payment">
                  <p>Add Payment Method</p>
                </Link>
                <Link to="/dashboard">
                  <p>Privacy Policy</p>
                </Link>
              </div>
              <div className="d-flex jst-cont-between">
                <Link to="/profile">
                  <p>Profile</p>
                </Link>
                <Link to="/notification">
                  <p>Notification</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
