import React from "react";
import { useParams } from "react-router-dom";
import StandingsComp from "../components/StandingsComp";
import CommonNavbar from "../components/CommonNavbar";
import { useTabContext } from "../contexts/TabsContext";
import "../css/PagesCss/Standings.css";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";

function Standings() {
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
        <div className="standings-page">
          <h1 style={{ fontWeight: "bold" }}>{title} Table</h1>
          <hr />
          <StandingsComp />
        </div>
      </div>
    </div>
  );
}

export default Standings;
