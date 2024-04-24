import React from "react";
import RecruitingComp from "../components/RecruitingComp";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import CommonNavbar from "../components/CommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useTabContext } from "../contexts/TabsContext";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

const Recruiting = () => {
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
        <RecruitingComp title={title} />
      </div>
      <section className="bg-dark">
        <div className="p-4">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Recruiting;
