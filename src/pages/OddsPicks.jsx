import React, { useEffect, useState } from "react";
import CommonNavbar from "../components/CommonNavbar";
import MobileCommonNavbar from "../components/MobileCommonNavbar";
import { useWindowWidth } from "../contexts/WindowWidth";
import { useTabContext } from "../contexts/TabsContext";
import { useParams } from "react-router-dom";
import PicksComp from "../components/PicksComp";
import OddsComp from "../components/OddsComp";

const OddsPicks = () => {
  const tabs = useTabContext();
  const { title, sort } = useParams();

  const subs = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  const windowWidth = useWindowWidth();

  const [active, setActive] = useState(sort);

  const handleActiveTab = (tabId) => {
    setActive(tabId);
  };

  useEffect(() => {
    setActive(sort);
    setSelectedValue(title);
  }, [sort, title]);

  const [selectedValue, setSelectedValue] = useState(title); // Example initial selected value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <>
        {windowWidth > 750 ? (
          <CommonNavbar subTabs={subs[0].subTitles} />
        ) : (
          <MobileCommonNavbar subTabs={subs[0].subTitles} />
        )}
        <section className="m-3">
          <div className="d-flex justify-content-between">
            <h3>
              <b>
                {selectedValue} {active}
              </b>
            </h3>
            <div>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${active === "Picks" ? "active" : ""}`}
                    onClick={() => handleActiveTab("Picks")}
                    id="pills-picks-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-picks"
                    type="button"
                    role="tab"
                    aria-controls="pills-picks"
                    aria-selected="true"
                  >
                    Picks
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${active === "Odds" ? "active" : ""}`}
                    onClick={() => handleActiveTab("Odds")}
                    id="pills-odds-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-odds"
                    type="button"
                    role="tab"
                    aria-controls="pills-odds"
                    aria-selected="false"
                  >
                    Odds
                  </button>
                </li>
                <li className="ms-2">
                  <select
                    className="form-select"
                    name="categories"
                    id="categories"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <option value="NFL">NFL</option>
                    <option value="NCAAF">NCAAF</option>
                    <option value="NBA">NBA</option>
                    <option value="NCAAM">NCAAM</option>
                    <option value="MLB">MLB</option>
                    <option value="NHL">NHL</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="m-3">
          <div className="tab-content" id="pills-tabContent">
            <div
              className={`tab-pane fade${
                active === "Picks" ? "show active" : ""
              }`}
              id="pills-picks"
              role="tabpanel"
              aria-labelledby="pills-picks-tab"
            >
              <PicksComp />
            </div>
            <div
              className={`tab-pane fade${
                active === "Odds" ? "show active" : ""
              }`}
              id="pills-odds"
              role="tabpanel"
              aria-labelledby="pills-odds-tab"
            >
              <OddsComp />
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default OddsPicks;
