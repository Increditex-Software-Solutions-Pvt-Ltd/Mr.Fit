import React from "react";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useTabContext } from "../contexts/TabsContext";
import TeamDetailsComp from "../components/TeamDetailsComp";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";

function TeamDetails() {
  const tabs = useTabContext();
  const windowWidth = useWindowWidth();
  return (
    <div>
      {windowWidth > 750 ? (
        <Navbar tabs={tabs} />
      ) : (
        <MobileNavbar tabs={tabs} />
      )}
      <div className="container">
        <TeamDetailsComp />
      </div>
    </div>
  );
}

export default TeamDetails;
