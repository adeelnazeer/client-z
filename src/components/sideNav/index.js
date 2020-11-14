/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
export default () => {
  let url = typeof window !== "undefined" ? window.location.pathname : "";
  return (
    <div className="container-side">
      <div className="inner-sidenav">
        <div className="sidenav-contents">
          <h5>Influencer Dashboard</h5>
          <Link to="/gyms">
            <h5
              className={
                url === "/gyms"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Gyms Near Me
            </h5>
          </Link>
          <Link to="/tutorial">
            <h5
              className={
                url === "/tutorial"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Tutorials
            </h5>
          </Link>
          <Link to="/product">
            <h5
              className={
                url === "/product"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Products
            </h5>
          </Link>
          <Link to="/Build-workout">
            <h5
              className={
                url === "/Build-workout"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Build a Workout
            </h5>
          </Link>
          <Link to="/exercise">
            <h5
              className={
                url === "/exercise"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Exercise Library
            </h5>
          </Link>
          <Link to="/workout">
            <h5
              className={
                url === "/workout"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Work Out Buddy
            </h5>
          </Link>
          <Link to="/session">
            <h5
              className={
                url === "/session"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Sessions
            </h5>
          </Link>
          <Link to="/transaction">
            <h5
              className={
                url === "/transaction"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Transactions
            </h5>
          </Link>
          <Link to="/faqs">
            <h5
              className={
                url === "/faqs"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              FAQs
            </h5>
          </Link>
          <Link to="/feedback">
            <h5
              className={
                url === "/feedback"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Give Feedback
            </h5>
          </Link>
          <Link to="/contact">
            <h5
              className={
                url === "/contact"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Contact Zurvos
            </h5>
          </Link>
          <Link to="/about">
            <h5
              className={
                url === "/about"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              About us
            </h5>
          </Link>
          {/* <Link to="/subscription">
            <h5
              className={
                url === "/subscription"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              My Subscription
            </h5>
          </Link> */}

          {/* <h5>Transactions</h5> */}
          {/* <Link to="/dashboard">
            <h5
              className={
                url === "/dashboard"
                  ? "background-color cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Privacy Policy
            </h5>
          </Link> */}
        </div>
        <div className="signout-options ">
          <ul className="row jus-con-bet color-grey padding-40">
            <div>
              <li>Account Settings</li>
            </div>
            <div>
              {" "}
              <li>Log out</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
