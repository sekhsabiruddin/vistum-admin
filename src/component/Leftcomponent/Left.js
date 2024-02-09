import React, { useContext, useEffect, useRef } from "react";
import "./Left.css";
import logo from "../../assets/images/vasitumlogo.png";
import dashboardIcon from "../../assets/images/ic_dashboard.svg";
import depermentIcon from "../../assets/images/ic_department.svg";
import employeIcon from "../../assets/images/ic_employee.svg";
import requirementIcon from "../../assets/images/ic_recruitment.svg";
import sheduleIcon from "../../assets/images/ic_calendar.svg";
import supportIcon from "../../assets/images/ic_support.svg";
import settingIcon from "../../assets/images/ic_settings.svg";
import { UserContext } from "../../context/contextUser";
const Left = () => {
  const { buggercliked, handleBuggerMenu } = useContext(UserContext);
  console.log("Buger is ", buggercliked);
  const leftComponentRef = useRef(null);

  return (
    <div className="left-component" ref={leftComponentRef}>
      <div className="left-component-logo">
        <img src={logo} alt="Vasitum Logo" />
      </div>
      <div className="left-component-main">
        <span className="main-menu-text">MAIN MENU</span>
        <div className="sidebar-main-menu">
          <div>
            <img src={dashboardIcon} alt="Dashboard Icon" />
            <span>Dashboard</span>
          </div>
          <div>
            <img src={requirementIcon} alt="Requirement Icon" />
            <span>Requirement</span>
          </div>
          <div>
            <img src={sheduleIcon} alt="Shedule Icon" />
            <span>Schedule</span>
          </div>
          <div>
            <img src={employeIcon} alt="Employee Icon" />
            <span>Employee</span>
          </div>
          <div>
            <img src={depermentIcon} alt="Department Icon" />
            <span>Department</span>
          </div>
        </div>
      </div>
      {/* //other menu */}
      <div className="left-component-other">
        <span className="other-text">OTHERS </span>
        <div className="sidebar-main-menu">
          <div>
            <img src={supportIcon} alt="Dashboard Icon" />
            <span>Support</span>
          </div>
          <div>
            <img src={requirementIcon} alt="Requirement Icon" />
            <span>Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
