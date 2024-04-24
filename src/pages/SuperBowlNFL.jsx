import React from "react";
import { useTabContext } from "../contexts/TabsContext";
import { useParams } from "react-router-dom";
import { useWindowWidth } from "../contexts/WindowWidth";
import CommonNavbar from "../components/CommonNavbar";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import SuperBowlNFLComp from "../components/SuperBowlNFLComp";
import Footer from "../components/Footer";

const SuperBowlNFL = () => {
  const tabs = useTabContext();
  const { title } = useParams();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  const windowWidth = useWindowWidth();

  return (
    <div>
      <>
        {windowWidth > 750 ? (
          <CommonNavbar subTabs={subs[0].subTitles} />
        ) : (
          <MobileCommonNavbar subTabs={subs[0].subTitles} />
        )}
        <SuperBowlNFLComp title={title} />
        <section className="bg-dark">
          <div className="p-4">
            <Footer />
          </div>
        </section>
      </>
    </div>
  );
};

export default SuperBowlNFL;
