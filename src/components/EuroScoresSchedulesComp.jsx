import React, { useEffect, useState } from "react";

const EuroScoresSchedulesComp = () => {
  const euroSchedule = [
    {
      title: "GROUP STAGE MATCH WEEK 1",
      tables: [
        {
          date: "Saturday, June 15",
          matches: [
            {
              team1: "Germany",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-727-72x72.png?1659417060",
              team2: "Scotland",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-711-72x72.png",
              time: "0:30",
              location: "Allianz Arena",
            },
            {
              team1: "Hungary",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-780-72x72.png?1659417061",
              team2: "Switzerland",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-790-72x72.png",
              time: "18:30",
              location: "RheinEnergieSTADION",
            },
            {
              team1: "Spain",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-788-72x72.png",
              team2: "Croatia",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-775-72x72.png",
              time: "21:30",
              location: "Olympiastadion Berlin",
            },
          ],
        },
        {
          date: "Sunday, June 16",
          matches: [
            {
              team1: "Italy",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-781-72x72.png?1659417061",
              team2: "Albania",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6269-72x72.png",
              time: "0:30",
              location: "SIGNAL IDUNA PARK",
            },
            {
              team1: "Poland",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-784-72x72.png?1659417062",
              team2: "Netherlands",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-782-72x72.png",
              time: "18:30",
              location: "Volksparkstadion",
            },
            {
              team1: "Slovenia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6268-72x72.png",
              team2: "Denmark",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-777-72x72.png",
              time: "21:30",
              location: "MHPArena",
            },
          ],
        },
      ],
    },
    {
      title: "GROUP STAGE MATCH WEEK 2",
      tables: [
        {
          date: "Wednesday, June 19",
          matches: [
            {
              team1: "Croatia",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-775-72x72.png",
              team2: "Albania",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-6269-72x72.png",
              time: "18:30",
              location: "Volksparkstadion",
            },
            {
              team1: "Germany",
              logo1:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-727-72x72.png?1659417060",
              team2: "Hungary",
              logo2:
                "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-780-72x72.png?1659417061",
              time: "21:30",
              location: "MHPArena",
            },
          ],
        },
      ],
    },
  ];
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    if (euroSchedule.length > 0) {
      setSelectedTitle(euroSchedule[0].title); // Set the first title as default
    }
  }, []);

  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
  };

  const selectedSchedule = euroSchedule.find(
    (schedule) => schedule.title === selectedTitle
  );

  return (
    <div>
      <select value={selectedTitle} onChange={handleTitleChange}>
        <option style={{ textAlign: "center" }} value="" disabled>
          Select a schedule
        </option>
        {euroSchedule.map((schedule) => (
          <option
            key={schedule.title}
            value={schedule.title}
            style={{
              fontWeight: selectedTitle === schedule.title ? "bold" : "normal",
            }}
          >
            {schedule.title}
          </option>
        ))}
      </select>
      {selectedSchedule && (
        <div>
          {selectedSchedule.tables.map((table) => (
            <div key={table.date} className="my-5">
              <h4 className="my-2">
                <b>{table.date}</b>
              </h4>
              <table className="table table-striped my-2 ">
                <thead>
                  <tr>
                    <th>Home</th>
                    <th>Away</th>
                    <th>Time</th>
                    <th>TICKETS</th>
                    <th>LOCATION</th>
                  </tr>
                </thead>
                <tbody>
                  {table.matches.map((match) => (
                    <tr
                      key={`${match.team1}-${match.team2}`}
                      className="scheduleTableEuro"
                    >
                      <td className="d-flex align-items-center">
                        <img
                          src={match.logo1}
                          alt={match.team1}
                          width="25px"
                          style={{ marginRight: "5px" }}
                        />
                        <span>{match.team1}</span>
                      </td>
                      <td>
                        <img
                          src={match.logo2}
                          alt={match.team2}
                          width="25px"
                          style={{ marginRight: "5px" }}
                        />
                        <span>{match.team2}</span>
                      </td>
                      <td>{match.time}</td>
                      <td>
                        <img
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Im05LjQ4NSAxLjEuOTguOThhMi4zMDggMi4zMDggMCAwIDAgMy4yNjMgMy4yNjNsLjk4Ljk4LTguNDg2IDguNDg1LS45OC0uOThoLjAwMWEyLjMwOCAyLjMwOCAwIDEgMC0zLjI2NC0zLjI2M0wxIDkuNTg1bDguNDg1LTguNDg0WiIgZmlsbD0iIzEyMTIxMiIvPjwvc3ZnPg=="
                          alt="tickets-logo"
                          width="20px"
                        />{" "}
                        <a href="">Buy Tickets</a>
                      </td>
                      <td>{match.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EuroScoresSchedulesComp;
