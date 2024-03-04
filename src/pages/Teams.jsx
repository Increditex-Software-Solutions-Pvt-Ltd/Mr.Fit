import React from "react";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import CommonNavbar from "../components/CommonNavbar";

function Team() {
  const { title } = useParams();
  const tabs = useTabContext();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  return (
    <div>
      <CommonNavbar subTabs={subs[0].subTitles} />
      <h1>{title} Teams</h1>
    </div>
  );
}

export default Team;
