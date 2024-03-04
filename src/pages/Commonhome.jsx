import React from "react";
import CommonhomeComp from "../components/CommonhomeComp";

import { useTabContext } from "../contexts/TabsContext";
import { useParams } from "react-router-dom";
import CommonNavbar from "../components/CommonNavbar";

const Commonhome = () => {
  const tabs = useTabContext();
  const { title } = useParams();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  console.log(tabs, subs[0].subTitles);

  return (
    <>
      <CommonNavbar subTabs={subs[0].subTitles} />

      <CommonhomeComp title={title} logo={subs[0].logo} />
    </>
  );
};

export default Commonhome;
