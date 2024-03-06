import React from "react";
import { useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import CommonNavbar from "../components/CommonNavbar";

function LiveNewsSub() {
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
      <div className="container">
        <h1>Live News Sub</h1>
      </div>
    </div>
  );
}

export default LiveNewsSub;
