/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Header from "../components/header/header";
import SideNav from "../components/sideNav/index";
import CreatePost from "../components/createPost/index";
import RightSideNav from "../components/sideNavRight/index";
export default () => {
  return (
    <div className="container-backkground ">
      <Header />
      <div className="row contaner-row">
        <div className="col-3 side-nav-left mrg-top-5">
          <SideNav />
        </div>
        <div className="col-6 center-container">
            <div className="inner-column">
          <CreatePost />
          </div>
        </div>
        <div className="col-3 right-sidebar">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};
