import React from "react";
import CommonhomeComp from "../components/CommonhomeComp";
import { useTabContext } from "../contexts/TabsContext";
import { useParams } from "react-router-dom";
import CommonNavbar from "../components/CommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";
import MobileCommonNavbar from "../components/MobileCommonNavbar";

const Commonhome = () => {
  const tabs = useTabContext();
  let { title } = useParams();
  const windowWidth = useWindowWidth();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });
  if (title === "NCAAF") {
    title = "College Footbaal";
  }
  const subCategories = subs[0].subCategories || 0;

  return (
    <>
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

      <CommonhomeComp title={title} logo={subs[0].logo} />
    </>
  );
};

export default Commonhome;
