import React from "react";
import "./Footer.css";
import bellIcon from "../../assets/images/bellicon.svg";
import threeDot from "../../assets/images/threedot.svg";
const Footer = () => {
  return (
    <div className="foter-outer">
      <div className="inner-div">
        <div className="upper-text">
          <p>Announcement</p>
          <span>Today, 13 Sep 2021</span>
        </div>

        <div className="infromation-box">
          <div className="card">
            <div>
              <p>Outing schedule for every departement 5 Minutes ago</p>
              <span>5 minitues ago</span>
            </div>
            <div>
              <img src={bellIcon} alt="" />
              <img src={threeDot} alt="" />
            </div>
          </div>

          <div className="card">
            <div>
              <p>Meeting HR Department</p>
              <span> Yesterday, 12:30 PM</span>
            </div>
            <div>
              <img src={bellIcon} alt="" />
              <img src={threeDot} alt="" />
            </div>
          </div>

          <div className="card">
            <div>
              <p>
                IT Department need two more talents for UX/UI <br />
                Designer position
              </p>
              <span>Yesterday, 09:15 AM</span>
            </div>
            <div>
              <img src={bellIcon} alt="" />
              <img src={threeDot} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-fotter-text">
        <span>See All Announcement</span>
      </div>
    </div>
  );
};

export default Footer;
