import React from "react";
import "./DashLeft.css";
import threeDot from "../../assets/images/threedot.svg";
const DashboardLeft = () => {
  return (
    <>
      <div className="dashboard-left-upper">
        <div className="recent-activity">
          <h4>Recently Activity</h4>
        </div>
        <div className="timer-text">
          <span>10.40 AM, Fri 10 Sept 2021</span>
        </div>
        <h3
          style={{ fontSize: "1.3rem", fontWeight: 500, marginBottom: ".5rem" }}
        >
          You Posted a New Job
        </h3>
        <p>
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </p>
        <div className="footer-part">
          <span>Today you makes 12 Activity</span>
          <button>See All Activity</button>
        </div>
      </div>
      <div className="dashboard-left-down">
        <div className="dashboard-left-down-inner">
          <div className="text-box">
            <p>Upcoming Schedule</p>
            <span>Today, 13 Sep 2021</span>
          </div>

          <div>
            <span>Priority</span>
          </div>
          {/* information text */}
          <div className="infromation-text">
            <div className="card-box">
              <div>
                <p>Review candidate applications </p>
                <span>Today - 11.30 AM</span>
              </div>

              <div>
                <img src={threeDot} alt="" />
              </div>
            </div>

            <div className="card-box">
              <div>
                <p>Interview with candidates </p>
                <span>Today - 10.30 AM</span>
              </div>
              <div>
                <img src={threeDot} alt="" />
              </div>
            </div>

            <div className="card-box">
              <div>
                <p>Metting with Manager</p>
                <span>Today - 11.30 AM</span>
              </div>
              <div>
                <img src={threeDot} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-fotter-text">
          <span>Create a New Schedule</span>
        </div>
      </div>
    </>
  );
};

export default DashboardLeft;
