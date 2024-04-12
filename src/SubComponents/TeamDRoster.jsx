import React from "react";
// import { useTable } from "react-table";

function TeamDRoster() {
  let goalKeepers = [
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
    },
    {
      pic: "",
      name: "K.Ziger",
      jerseyNo: "",
      POS: "GK",
      HT: "",
      WT: "",
      DOB: "2001-05-11",
      AGE: "22",
      NAT: "CRO",
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/FWj2SSms0biJJ7xz_96x96.png",
      name: "M.Bettinelli",
      jerseyNo: "13",
      POS: "GK",
      HT: "1.94",
      WT: "82",
      DOB: "1992-05-24",
      AGE: "31",
      NAT: "ENG",
    },
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/UUlxpMiAtFRLVfUx_96x96.png",
      name: "Robert Sanchez",
      jerseyNo: "1",
      POS: "GK",
      HT: "1.97",
      WT: "90",
      DOB: "1997-11-18",
      AGE: "26",
      NAT: "ENG",
    },
  ];

  let outfieldPlayers = [
    {
      pic: "https://cdn-headshots.theathletic.com/cdn-cgi/image/width=1440%2cformat=auto%2cquality=75/https://cdn-headshots.theathletic.com/soccer/r1pdc5g4Vl5aKn1f_96x96.png",
      name: "A. Baba",
      jerseyNo: "12",
      POS: "D",
      HT: "1.8",
      WT: "72",
      DOB: "1994-07-02",
      AGE: "29",
      NAT: "GHA",
    },
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
    },
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
    },
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
    },
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
    },
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
    },
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
    },
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
    },
    {
      pic: "",
      name: "D.Petrovic",
      jerseyNo: "28",
      POS: "GK",
      HT: "1.94",
      WT: "89",
      DOB: "1999-10-08",
      AGE: "24",
      NAT: "SRB",
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

  // const columns1 = [
  //   {
  //     Header: "",
  //     accessor,
  //   },
  // ];

  // const table1 = useTable({
  //   columns1,
  //   goalKeepers,
  // });

  return (
    <div>
      <h5 className="my-4">
        <b>Chelsea Roster</b>
      </h5>
      <div>
        <h5 className="my-2">
          <b>GoalKeepers</b>
        </h5>
        <div style={{ width: "100%", overflow: "auto" }}>
          <table className="table" style={{ width: "1150px" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>POS</th>
                <th>HT</th>
                <th>WT</th>
                <th>DOB</th>
                <th>AGE</th>
                <th>NAT</th>
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
                    <td>{player.HT ? `${player.HT} m` : "--"}</td>
                    <td>{player.WT ? `${player.WT} kg` : "--"}</td>
                    <td>{player.DOB}</td>
                    <td>{player.AGE}</td>
                    <td>{player.NAT}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="my-3">
        <h5 className="my-2">
          <b>Outfield Players</b>
        </h5>
        <div style={{ width: "100%", overflow: "auto" }}>
          <table className="table" style={{ width: "1150px" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>POS</th>
                <th>HT</th>
                <th>WT</th>
                <th>DOB</th>
                <th>AGE</th>
                <th>NAT</th>
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
                            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABQCAYAAAATHPslAAAG8UlEQVR4Ae2de2zbRBzHx0OAeAqQeAmEAPF+CQEDsUkg8RAINPiDhzQJJP4A/kGwifEfUw7FiktCI5rGId0y2iXTtjq0a7a1NEuzLqQbbbK2o5nTpk2qhTYladrSdogBA4xuUrWsdc6O49hZ8ps0Nbnfne97n2/Oj/OdvWoV/AMCQAAIAAEgAASAABBQhgDP8xdms9lbYrHY6qHh4Wdj4+OPptPpG3iev0CZGmArRRPgef7iWCy21uPx1DIM86MOoZM6hHiB/7ONjY1tPr9/w/T09E1FVwwbkEdgbGzsMavN1okQ+lvAJCHjzqQZaDrV3NxsSafTd8irGUoVTIDn+UtYljUWatZyY3H575qamqHnFWxB4QUOHTr0AULov+UmyP1eazYfGx0dfapwJVBCEgF8coEQ+kOuQfnK6SnqZCKReFKSCMgkncCJEyfuN5pM8Xzgi02vs1hC8/Pz10pXBDlFCdgbGrzFGiNWvqur6xNRIZBBGoGjg4OvigFXIl5rNkenpqZul6YKchEJBIPB95QwRco27HZ7J75IJwqCIJkABti4fTsrBbhSebxe7yayKogSCUSj0acRQn8qZYiU7Rho+tdMJnMXURgE8xPYuXu3XQpopfO0tbXV5FcFESIBo8nEKW2IlO3hYxtRGASFCWSz2auUHP2QYtZSHofD4RFWBalEAvF4/KEliGr/9Xg8RqI4CAoTiEajL6ht1lJ9+HaPsCpIJRKIRKOqXFQvGZX71+FwdBDFQVCYAMdxz+eCVPOzlWEGhVVBKpFAMpl8UE2jcuuqZ5ifiOIgKEwgnU5fgRD6JxemWp+dTuduYVWQKkqgzmLpU8uo3Hq6u7s3iIqDDCsJpFKp21wuF5MLU6XPp48ODr7B8/xlK1VBSl4CGJjRZIrqdLp5tS+wEUKLOoROtbe3f5FXIARWEshkMndicCr1LMHZW263u2mlMkjJS2B8fPwRLQ3DdbMsy+YVCIGVBGZmZu7TIfSvlsaxLAtnkCutyZ+SyWRu1CGU1dI0t9v9bX6FEBEkUFdf36ulaQe6uj4TFAaJ+Qns2LHDqaVpAwMD6/Krg4ggAZ/fv0lL02BmlqAt5ER8gauZaTrd7zAri+yPYHRycvJWrUyrs1gOC4qCRHECNE2PamFcS0uLQVwd5BAkcPTYsZcMND2hpnH1DONdXFy8XlAQJEojkM1mbz7c2/tusWvSxIzf4nB4OY57mef5y6Upg1xEAnipbqmv23w+30aiCAgWTgCPuov1FrlxPUX9Njk5eU/hqqAEkcDQ0NBbck0RK2dlmJ+JlUNQHoFSzs6yMkyvPFVQikiglLOzrDZbN7FyCMojEIlEnhPbzcmNWxnmgDxVUIpIAC97kmuKWDkrw7QTK4egPAKRSOQZMfhy4wzDwIxiebaQS3Ec94pcU8TKWW22HnLtEJVFoDsQ+EgMvty4Xq9PTk9PXylLGBTKT8Dr9erkmiJWDj9UZmJi4u78tUOkIAJ4LLA7EPjUaDL9Iga/mPgWh2MPx3GrCxIHmc8SwGONIyMja3bt2tWop6jZYswotKzVavUHg8H3YeD4rB/ETzzPX4qPXXUWS7DUo/piZn5tNg96PB7DwsLCdUTR1R5kWdYmBlPtuL2h4eDs7OzV1e7NOe1f2hW63W6zDqHTapsipb6t27Z1RiKRF6t+UQae+r13714KP+1UCrhyyKOnqDmWZb/BF/o8z190zq+vkr9wHLcWz94lPHNYcEFEOZiWo+Eve0PDD/39/a9VbO/DB3Ofz/c5PrjnNPx8MEdUo56iMh6PR4+fSVkRnQ0/c9jr9W78ymSKVZpZy9uD737v7+j48rx9LjI+uThy5Mj6WrN5eHnjKv27nqLmfX7/x+fVdV4ikXh4q8PRptUi93L5UVgZJnD8+PE1ZTtTGb9lYmRk5Am8aEJPUQvlAq4MdJzCP+BwOPwm3vuUxTEPj4wfDAQ+PLM+WvjtE6IH8jIAq4pGA00nW1pba/DaO83Mw+ui8XBTtUBXqp1Gk2k4HA6/rrpxoVDoHT1FzSjVkGrbDn5iA57HqdouMx6PP66nKPzYBlV2K5VaDz5R29/RsbnkPQ6fbOgpaqpSQWrRrp6envUlMw6PapR6Pr0W0LSu00DTU3gctiTGuVwul9YNrNT6a83mAcWPb8lk8oFyvW1SKUaGQqG3Fe1tTqdzW6XAKdd21JrN/XNzc9coYlw4HF4HvUydM+V97e1IEdPsdvu+cv11VpouPGpS9F2CVCp1r9qP7qs0IwptD743V1Rv6+zs3FxopZC/uF2pgabHZL/mGb+5z1BTMw4mFGeCHH74VZqyeltfX1/JlsvKaUg1lfm+tdUky7Smpqad1QSqnNpqoOmE0FzL/wFMQ/EGzWHYdwAAAABJRU5ErkJggg=="
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
                    <td>{player.HT ? `${player.HT} m` : "--"}</td>
                    <td>{player.WT ? `${player.WT} kg` : "--"}</td>
                    <td>{player.DOB}</td>
                    <td>{player.AGE}</td>
                    <td>{player.NAT}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
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

export default TeamDRoster;
