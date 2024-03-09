import React from "react";

import { useTabContext } from "../contexts/TabsContext";
import { useParams } from "react-router-dom";
import CommonNavbar from "../components/CommonNavbar";
import FantasyComp from "../components/FantasyComp";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";

function Fantasy() {
  const tabs = useTabContext();
  const { title } = useParams();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  const windowWidth = useWindowWidth();
  return (
    <>
      {windowWidth > 750 ? (
        <CommonNavbar subTabs={subs[0].subTitles} />
      ) : (
        <MobileCommonNavbar subTabs={subs[0].subTitles} />
      )}
      <FantasyComp title={title} />
    </>
  );
}

export default Fantasy;
