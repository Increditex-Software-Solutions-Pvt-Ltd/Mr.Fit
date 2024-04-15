import React, { useState } from "react";
import TeamsDetailsHome from "../SubComponents/TeamsDetailsHome";
import TeamDScoresSchedule from "../SubComponents/TeamDScoresSchedule";
import TeamDRoster from "../SubComponents/TeamDRoster";
import TeamDStats from "../SubComponents/TeamDStats";

function teamDetailsComp({ teamName, title }) {
  const [activeTab, setActiveTab] = useState("pills-home");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div style={{ margin: "20px 0px" }}>
      <div className="">
        <div className="teamNavbar row border-bottom">
          <div
            className="col-lg-3 col-sm-12"
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* <img src={logo} alt="logo" width="40px" /> */}
            <h4 className="pt-1">{teamName}</h4>
            <div className="vr-line"></div>
          </div>

          <div className="col-lg-9 col-sm-12 pt-3">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "pills-home" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("pills-home")}
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "pills-ScoresSchedule" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("pills-ScoresSchedule")}
                  id="pills-ScoresSchedule-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-ScoresSchedule"
                  type="button"
                  role="tab"
                  aria-controls="pills-ScoresSchedule"
                  aria-selected="false"
                >
                  Scores & Schedule
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "pills-Roster" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("pills-Roster")}
                  id="pills-Roster-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Roster"
                  type="button"
                  role="tab"
                  aria-controls="pills-Roster"
                  aria-selected="false"
                >
                  Roster
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`nav-link ${
                    activeTab === "pills-Stats" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("pills-Stats")}
                  id="pills-Stats-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-Stats"
                  type="button"
                  role="tab"
                  aria-controls="pills-Stats"
                  aria-selected="false"
                >
                  Stats
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content ms-1" id="pills-tabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "pills-home" ? "show active" : ""
            }`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <TeamsDetailsHome
              handleTabClick={handleTabClick}
              teamName={teamName}
              title={title}
            />
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "pills-ScoresSchedule" ? "show active" : ""
            }`}
            id="pills-ScoresSchedule"
            role="tabpanel"
            aria-labelledby="pills-ScoresSchedule-tab"
          >
            <TeamDScoresSchedule teamName={teamName} />
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "pills-Roster" ? "show active" : ""
            }`}
            id="pills-Roster"
            role="tabpanel"
            aria-labelledby="pills-Roster-tab"
          >
            <TeamDRoster teamName={teamName} />
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "pills-Stats" ? "show active" : ""
            }`}
            id="pills-Stats"
            role="tabpanel"
            aria-labelledby="pills-Stats-tab"
          >
            <TeamDStats teamName={teamName} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default teamDetailsComp;
