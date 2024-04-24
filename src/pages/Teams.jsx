import React from "react";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import CommonNavbar from "../components/CommonNavbar";
import TeamsComponent from "../components/TeamsComponent";
import "../css/PagesCss/Teams.css";
import { useWindowWidth } from "../contexts/WindowWidth";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import Footer from "../components/Footer";

function Team() {
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
        <div className="teams-page">
          <h1 style={{ fontWeight: "bold" }}>{title} Teams</h1>
          <hr />
          <TeamsComponent title={title} />
        </div>
      </div>
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Team;
