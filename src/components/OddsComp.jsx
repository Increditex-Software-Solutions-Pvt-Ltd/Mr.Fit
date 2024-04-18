import React from "react";

const OddsComp = ({ handleActiveTab, title, sort }) => {
  const teamBets = [
    {
      schedule: "FINAL",
      team1: {
        name: "Heat",
        logo: "https://cdn-team-logos.theathletic.com/team-logo-66-300x300.png?1659417052",
      },
      team2: {
        name: "76ers",
        logo: "https://cdn-team-logos.theathletic.com/team-logo-69-300x300.png",
      },
      spread: ["+5.5", "-5.5"],
      total: ["O 208.5", "U 208.5"],
      moneyLine: ["+185", "-225"],
    },
    {
      schedule: "FINAL",
      team1: {
        name: "Hawks",
        logo: "https://cdn-team-logos.theathletic.com/team-logo-65-300x300.png",
      },
      team2: {
        name: "Bulls",
        logo: "https://cdn-team-logos.theathletic.com/team-logo-73-300x300.png?1659417061",
      },
      spread: ["+3.5", "-3.5"],
      total: ["O 222.5", "U 222.5"],
      moneyLine: ["+125", "-155"],
    },
    {
      schedule: "Apr 20, 4:30AM",
      team1: {
        name: "bulls",
        logo: "https://cdn-team-logos.theathletic.com/team-logo-73-300x300.png?1659417061",
      },
      team2: {
        name: "Heat",
        logo: "https://cdn-team-logos.theathletic.com/team-logo-66-300x300.png?1659417052",
      },
      spread: ["+2.5", "-2.5"],
      total: ["O 208.5", "U 208.5"],
      moneyLine: ["+115", "-140"],
    },
    {
      schedule: "Apr 20, 7:00AM",
      team1: {
        name: "Kings",
        logo: "https://cdn-team-logos.theathletic.com/team-logo-92-300x300.png",
      },
      team2: {
        name: "Pelicans",
        logo: "https://cdn-team-logos.theathletic.com/team-logo-85-300x300.png?1659417066",
      },
      spread: ["+1.5", "-1.5"],
      total: ["O 213.5", "U 213.5"],
      moneyLine: ["+125", "-105"],
    },
  ];

  let stories = [
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/17201529/240417-Silver-scaled-e1713399352368-1024x683.jpg",
      headline:
        "Jontay Porter pays the price, as NBA and other leagues play with fire on gambling",
      author: "David Aldrifge",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/17155851/GettyImages-1945906680-1024x673.jpg",
      headline:
        "Timeline of Jontay Porter’s NBA career and gambling investigation that led to ban",
      author: "Hunter Patterson",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/17183557/GettyImages-2036336618-1024x683.jpg",
      headline:
        "NBA’s banishment of Jontay Porter is about money and perception, not morality",
      author: "Eric Koreen",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/10153115/GettyImages-2072135387-1024x683.jpg",
      headline:
        "NBA bars Jontay Porter for betting, league’s first gambling ban for player in 70 years",
      author: "Joe Vardon",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/16132113/GettyImages-2148075417-1024x697.jpg",
      headline:
        "NBA Play-In Tournament odds, expert picks for Heat at 76ers and Hawks at Bulls",
      author: "Dan Santaromita",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/15163641/GettyImages-2148176838-1024x683.jpg",
      headline:
        "NBA Play-In Tournament odds, expert picks for Lakers at Pelicans and Warriors at Kings",
      author: "Dan Santaromita",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/15132216/GettyImages-2148078933-1024x683.jpg",
      headline:
        "2024 NBA Playoff odds: Celtics enter postseason as favorite to win NBA title",
      author: "Dan Santaromita",
    },
    {
      pic: "https://cdn.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/10173005/GettyImages-1918185385-1024x683.jpg",
      headline:
        "NBA commissioner Adam Silver says Jontay Porter risks permanent ban if gambling allegations are true",
      author: "Mike Vorkunov",
    },
  ];

  return (
    <div>
      <>
        <section className="m-3">
          <div className="row">
            {teamBets.map((bet, i) => {
              return (
                <div
                  key={i}
                  className="col-12 col-lg-6 d-flex flex-column flex-md-row justify-content-between py-3 border-bottom"
                >
                  <div>
                    <small style={{ color: "gray" }}>
                      {" "}
                      <b>{bet.schedule}</b>
                    </small>
                    <div className="d-flex flex-md-column gap-3 gap-md-0">
                      <h6 className="my-3">
                        <img
                          src={bet.team1.logo}
                          alt="Team logo"
                          width="30px"
                        />
                        <b className="ms-2">{bet.team1.name}</b>
                      </h6>
                      <h6 className="my-3">
                        <img
                          src={bet.team2.logo}
                          alt="Team logo"
                          width="30px"
                        />
                        <b className="ms-2">{bet.team2.name}</b>
                      </h6>
                    </div>
                  </div>
                  <div className="d-flex gap-3">
                    <div className="me-1">
                      <table className="table">
                        <thead className="border-0">
                          <tr>
                            <th>Spread</th>
                            <th>Total</th>
                            <th>Moneyline</th>
                          </tr>
                        </thead>
                        <tbody className="border-1">
                          <tr>
                            <td
                              className="border-3 border-white "
                              style={{ backgroundColor: "beige" }}
                            >
                              {bet.spread[0]}
                            </td>
                            <td
                              className="border-3 border-white "
                              style={{ backgroundColor: "beige" }}
                            >
                              {bet.total[0]}
                            </td>
                            <td
                              className="border-3 border-white "
                              style={{ backgroundColor: "beige" }}
                            >
                              {bet.moneyLine[0]}
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="border-3 border-white "
                              style={{ backgroundColor: "beige" }}
                            >
                              {bet.spread[1]}
                            </td>
                            <td
                              className="border-3 border-white "
                              style={{ backgroundColor: "beige" }}
                            >
                              {bet.total[1]}
                            </td>
                            <td
                              className="border-3 border-white "
                              style={{ backgroundColor: "beige" }}
                            >
                              {bet.moneyLine[1]}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex align-items-end mb-3">
                      <small style={{ cursor: "pointer" }}>
                        <b>
                          Place a Bet{" "}
                          <i
                            className="fa fa-angle-right mt-1"
                            aria-hidden="true"
                          ></i>
                        </b>
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-3">
          <div className="mt-4">
            <div className="d-flex justify-content-between my-3">
              <h4>
                <b>{title} Picks</b>
              </h4>
              <small
                style={{ cursor: "pointer" }}
                onClick={() => handleActiveTab("Picks")}
              >
                All {title} Picks{" "}
                <i className="fa fa-angle-right ms-1" aria-hidden="true"></i>
              </small>
            </div>

            <div className="row">
              {stories.map((story, i) => {
                return (
                  <div className="col-12 col-lg-3 mb-5" key={i}>
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
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default OddsComp;
