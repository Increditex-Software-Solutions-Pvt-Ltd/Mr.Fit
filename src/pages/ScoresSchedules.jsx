import React from "react";
import CommonNavbar from "../components/CommonNavbar";
import ScoresSchedulesComp from "../components/ScoresSchedulesComp";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import "../css/PagesCss/ScoresSchedules.css";
import { useWindowWidth } from "../contexts/WindowWidth";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import Footer from "../components/Footer";
import EuroScoresSchedulesComp from "../components/EuroScoresSchedulesComp";

function ScoresSchedules() {
  const { title } = useParams();
  const tabs = useTabContext();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });
  const windowWidth = useWindowWidth();
  const subCategories = subs[0].subCategories || 0;
  return (
    <div>
      {windowWidth > 750 ? (
        <CommonNavbar
          subTabs={subs[0].subTitles}
          subCategories={subCategories}
        />
      ) : (
        <MobileCommonNavbar
          subTabs={subs[0].subTitles}
          subCategories={subCategories}
        />
      )}
      <div className="container">
        <div className="scores-schedules-page">
          <h3 style={{ fontWeight: "bold" }}>{title} Schedule</h3>
          <hr />
          {title === "Euro 2024" || title === "Europa League" ? (
            <EuroScoresSchedulesComp title={title} />
          ) : (
            <ScoresSchedulesComp />
          )}
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

export default ScoresSchedules;
