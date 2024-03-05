import React from "react";
import { useParams } from "react-router-dom";
import StandingsComp from "../components/StandingsComp";
import CommonNavbar from "../components/CommonNavbar";
import { useTabContext } from "../contexts/TabsContext";

function Standings() {
  const { title } = useParams();
  const tabs = useTabContext();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  return (
    <div>
      <CommonNavbar subTabs={subs[0].subTitles} />
      <div className="container">
        <div className="podcasts-page">
          <h1 style={{ fontWeight: "bold" }}>{title} Table</h1>
          <hr />
          <StandingsComp />
        </div>
      </div>
    </div>
  );
}

export default Standings;
