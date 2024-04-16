import React from "react";
import NFLTeamCard from "./NFLTeamCard";
import "../css/ComponentsCSS/NFLDraftComp.css";

const NFLTeamGroup = ({ groupName, teams }) => {
  return (
    <div className="team-group">
      <h6 className="group-name">{groupName}</h6>
      <ul className="team-list">
        {teams.map((team, index) => (
          <NFLTeamCard key={index} team={team} />
        ))}
      </ul>
    </div>
  );
};

export default NFLTeamGroup;
