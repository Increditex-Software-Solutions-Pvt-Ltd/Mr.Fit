import React from "react";
import "../css/ComponentsCSS/TeamComp.css";
import { useNavigate } from "react-router-dom";

function TeamsComponent() {
  const teams = [
    {
      name: "Bournemouth",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-673-50x50.png",
    },
    {
      name: "Arsenal",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-651-50x50.png",
    },
    {
      name: "Aston Villa",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-672-50x50.png",
    },
    {
      name: "Brentford",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-689-50x50.png",
    },
    {
      name: "Brighton",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-50x50.png",
    },
    {
      name: "Burnley",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-675-50x50.png",
    },
    {
      name: "Chelsea",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-652-50x50.png",
    },
    {
      name: "Crystal Palace",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-676-50x50.png",
    },
    {
      name: "Everton",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-677-50x50.png",
    },
    {
      name: "Fulham",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-694-50x50.png",
    },
    {
      name: "Liverpool",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-50x50.png",
    },
    {
      name: "Luton Town",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-698-50x50.png",
    },
    {
      name: "Manchester City",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-654-50x50.png",
    },
    {
      name: "Manchester United",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-655-50x50.png",
    },
    {
      name: "Newcastle United",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-679-50x50.png",
    },
    {
      name: "Nottingham Forest",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-701-50x50.png",
    },
    {
      name: "Sheffield United",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-681-50x50.png",
    },
    {
      name: "Tottenham",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-656-50x50.png",
    },
  ];

  const chunks = [];
  const chunkSize = 6;
  for (let i = 0; i < teams.length; i += chunkSize) {
    chunks.push(teams.slice(i, i + chunkSize));
  }

  const navigate = useNavigate();

  return (
    <div className="teams-container">
      {chunks.map((chunk, index) => (
        <div key={index} className="teams-div">
          {chunk.map((team, teamIndex) => (
            <div key={teamIndex}>
              <button
                onClick={() => navigate(`/team/${team.name}`)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={team.logo}
                  alt={team.name}
                  style={{
                    width: "30px",
                    height: "30px",
                    marginBottom: "10px",
                    marginRight: "5px",
                  }}
                />
                {team.name}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TeamsComponent;
