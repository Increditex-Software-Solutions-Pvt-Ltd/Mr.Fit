import React from "react";
import { useParams } from "react-router-dom";
import StandingsComp from "../components/StandingsComp";
import CommonNavbar from "../components/CommonNavbar";
import { useTabContext } from "../contexts/TabsContext";
import "../css/PagesCss/Standings.css";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";
import Footer from "../components/Footer";

function Standings() {
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
        <div className="standings-page">
          <h1 style={{ fontWeight: "bold" }}>{title} Table</h1>
          <hr />
          <StandingsComp />
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

export default Standings;
