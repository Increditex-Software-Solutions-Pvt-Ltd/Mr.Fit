import React from "react";
import { useNavigate } from "react-router-dom";
import MainNewsComp from "./MainNewsComp";

function TeamsDetailsHome({ teamName }) {
  const schedules = {};

  return (
    <div>
      <MainNewsComp />

      <section>
        <div className="row border-bottom">
          <div className="col-md-12 col-lg-4 border-end">
            <div className="d-flex justify-content-between">
              <h6 style={{ fontWeight: "bold" }}>Schedule</h6>
              <small>
                Full Schedule
                <i className="fa fa-angle-right ms-2" aria-hidden="true"></i>
              </small>
            </div>
            <div className="mt-2">
              <div className="border-bottom mb-2">
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
                          <b>Arsenal</b>
                        </span>
                      </div>
                      <div>2</div>
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
                      <div>2</div>
                    </div>
                  </div>
                  <div className="col-3 d-flex justify-content-center align-items-center">
                    <h6>
                      <b>FT</b> TODAY
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4 border-end">
            <div className="d-flex justify-content-between">
              <h6 style={{ fontWeight: "bold" }}>{teamName}</h6>
              <small>
                Full Standings
                <i className="fa fa-angle-right ms-2" aria-hidden="true"></i>
              </small>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="d-flex justify-content-between">
              <h6 style={{ fontWeight: "bold" }}>Team Leader</h6>
              <small>
                Full Team Stats
                <i className="fa fa-angle-right ms-2" aria-hidden="true"></i>
              </small>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamsDetailsHome;
