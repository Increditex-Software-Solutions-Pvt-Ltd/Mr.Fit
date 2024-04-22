import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useWindowWidth } from "../contexts/WindowWidth";
import CommonNavbar from "../components/CommonNavbar";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import { useTabContext } from "../contexts/TabsContext";
import ProspectsComp from "../components/ProspectsComp";

const Prospects = () => {
  const tabs = useTabContext();
  const { title, name } = useParams();
  const navigate = useNavigate();

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
        <ProspectsComp title={title} name={name} />
      </>
    </div>
  );
};

export default Prospects;
