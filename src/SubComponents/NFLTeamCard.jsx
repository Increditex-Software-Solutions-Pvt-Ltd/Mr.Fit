import React from "react";

const NFLTeamCard = ({ team }) => {
  return (
    <li className="team-item">
      <img src={team.logo} alt={team.name} className="team-logo" />
      <p className="team-name">{team.name}</p>
    </li>
  );
};

export default NFLTeamCard;
