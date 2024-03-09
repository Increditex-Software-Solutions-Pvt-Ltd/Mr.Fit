import React from "react";
import CommonNavbar from "../components/CommonNavbar";
import ScoresSchedulesComp from "../components/ScoresSchedulesComp";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import "../css/PagesCss/ScoresSchedules.css";
import { useWindowWidth } from "../contexts/WindowWidth";
import MobileCommonNavbar from "../components/MobileCommonNavbar";

function ScoresSchedules() {
  const { title } = useParams();
  const tabs = useTabContext();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });
  const windowWidth = useWindowWidth();
  return (
    <div>
      {windowWidth > 750 ? (
        <CommonNavbar subTabs={subs[0].subTitles} />
      ) : (
        <MobileCommonNavbar subTabs={subs[0].subTitles} />
      )}
      <div className="container">
        <div className="scores-schedules-page">
          <h3 style={{ fontWeight: "bold" }}>{title} Schedule</h3>
          <hr />
          <ScoresSchedulesComp />
        </div>
      </div>
    </div>
  );
}

export default ScoresSchedules;
