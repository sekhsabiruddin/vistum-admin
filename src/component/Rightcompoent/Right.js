import React, { useContext } from "react";
import "./Right.css";
import searchIcon from "../../assets/images/searchicon.svg";
import chartIcon from "../../assets/images/bi_chat-left-dots-fill.svg";
import notificationIcon from "../../assets/images/ic_round-notifications.svg";
import userPhoto from "../../assets/images/userphoto.svg";
import twoperIocn from "../../assets/images/twoperiocn.svg";
import fiveIocn from "../../assets/images/fivepericon.svg";
import burgerMenu from "../../assets/images/ic_burgermenu.svg";
import crrosIcon from "../../assets/images/crossicon.svg";
import Footer from "./Footer";
import DashboardLeft from "./DashboardLeft";
import MobileSideBar from "../MobileSideBar/mobileSideBar";
import { UserContext } from "../../context/contextUser";
const Right = () => {
  const { buggercliked, handleBuggerMenu, handleCrossMenu } =
    useContext(UserContext);
  function handleClickMenu() {
    console.log("Button clicked");
    handleBuggerMenu(); // Call the handleBuggerMenu function from the context
  }
  function handleClickCross() {
    handleCrossMenu();
  }
  return (
    <div className="right-component">
      <div className="right-component-navbar">
        <div className="searbar-buggermenu">
          <div>
            {buggercliked ? (
              <img
                src={crrosIcon}
                alt=""
                className="crrosicon-icon"
                onClick={handleClickCross}
              />
            ) : (
              <img
                src={burgerMenu}
                alt=""
                className="buggermenu-icon"
                onClick={handleClickMenu}
              />
            )}
          </div>
          <div className="right-component-serach-bar">
            <input type="text" placeholder="search" />
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <div className="right-component-uper-icon">
          <div>
            <img src={chartIcon} alt="" />
            <img src={notificationIcon} alt="" />
            <img src={userPhoto} alt="" />
            <span className="name-text">Sabiruudin</span>
          </div>
        </div>
      </div>
      <hr />
      {/* //mobile side bar */}
      <MobileSideBar />
      {/* //main dashboard */}
      <h3 className="dashboard">Dashboard</h3>
      <div className="dashboard-main">
        <div className="dashboard-left">
          {/* //upper dash 3 first div here */}
          <div className="dashboard-left-first">
            <div>
              <p>Available Position</p>
              <h2>24</h2>
              <p>4 Urgently needed</p>
            </div>
            <div>
              <p>Available Position</p>
              <h2>10</h2>
              <p>4 Urgently needed</p>
            </div>
            <div>
              <p>New Employees </p>
              <h2> 24</h2>
              <p>Department</p>
            </div>
          </div>
          {/* //upper dash 2 middle div here */}
          <div className="dashboard-left-mid">
            <div className="box">
              <div>
                <p>Total Employees</p>
                <h2>216</h2>
                <p className="small-text">
                  <span>120 men</span>
                  <br />
                  <span>90 Women</span>
                </p>
              </div>
              <div>
                <img src={twoperIocn} alt="" />
              </div>
            </div>

            <div className="box">
              <div>
                <p>Talent Request</p>
                <h2>16</h2>
                <p className="small-text">
                  <span>6 men</span>
                  <br />
                  <span>10 Women</span>
                </p>
              </div>
              <div>
                <img src={fiveIocn} alt="" />
              </div>
            </div>
          </div>
          <div className="dashboard-left-bottom">
            <Footer />
          </div>
        </div>

        <div className="dashboard-right">
          <DashboardLeft />
        </div>
      </div>
    </div>
  );
};

export default Right;
