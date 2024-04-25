import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import NFLTeamGroup from "../SubComponents/NFLTeamGroup";
import "../css/ComponentsCSS/NFLDraftComp.css";

const NFLDraftComp = ({ title }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const nflTeams = [
    {
      groupName: "AFC EAST",
      teams: [
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-34-50x50.png",
          name: "Bils",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-47-50x50.png",
          name: "Dolphins",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-52-50x50.png",
          name: "Jets",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-49-50x50.png",
          name: "Patriots",
        },
      ],
    },
    {
      groupName: "AFC NORTH",
      teams: [
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-37-50x50.png",
          name: "Bengals",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-38-50x50.png",
          name: "Browns",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-33-50x50.png",
          name: "Ravens",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-55-50x50.png",
          name: "Steelers",
        },
      ],
    },
    {
      groupName: "AFC SOUTH",
      teams: [
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-44-50x50.png",
          name: "Colts",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-45-50x50.png",
          name: "Jaguars",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-43-50x50.png",
          name: "Texans",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-61-50x50.png",
          name: "Titans",
        },
      ],
    },
    {
      groupName: "AFC WEST",
      teams: [
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-40-50x50.png",
          name: "Broncos",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-56-50x50.png",
          name: "Chargers",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-46-50x50.png",
          name: "Chiefs",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-53-50x50.png",
          name: "Raiders",
        },
      ],
    },
    {
      groupName: "NFC EAST",
      teams: [
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-62-50x50.png",
          name: "Commanders",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-39-50x50.png",
          name: "Cowboys",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-54-50x50.png",
          name: "Eagles",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-51-50x50.png",
          name: "Giants",
        },
      ],
    },
    {
      groupName: "NFC NORTH",
      teams: [
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-36-50x50.png",
          name: "Bears",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-41-50x50.png",
          name: "Lions",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-42-50x50.png",
          name: "Packers",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-48-50x50.png",
          name: "Vikings",
        },
      ],
    },
    {
      groupName: "NFC SOUTH",
      teams: [
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-60-50x50.png",
          name: "Buccaneers",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-32-50x50.png",
          name: "Falcons",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-35-50x50.png",
          name: "Panthers",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-50-50x50.png",
          name: "Saints",
        },
      ],
    },
    {
      groupName: "NFC WEST",
      teams: [
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-58-50x50.png",
          name: "49ers",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-31-50x50.png",
          name: "Cardinals",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-59-50x50.png",
          name: "Rams",
        },
        {
          logo: "https://cdn-team-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-team-logos.theathletic.com/team-logo-57-50x50.png",
          name: "Seahawks",
        },
      ],
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
    <>
      <section data-aos="fade-up" className="sec2 my-3 py-3 ">
        <div className="container">
          <h1>NFL Draft {currentYear}</h1>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <div className="border-end">
                <div className="card border-0">
                  <div className="card-body">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/08120251/24_NFLDraft_TheBeast-1024x512.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack">
                      NFL Draft 2024 ‘The Beast’ Guide: Dane Brugler’s scouting
                      reports and player rankings
                    </h3>
                    <p className="text-stone text-lg mb-0">
                      This year's version of The Beast is the biggest ever, with
                      more than 400 player profiles and nearly 2,000 prospects
                    </p>
                    <div
                      className="text-stone text-sm
                text-stone text-md mt-1"
                    >
                      <span>Dane Brugler</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        603
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/05175605/0408_Mock-draft-copy.png"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        2024 NFL Mock Draft: Could quarterbacks go 1-2-3-4 atop
                        Round 1?{" "}
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Nick Baumgardner</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          488
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/01121449/GettyImages-1486353971-scaled-e1711988196818-1024x681.jpg"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Team-by-team NFL Draft guides: Picks, predictions and
                        needs
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>The Athletic NFL Staff</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          56
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/06155801/GettyImages-2092448585-scaled-e1712441079799-1024x683.jpg"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Which of the NFL Draft's top passers has the best
                        mechanics? QB gurus grade them
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Ted Nguyen</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          230
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/07192157/0408_Adisa_Isaac.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        As a son and brother, Penn State's Adisa Isaac 'juggled
                        a lot' — now comes the NFL
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Dan Pompei</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          67
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="sec2 my-3 py-3 ">
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/20181110/GettyImages-1698044438-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      New York Jets 2024 NFL Draft guide: Number of picks,
                      predictions and key needs{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Which positions will the Jets address in the draft? Who
                      are the best players available to fill those holes? Mocks,
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Zack Rosenblatt</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        66
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/24231800/USATSI_21702506-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Seattle Seahawks NFL Draft 2024 guide: Picks, predictions
                      and key needs
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Everything you need to know about the Seahawks as the 2024
                      NFL Draft approaches, including mock drafts,
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Michal-Shawn Dugar</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        27
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/15093602/Giants-7-round-mock-e1713188187914-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Giants 7-round NFL mock draft: Can NY trade up for a QB,
                      or will it have to 'settle' for WR?
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The Giants have done their homework on this year's QBs.
                      But will they take one in the first round of the NFL
                      Draft?
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Dan Duggan</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        61
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/12175232/GettyImages-1806657262-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Raiders NFL mock draft 3.0: Filling the biggest need at
                      No. 13 — and it's not a QB
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The cost to trade up for a quarterback is prohibitive — if
                      not impossible — but Oregon State's Taliese Fuaga would
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>vic Tafur</span>
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/12164904/GettyImages-1463524964-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Why Broncos' climb back to relevancy must start by nailing
                      long-awaited top pick{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The Broncos have derived far less impact from first-round
                      picks the last decade-plus than other teams in the
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Nick Kosmider</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        15
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/29122011/GettyImages-2058816134-scaled-e1711747742942-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      San Francisco 49ers NFL Draft 2024 guide: Picks,
                      predictions and key needs{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The 49ers own 10 picks in the upcoming NFL Draft and have
                      a big need at offensive tackle.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Matt Barrows and David Lombardi</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        35
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/12150519/GettyImages-951892950-scaled-e1712960987280-1024x682.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      How Packers' recent NFL Draft history might offer clues
                      for what's coming in 2024{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Brian Gutekunst enters his seventh draft as Packers
                      general manager with six picks in the first four rounds.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Matt Schneidman</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        32
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/14220553/USATSI_21931386-scaled-e1713148419103-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Ranking the Patriots' positions of need heading into the
                      NFL Draft: QB and then what?{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Everyone knows the Patriots need a quarterback early in
                      the NFL Draft. But what are the team's other pressing
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Chad Graff</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        27
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="m-3">
        <h5>NFL Teams</h5>
        <div className="team-grid">
          {nflTeams.map((group, index) => (
            <NFLTeamGroup
              key={index}
              groupName={group.groupName}
              teams={group.teams}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default NFLDraftComp;
