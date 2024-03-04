import React from "react";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import CommonNavbar from "../components/CommonNavbar";
import TeamsComponent from "../components/TeamsComponent";
import "../componentscss/Teams.css";

function Team() {
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
        <div className="teams-page">
          <h1 style={{ fontWeight: "bold" }}>{title} Teams</h1>
          <hr />
          <TeamsComponent />
        </div>
      </div>
    </div>
  );
}

export default Team;
