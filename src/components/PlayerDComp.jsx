import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const PlayerDComp = ({ title, playername }) => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div>
      <section data-aos="fade-up" className="border-bottom">
        <div
          id="mainSection"
          className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between m-4"
        >
          <div id="playerBio" className="border-bottom my-2">
            <div className="me-4">
              <img
                src="https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1920%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/bho5fd6Swb9J2FH8_200x200.png"
                alt="player-pic"
                width="120px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="d-flex flex-column justify-content-between align-items-start my-2 ">
              <div>
                <img
                  src="https://cdn-team-logos.theathletic.com/team-logo-652-72x72.png"
                  alt="team-logo"
                  width="20px"
                />{" "}
                Chelsea
              </div>

              <h3>
                <b>{playername}</b>
              </h3>
              <small>M, #80</small>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <div className="border-end">
              <div className="mx-2">
                <h5>GS (SUB)</h5>
                <h3>
                  <b>22 (5)</b>
                </h3>
              </div>
            </div>
            <div className="border-end mx-2">
              <div className="mx-2">
                <h5>GA</h5>
                <h3>
                  <b>16</b>
                </h3>
              </div>
            </div>
            <div className="border-end mx-2">
              <div className="mx-2">
                <h5>A</h5>
                <h3>
                  <b>9</b>
                </h3>
              </div>
            </div>
            <div className="mx-2">
              <div className="mx-2">
                <h5>SH</h5>
                <h3>
                  <b>55</b>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up">
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="border-end">
              <div className="m-3 border-bottom">
                <h5>
                  <b>Player Bio</b>
                </h5>
                <div>
                  <small>HT/HW</small>
                  <h6>
                    <b>1.82 m,74 kg</b>
                  </h6>
                </div>
                <div>
                  <small>Age</small>
                  <h6>
                    <b>21</b>
                  </h6>
                </div>
                <div>
                  <small>Born</small>
                  <h6>
                    <b>2002-05-06</b>
                  </h6>
                </div>
                <div>
                  <small>Nationality</small>
                  <h6>
                    <b>ENG</b>
                  </h6>
                </div>
              </div>
              <div className="m-2 border-bottom">
                <div className="d-flex justify-content-between align-items-center m-2">
                  <span>
                    <b style={{ fontSize: "1rem" }}>Schedule</b>
                  </span>
                  <small
                    onClick={() => {
                      navigate(-1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Full Schedule{" "}
                    <i
                      className="fa fa-angle-right ms-2"
                      aria-hidden="true"
                    ></i>
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
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  navigate(`/team/${title}/Arsenal`)
                                }
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
                              <b
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  navigate(`/team/${title}/Bayern Munchen`)
                                }
                              >
                                Bayern Munchen
                              </b>
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
                              <b
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  navigate(`/team/${title}/Sheff Utd`)
                                }
                              >
                                Sheff Utd
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
                              src="https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-652-72x72.png"
                              width="20px"
                              alt="team-logo"
                            />
                            <span className="ms-2">
                              <b
                                style={{ cursor: "pointer" }}
                                onClick={() =>
                                  navigate(`/team/${title}/Chelsea`)
                                }
                              >
                                Chelsea
                              </b>
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
                              <b
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  navigate(`/team/${title}/Chelsea`);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                Chelsea
                              </b>
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
                              <b
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  navigate(`/team/${title}/Everton`);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                Everton
                              </b>
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
                              <b
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  navigate(`/team/${title}/Man City`);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                Man City
                              </b>
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
                              <b
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  navigate(`/team/${title}/Chelsea`);
                                  window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                  });
                                }}
                              >
                                Chelsea
                              </b>
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
              <div className="m-2">
                <div className="d-flex justify-content-between">
                  <h5 style={{ fontWeight: "bold" }}>Team Leader</h5>
                  <small
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(-1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    Full Team Stats
                    <i
                      className="fa fa-angle-right ms-2"
                      aria-hidden="true"
                    ></i>
                  </small>
                </div>
                <div className="my-3">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
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
                        className="nav-link"
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
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-attack"
                      role="tabpanel"
                      aria-labelledby="nav-attack-tab"
                    >
                      <div className="row my-2">
                        <div className="col-sm-12 col-md-4 col-lg-12 my-2 d-flex justify-content-between border-bottom">
                          <div>
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                navigate(`/playerDetails/${title}/C. Palmer`);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              C. Palmer, M
                            </h6>
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
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                navigate(`/playerDetails/${title}/C. Palmer`);
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              C. Palmer, M
                            </h6>
                            <span className="fs-3 me-1">
                              <b>9</b>
                            </span>
                            <small style={{ fontSize: "0.5rem" }}>
                              ASSISTS
                            </small>
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
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                navigate(
                                  `/playerDetails/${title}/Thiago Silva`
                                );
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              Thiago Silva, D
                            </h6>
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
                      className="tab-pane fade"
                      id="nav-defence"
                      role="tabpanel"
                      aria-labelledby="nav-defence-tab"
                    >
                      <div className="row my-2">
                        <div className="col-sm-12 col-md-4 col-lg-12 my-2 d-flex justify-content-between border-bottom">
                          <div>
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                navigate(
                                  `/playerDetails/${title}/Robert Sánchez`
                                );
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              Robert Sánchez, GK
                            </h6>
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
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                navigate(
                                  `/playerDetails/${title}/C. Gallagher`
                                );
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              C. Gallagher, M
                            </h6>
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
                            <h6
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                navigate(
                                  `/playerDetails/${title}/C. Gallagher`
                                );
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                            >
                              C. Gallagher, M
                            </h6>
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
          </div>
          <div className="col-12 col-lg-8">
            <ul className="list-unstyled">
              <li>
                <a
                  className="d-flex flex-column-reverse flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
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
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/23061435/GettyImages-1756364354-scaled-e1709294859732-1024x681.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column-reverse flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href="#"
                >
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
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/28164144/Chelsea-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column-reverse flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href="#"
                >
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
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/28031953/dominic-solanke-bmouth-scaled-e1709108450447-1024x682.jpeg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column-reverse flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href="#"
                >
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
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/27093520/kaoru-mitoma-brighton-1024x682.jpeg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column-reverse flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
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
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/26100210/GettyImages-2035633598-scaled-e1708961182776-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column-reverse flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
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
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/26070953/GettyImages-2035394103-scaled-e1708949455227-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column-reverse flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
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
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/22090231/GettyImages-2017671688-scaled-e1708610676204-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a
                  className="d-flex flex-column-reverse flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
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
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/21110435/GettyImages-2027773156-scaled-e1708531508753-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerDComp;
