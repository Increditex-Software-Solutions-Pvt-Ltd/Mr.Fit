import React from "react";

function TeamDStats({ teamName }) {
  let goalKeepers = [
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/UUlxpMiAtFRLVfUx_96x96.png",
      name: "Robert Sanchez",
      jerseyNo: "1",
      POS: "GK",
      GP: 16,
      GS: 16,
      CS: 3,
      SV: 53,
      GA: 25,
      A: 0,
      PAcc: 79.6,
      FC: 0,
      FA: 1,
      YC: 2,
      RC: 0,
    },
    {
      pic: "",
      name: "E. Beach",
      jerseyNo: "",
      POS: "GK",
      GP: 0,
      GS: 0,
      CS: 0,
      SV: 0,
      GA: 0,
      A: 0,
      PAcc: 0.0,
      FC: 0,
      FA: 0,
      YC: 0,
      RC: 0,
    },
    {
      pic: "",
      name: "D. Petrovic",
      jerseyNo: "28",
      POS: "GK",
      GP: 15,
      GS: 14,
      CS: 2,
      SV: 50,
      GA: 27,
      A: 0,
      PAcc: 74.8,
      FC: 0,
      FA: 0,
      YC: 2,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/FWj2SSms0biJJ7xz_96x96.png",
      name: "M. Bettinelli",
      jerseyNo: "13",
      POS: "GK",
      GP: 0,
      GS: 0,
      CS: 0,
      SV: 0,
      GA: 0,
      A: 0,
      PAcc: 0.0,
      FC: 0,
      FA: 0,
      YC: 1,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/RVgSgq2YLPsg3sqf_96x96.png",
      name: "T. Sharman-Lowe",
      jerseyNo: "30",
      POS: "GK",
      GP: 0,
      GS: 0,
      CS: 0,
      SV: 0,
      GA: 0,
      A: 0,
      PAcc: 0.0,
      FC: 0,
      FA: 0,
      YC: 0,
      RC: 0,
    },
  ];

  let outfieldPlayers = [
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/oqIDYc9NkOBANdyR_96x96.png",
      name: "c. Gallagher",
      jerseyNo: 23,
      POS: "M",
      GP: 29,
      GS: 29,
      G: 3,
      A: 6,
      SH: 29,
      SOT: 15,
      PAcc: 90.9,
      TkIW: 43,
      INT: 36,
      FC: 64,
      FA: 42,
      YC: 6,
      RC: 1,
    },
    {
      pic: "",
      name: "A. Disasi",
      jerseyNo: 2,
      POS: "D",
      GP: 28,
      GS: 28,
      G: 2,
      A: 0,
      SH: 14,
      SOT: 4,
      PAcc: 90.2,
      TkIW: 18,
      INT: 17,
      FC: 17,
      FA: 17,
      YC: 6,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/k4BPKfn0pvnrTLX4_96x96.png",
      name: "R. Sterling",
      jerseyNo: 7,
      POS: "A",
      GP: 27,
      GS: 21,
      G: 6,
      A: 4,
      SH: 32,
      SOT: 18,
      PAcc: 78.9,
      TkIW: 10,
      INT: 12,
      FC: 30,
      FA: 37,
      YC: 6,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/Q6RUzfKA90DUFMdB_96x96.png",
      name: "M. Caicedo",
      jerseyNo: 25,
      POS: "M",
      GP: 27,
      GS: 25,
      G: 0,
      A: 1,
      SH: 4,
      SOT: 1,
      PAcc: 91.4,
      TkIW: 34,
      INT: 26,
      FC: 42,
      FA: 36,
      YC: 9,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/mA2LkzPdMOcVkFoZ_96x96.png",
      name: "E. Fernandez",
      jerseyNo: 8,
      POS: "M",
      GP: 27,
      GS: 25,
      G: 3,
      A: 2,
      SH: 34,
      SOT: 16,
      PAcc: 87.1,
      TkIW: 22,
      INT: 17,
      FC: 31,
      FA: 31,
      YC: 7,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/bho5fd6Swb9J2FH8_96x96.png",
      name: "C. Palmer",
      jerseyNo: 80,
      POS: "M",
      GP: 27,
      GS: 22,
      G: 16,
      A: 9,
      SH: 55,
      SOT: 35,
      PAcc: 82.9,
      TkIW: 12,
      INT: 15,
      FC: 20,
      FA: 20,
      YC: 7,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/SMvGFhYXbUH4qI7k_96x96.png",
      name: "Thiago Silva",
      jerseyNo: 6,
      POS: "D",
      GP: 24,
      GS: 23,
      G: 3,
      A: 0,
      SH: 7,
      SOT: 4,
      PAcc: 94.6,
      TkIW: 12,
      INT: 23,
      FC: 8,
      FA: 8,
      YC: 3,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/KkMPBnbQGiyIzvvq_96x96.png",
      name: "M. Gusto",
      jerseyNo: 27,
      POS: "D",
      GP: 22,
      GS: 17,
      G: 0,
      A: 5,
      SH: 9,
      SOT: 2,
      PAcc: 89.2,
      TkIW: 24,
      INT: 14,
      FC: 20,
      FA: 27,
      YC: 6,
      RC: 1,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/hla7NqaQuX98fAvK_96x96.png",
      name: "R. Lavia",
      jerseyNo: 45,
      POS: "M",
      GP: 1,
      GS: 0,
      G: 0,
      A: 0,
      SH: 0,
      SOT: 0,
      PAcc: 81.5,
      TkIW: 0,
      INT: 0,
      FC: 1,
      FA: 1,
      YC: 0,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/prn8aAj91V4pGsZY_96x96.png",
      name: "Deivid Washington",
      jerseyNo: 36,
      POS: "A",
      GP: 1,
      GS: 0,
      G: 0,
      A: 0,
      SH: 1,
      SOT: 0,
      PAcc: 100.0,
      TkIW: 1,
      INT: 0,
      FC: 0,
      FA: 0,
      YC: 0,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/d8YWaqF5oV8LdrY1_96x96.png",
      jerseyNo: 43,
      POS: "A",
      GP: 0,
      GS: 0,
      G: 0,
      A: 0,
      SH: 0,
      SOT: 0,
      PAcc: 0.0,
      TkIW: 0,
      INT: 0,
      FC: 0,
      FA: 0,
      YC: 0,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/GKa1YfGdueMrjfBr_96x96.png",
      name: "R. James",
      jerseyNo: 24,
      POS: "D",
      GP: 8,
      GS: 5,
      G: 0,
      A: 1,
      SH: 5,
      SOT: 1,
      PAcc: 83.5,
      TkIW: 8,
      INT: 3,
      FC: 4,
      FA: 3,
      YC: 0,
      RC: 1,
    },
    {
      pic: "",
      name: "A. Disasi",
      jerseyNo: 2,
      POS: "D",
      GP: 28,
      GS: 28,
      G: 2,
      A: 0,
      SH: 14,
      SOT: 4,
      PAcc: 90.2,
      TkIW: 18,
      INT: 17,
      FC: 17,
      FA: 17,
      YC: 6,
      RC: 0,
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/k4BPKfn0pvnrTLX4_96x96.png",
      name: "R. Sterling",
      jerseyNo: 7,
      POS: "A",
      GP: 27,
      GS: 21,
      G: 6,
      A: 4,
      SH: 32,
      SOT: 18,
      PAcc: 78.9,
      TkIW: 10,
      INT: 12,
      FC: 30,
      FA: 37,
      YC: 6,
      RC: 0,
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
        <b>{teamName} Stats</b>
      </h5>

      <section className="my-3">
        <div>
          <h5>
            <b>Goalkeepers</b>
          </h5>
          <div style={{ width: "100%", overflow: "auto" }}>
            <table className="table" style={{ width: "1150px" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>POS</th>
                  <th>GP</th>
                  <th>GS</th>
                  <th>CS</th>
                  <th>SV</th>
                  <th>GA</th>
                  <th>A</th>
                  <th>PAcc</th>
                  <th>FC</th>
                  <th>FA</th>
                  <th>YC</th>
                  <th>RC</th>
                </tr>
              </thead>
              <tbody>
                {goalKeepers.map((player) => {
                  return (
                    <tr>
                      <td className="d-flex align-items-end gap-2">
                        <img
                          src={
                            player.pic !== ""
                              ? player.pic
                              : "data:image/png;base64,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"
                          }
                          alt="player-pic"
                          width="45px"
                        />
                        <h6>
                          {player.name}
                          {"  "}
                          {player.jerseyNo ? `#${player.jerseyNo}` : ""}
                        </h6>
                      </td>
                      <td>{player.POS}</td>
                      <td>{player.GP}</td>
                      <td>{player.GS}</td>
                      <td>{player.CS}</td>
                      <td>{player.SV}</td>
                      <td>{player.GA}</td>
                      <td>{player.A}</td>
                      <td>{player.PAcc}</td>
                      <td>{player.FC}</td>
                      <td>{player.FA}</td>
                      <td>{player.YC}</td>
                      <td>{player.RC}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="my-4">
        <div>
          <h5 className="my-2">
            <b>Outfield Players</b>
          </h5>
          <div style={{ width: "100%", overflow: "auto" }}>
            <table className="table" style={{ width: "1150px" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>POS</th>
                  <th>GP</th>
                  <th>GS</th>
                  <th>G</th>
                  <th>A</th>
                  <th>SH</th>
                  <th>SOT</th>
                  <th>PAcc</th>
                  <th>TkIW</th>
                  <th>INT</th>
                  <th>FC</th>
                  <th>FA</th>
                  <th>YC</th>
                  <th>RC</th>
                </tr>
              </thead>
              <tbody>
                {outfieldPlayers.map((player) => {
                  return (
                    <tr>
                      <td className="d-flex align-items-end gap-2">
                        <img
                          src={
                            player.pic !== ""
                              ? player.pic
                              : "data:image/png;base64,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"
                          }
                          alt="player-pic"
                          width="45px"
                        />
                        <h6>
                          {player.name}
                          {"  "}
                          {player.jerseyNo ? `#${player.jerseyNo}` : ""}
                        </h6>
                      </td>
                      <td>{player.POS}</td>
                      <td>{player.GP}</td>
                      <td>{player.GS}</td>
                      <td>{player.G}</td>
                      <td>{player.A}</td>
                      <td>{player.SH}</td>
                      <td>{player.SOT}</td>
                      <td>{player.PAcc}</td>
                      <td>{player.TkIW}</td>
                      <td>{player.INT}</td>
                      <td>{player.FC}</td>
                      <td>{player.FA}</td>
                      <td>{player.YC}</td>
                      <td>{player.RC}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <div>
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
      </section>
    </div>
  );
}

export default TeamDStats;
