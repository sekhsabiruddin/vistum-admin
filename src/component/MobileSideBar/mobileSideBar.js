import React, { useContext } from "react";
import { UserContext } from "../../context/contextUser";
import dashboardIcon from "../../assets/images/ic_dashboard.svg";
import depermentIcon from "../../assets/images/ic_department.svg";
import employeIcon from "../../assets/images/ic_employee.svg";
import requirementIcon from "../../assets/images/ic_recruitment.svg";
import sheduleIcon from "../../assets/images/ic_calendar.svg";
import supportIcon from "../../assets/images/ic_support.svg";
import settingIcon from "../../assets/images/ic_settings.svg";
import "./mobile.css";

const MobileSideBar = () => {
  const { buggercliked, handleBuggerMenu } = useContext(UserContext);

  return buggercliked ? (
    <div className="mobile-side-bar">
      <div className="left-component-main">
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
      {/* Other menu */}
      <div className="left-component-other">
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
  ) : null;
};

export default MobileSideBar;
