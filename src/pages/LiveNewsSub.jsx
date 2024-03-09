import React from "react";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import CommonNavbar from "../components/CommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import LiveNewsComp from "../components/LiveNewsComp";

function LiveNewsSub() {
  const { title } = useParams();
  const tabs = useTabContext();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });
  const windowWidth = useWindowWidth();

  const dummyNews = [
    {
      headline:
        "Premier League live scores and news: Latest Manchester United, Arsenal updates and more",
      description:
        "Follow the latest news from the Premier League, MLS, WSL and across Europe",
      image:
        "https://cdn-media.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn-media.theathletic.com/skGcGH2g7Pan_UpJ4rHRP0oAh_1440x960.jpg",
      authorProfilePic:
        "https://cdn.theathletic.com/cdn-cgi/image/width=48%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/01/09115525/Headshot..jpeg",
      authorName: "Nnamdi Onyeagwara",
      publishDateTime: "9 March 2024 at 4:17 pm GMT+5:30",
    },
    // Add more dummy news objects here
  ];

  return (
    <>
      {windowWidth > 750 ? (
        <CommonNavbar subTabs={subs[0].subTitles} />
      ) : (
        <MobileCommonNavbar subTabs={subs[0].subTitles} />
      )}
      <div className="container">
        <LiveNewsComp news={dummyNews} />
      </div>
    </>
  );
}

export default LiveNewsSub;
