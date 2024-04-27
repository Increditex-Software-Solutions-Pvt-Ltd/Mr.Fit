import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "../css/ComponentsCSS/StandingsComp.css";

function StandingsComp() {
  const standingsData = [
    {
      name: "Bournemouth",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-673-50x50.png",
      GP: 10,
      W: 7,
      DL: 2,
      GF: 20,
      GA: 10,
      GD: 10,
      PTS: 23,
      form: "WWLWD",
    },
    {
      name: "Arsenal",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-651-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    ,
    {
      name: "Aston Villa",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-672-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    ,
    {
      name: "Brentford",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-689-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    ,
    {
      name: "Brighton",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    {
      name: "Burnley",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-675-50x50.png",
      GP: 10,
      W: 7,
      DL: 2,
      GF: 20,
      GA: 10,
      GD: 10,
      PTS: 23,
      form: "WWLWD",
    },
    {
      name: "Chelsea",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-652-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    ,
    {
      name: "Crystal Palace",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-676-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    ,
    {
      name: "Everton",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-677-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    ,
    {
      name: "Fulham",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-694-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    {
      name: "Liverpool",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-50x50.png",
      GP: 10,
      W: 7,
      DL: 2,
      GF: 20,
      GA: 10,
      GD: 10,
      PTS: 23,
      form: "WWLWD",
    },
    {
      name: "Luton Town",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-698-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    {
      name: "Manchester City",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-654-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    {
      name: "Manchester United",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-655-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
    {
      name: "Newcastle United",
      logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-679-50x50.png",
      GP: 10,
      W: 6,
      DL: 3,
      GF: 15,
      GA: 12,
      GD: 3,
      PTS: 21,
      form: "WLDWW",
    },
  ];

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div
      className="standings-table"
      style={{ width: "100%", overflow: "auto" }}
    >
      <table className="table table-striped standingTable" data-aos="fade-up">
        <thead>
          <tr>
            <th></th>
            <th>Team</th>
            <th>GP</th>
            <th>W</th>
            <th>DL</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>PTS</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          {standingsData.map((team, index) => (
            <tr key={index}>
              <td> {index + 1}</td>
              <td>
                <img
                  src={team.logo}
                  alt={team.name}
                  width="25px"
                  style={{ marginRight: "5px", marginLeft: "5px" }}
                />
                {team.name}
              </td>
              <td>{team.GP}</td>
              <td>{team.W}</td>
              <td>{team.DL}</td>
              <td>{team.GF}</td>
              <td>{team.GA}</td>
              <td>{team.GD}</td>
              <td>{team.PTS}</td>
              <td>
                {team.form.split("").map((res) => {
                  if (res === "W") {
                    return (
                      <span
                        style={{
                          backgroundColor: "green",
                          borderRadius: "50%",
                          padding: "3px 5px",
                          margin: "0 1px",
                          fontSize: "12px",
                        }}
                      >
                        W
                      </span>
                    );
                  } else if (res === "L") {
                    return (
                      <span
                        style={{
                          backgroundColor: "red",
                          borderRadius: "50%",
                          padding: "3px 10px",
                          margin: "0 1px",
                          fontSize: "12px",
                        }}
                      >
                        L
                      </span>
                    );
                  } else {
                    return (
                      <span
                        style={{
                          backgroundColor: "gray",
                          borderRadius: "50%",
                          padding: "3px 8px",
                          margin: "0 1px",
                          fontSize: "12px",
                        }}
                      >
                        D
                      </span>
                    );
                  }
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StandingsComp;
