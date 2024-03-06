import React from "react";

import { useTabContext } from "../contexts/TabsContext";
import { useParams } from "react-router-dom";
import CommonNavbar from "../components/CommonNavbar";
import FantasyComp from "../components/FantasyComp";

function Fantasy() {
  const tabs = useTabContext();
  const { title } = useParams();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });
  return (
    <>
      <CommonNavbar subTabs={subs[0].subTitles} />
      <FantasyComp title={title} />
    </>
  );
}

export default Fantasy;
