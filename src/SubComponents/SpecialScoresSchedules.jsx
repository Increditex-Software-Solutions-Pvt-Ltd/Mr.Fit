import React, { useEffect, useState } from "react";
import "../css/ComponentsCSS/SpecialScoresSchedules.css";

const SpecialScoresSchedules = ({ data, title }) => {
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      setSelectedTitle(data[0].title); // Set the first title as default
    }
  }, []);

  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
  };

  const selectedSchedule = data.find(
    (schedule) => schedule.title === selectedTitle
  );

  return (
    <div>
      <select value={selectedTitle} onChange={handleTitleChange}>
        <option style={{ textAlign: "center" }} value="" disabled>
          Select a schedule
        </option>
        {data.map((schedule) => (
          <option
            key={schedule.title}
            value={schedule.title}
            style={{
              fontWeight: selectedTitle === schedule.title ? "bold" : "normal",
              textAlign: "start",
            }}
          >
            {schedule.title}
          </option>
        ))}
      </select>
      {selectedSchedule && (
        <div style={{ width: "100%", overflow: "auto" }}>
          {selectedSchedule.tables.map((table) => (
            <div key={table.date} className="specialScheduleTable my-5">
              <h4 className="my-2">
                <b>{table.date}</b>
              </h4>

              {table.matches[0].Result ? (
                <>
                  <table className="table table-striped my-2">
                    <thead>
                      <tr>
                        <th>HOME</th>
                        <th>AWAY</th>
                        <th>RESULT</th>
                        <th>LOCATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.matches.map((match) => {
                        return (
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
                            <td>{match.Result}</td>
                            <td>{match.location}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </>
              ) : (
                <>
                  <table className="table table-striped my-2">
                    <thead>
                      <tr>
                        <th>HOME</th>
                        <th>AWAY</th>
                        <th>TIME</th>
                        <th>TICKETS</th>
                        <th>LOCATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.matches.map((match) => {
                        return (
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
                        );
                      })}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecialScoresSchedules;
