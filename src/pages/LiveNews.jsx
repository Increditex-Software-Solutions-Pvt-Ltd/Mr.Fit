import React from "react";
import { useTabContext } from "../contexts/TabsContext";
import Navbar from "../components/Navbar";

function LiveNews() {
  const tabs = useTabContext();
  return (
    <div>
      <Navbar tabs={tabs} />
      <div className="container">
        <h1>Live News</h1>
      </div>
    </div>
  );
}

export default LiveNews;
