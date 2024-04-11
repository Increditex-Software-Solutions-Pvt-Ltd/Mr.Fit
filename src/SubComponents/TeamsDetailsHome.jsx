import React from "react";
import { useNavigate } from "react-router-dom";
import MainNewsComp from "./MainNewsComp";
import "../css/SubComponentsCSS/TeamDetailsHome.css";

function TeamsDetailsHome({ teamName }) {
  const navigate = useNavigate();
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
  ];
  return (
    <div>
      <MainNewsComp />

      <section>
        <div className="row">
          <div className="col-md-12 col-lg-4 border-end mb-4">
            <div className="d-flex justify-content-between">
              <h5 style={{ fontWeight: "bold" }}>Schedule</h5>
              <small>
                Full Schedule
                <i className="fa fa-angle-right ms-2" aria-hidden="true"></i>
              </small>
            </div>
            <div className="mt-2 border-bottom">
              <div className="border-bottom my-4">
                <small>UEFA Champions League - Quater-finals</small>
                <div className="row mt-1">
                  <div className="col-9 border-end">
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <img
                          src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-651-72x72.png?1659417052"
                          width="20px"
                          alt="team-logo"
                        />
                        <span className="ms-2">
                          <b
                            onClick={() => navigate(`/team/Arsenal`)}
                            style={{ cursor: "pointer" }}
                          >
                            Arsenal
                          </b>
                        </span>
                      </div>
                      <div>
                        <b>2</b>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <img
                          src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-659-72x72.png"
                          width="20px"
                          alt="team-logo"
                        />
                        <span className="ms-2">
                          <b>Bayern Munchen</b>
                        </span>
                      </div>
                      <div>
                        <b>2</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 d-flex justify-content-start align-items-center">
                    <h6>
                      <b>FT</b> TODAY
                    </h6>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-4">
                <small>Premier League</small>
                <div className="row mt-1">
                  <div className="col-9 border-end">
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <img
                          src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-681-72x72.png?1654485108"
                          width="20px"
                          alt="team-logo"
                        />
                        <span className="ms-2">
                          <b>Sheff Utd</b>
                        </span>
                      </div>
                      <div>
                        <b>2</b>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <img
                          src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-652-72x72.png"
                          width="20px"
                          alt="team-logo"
                        />
                        <span className="ms-2">
                          <b>chelsea</b>
                        </span>
                      </div>
                      <div>
                        <b>3</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 d-flex justify-content-start align-items-center">
                    <h6>
                      <b>FT</b> TODAY
                    </h6>
                  </div>
                </div>
              </div>
              <div className="border-bottom my-4">
                <small>Premier League</small>
                <div className="row mt-1">
                  <div className="col-9 border-end">
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <img
                          src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-652-72x72.png"
                          width="20px"
                          alt="team-logo"
                        />
                        <span className="ms-2">
                          <b>Chelsea</b>
                        </span>
                      </div>
                      <div>
                        <b></b>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <img
                          src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-677-72x72.png"
                          width="20px"
                          alt="team-logo"
                        />
                        <span className="ms-2">
                          <b>Everton</b>
                        </span>
                      </div>
                      <div>
                        <b></b>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 d-flex justify-content-start align-items-center">
                    <h6>
                      <b>12:30 AM</b> APR 16
                    </h6>
                  </div>
                </div>
              </div>
              <div className="my-4">
                <small>FA Cup - Semi-finals</small>
                <div className="row mt-1">
                  <div className="col-9 border-end">
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <img
                          src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-654-72x72.png"
                          width="20px"
                          alt="team-logo"
                        />
                        <span className="ms-2">
                          <b>Man City</b>
                        </span>
                      </div>
                      <div>
                        <b></b>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-2">
                      <div>
                        <img
                          src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-652-72x72.png"
                          width="20px"
                          alt="team-logo"
                        />
                        <span className="ms-2">
                          <b>Chelsea</b>
                        </span>
                      </div>
                      <div>
                        <b></b>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 d-flex justify-content-start align-items-center">
                    <h6>
                      <b>9:45 PM</b> APR 20
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 border-end mb-4">
            <div className="d-flex justify-content-between">
              <h5 style={{ fontWeight: "bold" }}>{teamName}</h5>
              <small>
                Full Standings
                <i className="fa fa-angle-right ms-2" aria-hidden="true"></i>
              </small>
            </div>
            <div className="my-3">
              <table className="table" id="tableBig">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>GP</th>
                    <th>W</th>
                    <th>DL</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>PTS</th>
                    <th>FORM</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsData.map((team, index) => (
                    <tr key={index}>
                      <td>
                        {index + 1}
                        <img
                          src={team.logo}
                          alt={team.name}
                          width="30px"
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
              <table className="table" id="tableSmall">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>GP</th>
                    <th>GD</th>
                    <th>PTS</th>
                  </tr>
                </thead>
                <tbody>
                  {standingsData.map((team, index) => (
                    <tr key={index}>
                      <td>
                        {index + 1}
                        <img
                          src={team.logo}
                          alt={team.name}
                          width="30px"
                          style={{ marginRight: "5px", marginLeft: "5px" }}
                        />
                        {team.name === teamName ? (
                          <b>{team.name}</b>
                        ) : (
                          team.name
                        )}
                      </td>
                      <td>{team.GP}</td>
                      <td>{team.GD}</td>
                      <td>{team.PTS}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 mb-4">
            <div className="d-flex justify-content-between">
              <h5 style={{ fontWeight: "bold" }}>Team Leader</h5>
              <small>
                Full Team Stats
                <i className="fa fa-angle-right ms-2" aria-hidden="true"></i>
              </small>
            </div>
            <div className="my-3">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-attack-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-attack"
                    type="button"
                    role="tab"
                    aria-controls="nav-attack"
                    aria-selected="true"
                  >
                    Attack
                  </button>
                  <button
                    class="nav-link"
                    id="nav-defence-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-defence"
                    type="button"
                    role="tab"
                    aria-controls="nav-defence"
                    aria-selected="false"
                  >
                    Defence
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-attack"
                  role="tabpanel"
                  aria-labelledby="nav-attack-tab"
                >
                  <div className="row my-2">
                    <div className="col-sm-12 col-md-4 col-lg-12 my-2 d-flex justify-content-between border-bottom">
                      <div>
                        <h6>C. Palmer, M</h6>
                        <span className="fs-3 me-1">
                          <b>16</b>
                        </span>
                        <small style={{ fontSize: "0.5rem" }}>GOALS</small>
                      </div>
                      <div>
                        <img
                          src="https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1248%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/bho5fd6Swb9J2FH8_96x96.png"
                          alt="player-pic"
                          width="65px"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-12 my-2 d-flex justify-content-between border-bottom">
                      <div>
                        <h6>C. Palmer, M</h6>
                        <span className="fs-3 me-1">
                          <b>9</b>
                        </span>
                        <small style={{ fontSize: "0.5rem" }}>ASSISTS</small>
                      </div>
                      <div>
                        <img
                          src="https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1248%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/bho5fd6Swb9J2FH8_96x96.png"
                          alt="player-pic"
                          width="65px"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-12 my-2 d-flex justify-content-between border-bottom">
                      <div>
                        <h6>Thiago Silva, D</h6>
                        <span className="fs-3 me-1">
                          <b>94.6</b>
                        </span>
                        <small style={{ fontSize: "0.5rem" }}>
                          PASSING ACCURACY %
                        </small>
                      </div>
                      <div>
                        <img
                          src="https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1248%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/SMvGFhYXbUH4qI7k_96x96.png"
                          alt="player-pic"
                          width="65px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-defence"
                  role="tabpanel"
                  aria-labelledby="nav-defence-tab"
                >
                  <div className="row my-2">
                    <div className="col-sm-12 col-md-4 col-lg-12 my-2 d-flex justify-content-between border-bottom">
                      <div>
                        <h6>Robert Sánchez, GK</h6>
                        <span className="fs-3 me-1">
                          <b>3</b>
                        </span>
                        <small style={{ fontSize: "0.5rem" }}>
                          CLEAN SHEETS
                        </small>
                      </div>
                      <div>
                        <img
                          src="https://cdn-headshots.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/UUlxpMiAtFRLVfUx_96x96.png"
                          alt="player-pic"
                          width="65px"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-12 my-2 d-flex justify-content-between border-bottom">
                      <div>
                        <h6>C. Gallagher, M</h6>
                        <span className="fs-3 me-1">
                          <b>43</b>
                        </span>
                        <small style={{ fontSize: "0.5rem" }}>
                          TACKLES WON
                        </small>
                      </div>
                      <div>
                        <img
                          src="https://cdn-headshots.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/oqIDYc9NkOBANdyR_96x96.png"
                          alt="player-pic"
                          width="65px"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-12 my-2 d-flex justify-content-between border-bottom">
                      <div>
                        <h6>C. Gallagher, M</h6>
                        <span className="fs-3 me-1">
                          <b>36</b>
                        </span>
                        <small style={{ fontSize: "0.5rem" }}>
                          INTERCEPTIONS
                        </small>
                      </div>
                      <div>
                        <img
                          src="https://cdn-headshots.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/oqIDYc9NkOBANdyR_96x96.png"
                          alt="player-pic"
                          width="65px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2 my-3 py-3 ">
        <div className="container">
          <hr />
          <h4 className="text-dark ps-2 pt-2 fw-bold">More Stories</h4>
          <div className="col-12 mx-2">
            <ul className="list-unstyled">
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/23061435/GettyImages-1756364354-scaled-e1709294859732-1024x681.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League: Strategies for using chips in
                      Blank{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Nick miller</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/28164144/Chelsea-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Arsenal’s game against Chelsea postponed due to FA
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Nnamdi Onyeagwara</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/28031953/dominic-solanke-bmouth-scaled-e1709108450447-1024x682.jpeg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Dominic Solanke to have knee injury assessed before
                      Bournemouth's trip
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Luke Bosher</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/27093520/kaoru-mitoma-brighton-1024x682.jpeg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Brighton's Kaoru Mitoma likely ruled out for season due to
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Andy Naylor</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/26100210/GettyImages-2035633598-scaled-e1708961182776-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League tips: When is the best time to{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Holly Shand</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/26070953/GettyImages-2035394103-scaled-e1708949455227-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League Gameweek 26 review: Villa on fire,
                      Arsenal{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Abdul Rehman</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/22090231/GettyImages-2017671688-scaled-e1708610676204-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League tips: Should you hold or sell your{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Holly Shand</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/21110435/GettyImages-2027773156-scaled-e1708531508753-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League tips: When is the best time to use
                      your Free{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Abdul Rehman</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center border-top border-bottom">
          <h6 className="pt-2">See more</h6>
        </div>
      </section>
    </div>
  );
}

export default TeamsDetailsHome;
