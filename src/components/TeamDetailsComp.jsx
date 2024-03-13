import React from "react";
import { useParams } from "react-router-dom";

function teamDetailsComp() {
  const { name, logo } = useParams();

  return (
    <div style={{ margin: "20px 0px" }}>
      <div
        className="teamNavbar"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" width="40px" />
          <h4>{name}</h4>
        </div>
        <div className="vr-line"></div>
        <div
          style={{ display: "flex", alignItems: "center", paddingTop: "10px" }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "20px",
              listStyleType: "none",
            }}
          >
            <li>Home</li>
            <li>Scores & Schedules</li>
            <li>Roster</li>
            <li>Stats</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default teamDetailsComp;
