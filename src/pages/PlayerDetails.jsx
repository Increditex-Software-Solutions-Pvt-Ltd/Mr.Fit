import React from "react";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useTabContext } from "../contexts/TabsContext";
import PlayerDComp from "../components/PlayerDComp";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import { useParams } from "react-router-dom";

const PlayerDetails = () => {
  const tabs = useTabContext();
  const windowWidth = useWindowWidth();
  const { title, playername } = useParams();
  return (
    <div>
      {windowWidth > 750 ? (
        <Navbar tabs={tabs} />
      ) : (
        <MobileNavbar tabs={tabs} />
      )}
      <div className="container">
        <PlayerDComp title={title} playername={playername} />
      </div>
    </div>
  );
};

export default PlayerDetails;
