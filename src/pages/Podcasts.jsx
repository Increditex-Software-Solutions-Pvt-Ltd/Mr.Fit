import React from "react";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import CommonNavbar from "../components/CommonNavbar";
import PodcastsComp from "../components/PodcastsComp";
import "../css/PagesCss/Podcasts.css";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";

function Podcasts() {
  const { title } = useParams();
  const tabs = useTabContext();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });
  const windowWidth = useWindowWidth();
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingBottom: "20px",
      }}
    >
      {windowWidth > 750 ? (
        <CommonNavbar subTabs={subs[0].subTitles} />
      ) : (
        <MobileCommonNavbar subTabs={subs[0].subTitles} />
      )}
      <div className="container">
        <div className="podcasts-page">
          <h1 style={{ fontWeight: "bold" }}>
            Listen to {title} podcasts, exclusively from The Athletic
          </h1>
          <h4>
            Experience in-depth analysis and exclusive storytelling. Join the
            conversation across your teams, clubs and leagues.
          </h4>
          <button
            style={{
              padding: "5px 15px",
              borderRadius: "5px",
              fontWeight: "bold",
              backgroundColor: "whitesmoke",
              margin: "10px 0px",
            }}
          >
            Start Fre Trial
          </button>
          <hr />
          <PodcastsComp />
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
