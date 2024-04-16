import React from "react";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import { useWindowWidth } from "../contexts/WindowWidth";
import NFLDraftComp from "../components/NFLDraftComp";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import CommonNavbar from "../components/CommonNavbar";

const NFLDraft = () => {
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
        <NFLDraftComp title={title} />
      </>
    </div>
  );
};

export default NFLDraft;
