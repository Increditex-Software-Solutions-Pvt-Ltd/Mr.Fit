import React from "react";
import "../css/SubComponentsCSS/TeamsDScoresSchedule.css";

function TeamDScoresSchedule({ teamName }) {
  let scheduleScore = [
    {
      date: "Sunday, August 13, 2023",
      homeOrAway: "(H)",
      opponentName: "Liverpool",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
      result: "D",
      scores: "1-1",
      Competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Sunday, August 20, 2023",
      homeOrAway: "(A)",
      opponentName: "West Ham",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
      result: "L",
      scores: "3-1",
      Competition: "Premier League",
      location: "London Stadium",
    },
    {
      date: "Saturday, August 26, 2023",
      homeOrAway: "(H)",
      opponentName: "Liverpool",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-698-72x72.png?1659417053",
      result: "W",
      scores: "3-0",
      Competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Saturday, September 02, 2023",
      homeOrAway: "(H)",
      opponentName: "Nottm Forest",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-701-72x72.png?1659417053",
      result: "L",
      scores: "0-1",
      Competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Sunday, September 17, 2023",
      homeOrAway: "(A)",
      opponentName: "Bournemouth",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-673-72x72.png",
      result: "D",
      scores: "0-0",
      Competition: "Premier League",
      location: "Vitality Stadium",
    },
    {
      date: "Sunday, September 24, 2023",
      homeOrAway: "(H)",
      opponentName: "Aston Villa",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-672-72x72.png?1690246658",
      result: "L",
      scores: "0-1",
      Competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Thursday, September 28, 2023",
      homeOrAway: "(H)",
      opponentName: "Brighton",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
      result: "W",
      scores: "1-0",
      Competition: "EFL League Cup",
      location: "Stamford Bridge",
    },
    {
      date: "Tuesday, October 03, 2023",
      homeOrAway: "(A)",
      opponentName: "Fulham",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-694-72x72.png",
      result: "W",
      scores: "0-2",
      Competition: "Premier League",
      location: "Craven Cottage",
    },
    {
      date: "Saturday, October 07, 2023",
      homeOrAway: "(A)",
      opponentName: "Burnley",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-675-72x72.png?1690247034",
      result: "W",
      scores: "1-4",
      Competition: "Premier League",
      location: "Turf Moor",
    },
    {
      date: "Saturday, October 21, 2023",
      homeOrAway: "(H)",
      opponentName: "Arsenal",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-651-72x72.png?1659417052",
      result: "D",
      scores: "2-2",
      Competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Saturday, October 28, 2023",
      homeOrAway: "(H)",
      opponentName: "Brentford",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-689-72x72.png",
      result: "L",
      scores: "0-2",
      Competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Thursday, November 02, 2023",
      homeOrAway: "(H)",
      opponentName: "Blackburn",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-688-72x72.png",
      result: "W",
      scores: "2-0",
      Competition: "EFL League Cup",
      location: "Stamford Bridge",
    },
    {
      date: "Tuesday, November 07, 2023",
      homeOrAway: "(A)",
      opponentName: "tottenham",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-653-72x72.png",
      result: "W",
      scores: "1-4",
      Competition: "Premier League",
      location: "Tottenham Hotspur Stadium",
    },
  ];

  let scheduleDate = [
    {
      date: "Tuesday, April 16",
      homeOrAway: "(H)",
      opponentName: "Everton",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-677-72x72.png",
      time: "0:30",
      tickets: "--",
      competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Saturday, April 20",
      homeOrAway: "(A)",
      opponentName: "Man City",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-654-72x72.png",
      time: "21:45",
      tickets: "--",
      competition: "FA Cup",
      location: "Wembley Stadium",
    },
    {
      date: "Wednesday, April 24",
      homeOrAway: "(A)",
      opponentName: "Arsenal",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-651-72x72.png?1659417052",
      time: "0:30",
      tickets: "--",
      competition: "Premier League",
      location: "Emirates Stadium",
    },
    {
      date: "Sunday, April 28",
      homeOrAway: "(A)",
      opponentName: "Aston Villa",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-672-72x72.png?1690246658",
      time: "0:30",
      tickets: "--",
      competition: "Premier League",
      location: "Villa Park",
    },
    {
      date: "Friday, May 03",
      homeOrAway: "(H)",
      opponentName: "Tottenham",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-677-72x72.png",
      time: "0:00",
      tickets: "--",
      competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Sunday, May 05",
      homeOrAway: "(H)",
      opponentName: "West Ham",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-684-72x72.png?1659417053",
      time: "18:30",
      tickets: "--",
      competition: "Premier League",
      location: "Stamford Bridge",
    },
    {
      date: "Saturday, May 11",
      homeOrAway: "(A)",
      opponentName: "Nottm Forest",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-701-72x72.png?1659417053",
      time: "22:00",
      tickets: "--",
      competition: "Premier League",
      location: "The City Ground",
    },
    {
      date: "Thursday, May 16",
      homeOrAway: "(A)",
      opponentName: "Brighton",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-674-72x72.png",
      time: "0:15",
      tickets: "--",
      competition: "Premier League",
      location: "American Express Stadium",
    },
    {
      date: "Sunday, May 19",
      homeOrAway: "(H)",
      opponentName: "Bournemouth",
      opponentLogo:
        "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-677-72x72.png",
      time: "20:30",
      tickets: "--",
      competition: "Premier League",
      location: "Stamford Bridge",
    },
  ];

  let stories = [
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/27133642/Premier-League-PSR-breaches-framework-scaled-e1709059047611-1024x684.jpg",
      headline:
        "Premier League agree new financial fair play rules for next season",
      author: "Matt Slater",
      comments: 340,
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/10/03054615/GettyImages-1699280444-2-scaled-e1696326399563-1024x683.jpg",
      headline:
        "Premier League to use semi-automated offside technology next season: What it is and how it works",
      author: "Matt Slater",
      comments: 147,
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/10095607/0410_ChelseasBillions-1024x683.jpg",
      headline:
        "Chelsea have spent £1bn – but how much of that have they seen on the pitch?",
      author: "Liam Twomey",
      comments: 186,
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/07/19080416/stamford-bridge-stoll-scaled-e1689768305689-1024x683.jpeg",
      headline:
        "Chelsea get Stamford Bridge redevelopment boost after completing purchase of Stoll Mansions",
      author: "Liam Twomey",
      comments: 51,
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/08163133/GettyImages-2031014535-scaled-e1712608323269.jpg",
      headline:
        "The Chelsea ‘project’ is a mess, confused and drifting. This is not how to build a club",
      author: "Oliver Kay",
      comments: 224,
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/08015400/GettyImages-2139229891-1024x683.jpg",
      headline:
        "Mauricio Pochettino says Chelsea squad construction is flawed – does he have a point?",
      author: "Matt Slater",
      comments: 172,
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/05101653/0327_TAFC_Editorial_2x1-1-1.png",
      headline:
        "Welcome to The Athletic FC: A newsletter to explain big stories from the global game",
      author: "Phil Hay",
      comments: 22,
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/07160142/Mauricio-Pochettino-Sheffield-United-1024x683.jpg",
      headline:
        "Mauricio Pochettino questions Chelsea squad’s maturity after Sheffield United draw",
      author: "Liam Twomey",
      comments: 105,
    },
  ];

  return (
    <div>
      <h5 className="my-3">
        <b>{teamName} Scores & Schedule</b>
      </h5>
      <div
        className="border-bottom"
        style={{ width: "100%", overflow: "auto" }}
      >
        <table className="table table-striped" style={{ width: "1150px" }}>
          <thead>
            <tr>
              <th scope="col">DATE</th>
              <th scope="col">OPPONENT</th>
              <th scope="col">RESULT</th>
              <th scope="col">COMPETITION</th>
              <th scope="col">LOCATION</th>
            </tr>
          </thead>
          <tbody>
            {scheduleScore.map((schedule, index) => {
              return (
                <tr key={index}>
                  <td>{schedule.date}</td>
                  <td>
                    {schedule.homeOrAway}{" "}
                    <img
                      src={schedule.opponentLogo}
                      alt="oppo-logo"
                      width="20px"
                    />{" "}
                    {schedule.opponentName}
                  </td>
                  {schedule.result === "D" ? (
                    <td className="d-flex justify-content-between">
                      <div>
                        <b style={{ color: "gray" }}> {schedule.result}</b>
                      </div>{" "}
                      <div>{schedule.scores}</div>
                    </td>
                  ) : (
                    ""
                  )}
                  {schedule.result === "W" ? (
                    <td className="d-flex justify-content-between">
                      <div>
                        <b style={{ color: "green" }}> {schedule.result}</b>
                      </div>{" "}
                      <div>{schedule.scores}</div>
                    </td>
                  ) : (
                    ""
                  )}
                  {schedule.result === "L" ? (
                    <td className="d-flex justify-content-between">
                      <div>
                        <b style={{ color: "red" }}> {schedule.result}</b>
                      </div>{" "}
                      <div>{schedule.scores}</div>
                    </td>
                  ) : (
                    ""
                  )}
                  <td>{schedule.Competition}</td>
                  <td>{schedule.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <table
          className="table table-striped mt-5"
          cellSpacing="10px"
          style={{ width: "1150px" }}
        >
          <thead>
            <tr>
              <th>DATE</th>
              <th>OPPONENT</th>
              <th>TIME</th>
              <th>TICKETS</th>
              <th>COMPETITION</th>
              <th>LOCATION</th>
            </tr>
          </thead>
          <tbody>
            {scheduleDate.map((schedule, index) => {
              return (
                <tr key={index}>
                  <td>{schedule.date}</td>
                  <td>
                    {schedule.homeOrAway}{" "}
                    <img
                      src={schedule.opponentLogo}
                      alt="oppo-logo"
                      width="20px"
                    />{" "}
                    {schedule.opponentName}
                  </td>
                  <td>{schedule.time}</td>
                  <td>{schedule.tickets}</td>
                  <td>{schedule.competition}</td>
                  <td>{schedule.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h5>
          <b>Stories</b>
        </h5>
        <div className="row">
          {stories.map((story, i) => {
            return (
              <div className="col-12 col-lg-3" key={i}>
                <div>
                  <img
                    id="storiesPic"
                    src={story.pic}
                    alt="story-pic"
                    width="100%"
                  />
                </div>
                <h5>
                  <b>{story.headline}</b>
                </h5>
                <div>
                  <small>{story.author}</small>
                  <small className="ms-2">
                    <i className="bi bi-chat-left-fill icon-md me-1"></i>
                    {story.comments}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamDScoresSchedule;
