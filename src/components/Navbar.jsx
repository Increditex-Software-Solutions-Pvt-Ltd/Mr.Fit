import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../contexts/WindowWidth";
// import SideNavbar from "./SideNavbar";
import "../css/ComponentsCSS/Navbar.css";

const Navbar = ({ tabs }) => {
  const windowWidth = useWindowWidth();
  const [showRemainingTabs, setShowRemainingTabs] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  // Define breakpoints for tab display
  const breakpoints = [
    { width: 400, tabs: 0 },
    { width: 450, tabs: 1 },
    { width: 650, tabs: 1 },
    { width: 750, tabs: 2 },
    { width: 1050, tabs: 3 },
    { width: 1200, tabs: 5 },
    { width: 1400, tabs: 6 },
  ];

  let tabsToDisplay = 7; // default value
  for (let i = 0; i < breakpoints.length; i++) {
    if (windowWidth < breakpoints[i].width) {
      tabsToDisplay = breakpoints[i].tabs;
      break;
    }
  }

  const displayedTabs = tabs.slice(0, tabsToDisplay);
  const remainingTabs = tabs.slice(tabsToDisplay);

  return (
    <>
      <header className="navbar navbar-expand-md bg-dark navbar-dark sticky-top position-relative align-items-center">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center ">
            <div className="menu pt-1">
              <button
                onMouseEnter={() => setShowSideNavbar(true)}
                onMouseLeave={() => setShowSideNavbar(false)}
              >
                <i className="fas fa-bars" style={{ color: "white" }}></i>
              </button>
            </div>

            <div className="d-flex justify-content-center align-items-center ms-3">
              <Link to="/" className="navbar-brand">
                The Athelitic
              </Link>
              <div className="vr-line"></div>
              <ul className="navbar-nav">
                {displayedTabs.map((tab, i) => {
                  return tab.title === "Live News" ? (
                    <li className="nav-item" key={i}>
                      <Link to={`/live`} className="nav-link links">
                        {tab.title}
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item" key={i}>
                      <Link
                        to={`/category/${tab.title}`}
                        className="nav-link links"
                      >
                        {tab.title}
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <button
                    className="nav-link links py-2 px-2 ms-1"
                    onMouseEnter={() => setShowRemainingTabs(true)}
                    onMouseLeave={() => setShowRemainingTabs(false)}
                  >
                    <i className="bi bi-three-dots nav-item"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div>
              <button className="subscribebtn">Subscribe for $2</button>
            </div>
            <a
              href="#searchbar"
              className="nav-link text-white text-lg ms-1"
              data-bs-toggle="offcanvas"
            >
              <i className="bi bi-search"></i>
            </a>
          </div>
        </div>
        {showRemainingTabs && (
          <div
            className="dropdown-content"
            onMouseEnter={() => setShowRemainingTabs(true)}
            onMouseLeave={() => setShowRemainingTabs(false)}
          >
            <div className="triangle"></div>
            {remainingTabs.map((tab, i) => (
              <li className="nav-item" key={i}>
                <Link to={`/category/${tab.title}`} className="nav-link links">
                  <img
                    src={tab.logo}
                    alt={tab.title}
                    width="30px"
                    style={{ marginRight: "5px" }}
                  />
                  {tab.title}
                </Link>
              </li>
            ))}
          </div>
        )}
        {showSideNavbar && (
          <div
            className="dropdown-content"
            onMouseEnter={() => setShowSideNavbar(true)}
            onMouseLeave={() => setShowSideNavbar(false)}
          >
            <div className="triangle-side"></div>
            {tabs.map((tab, i) => (
              <li className="nav-item" key={i}>
                <Link to={`/category/${tab.title}`} className="nav-link links">
                  <img
                    src={tab.logo}
                    alt={tab.title}
                    width="30px"
                    style={{ marginRight: "5px" }}
                  />
                  {tab.title}
                </Link>
              </li>
            ))}
          </div>
        )}
      </header>
      <nav className="bg-darkstone">
        <div className="container">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <a href="" className="nav-link">
                <img
                  src="/assets/img/logo1.png"
                  className="subnav-logo"
                  alt=""
                />
                <button className="text-xs text-semilight ms-2">
                  Footballs biggest talking points
                </button>
              </a>
            </li>
            <li className="nav-item ms-5">
              <a href="" className="nav-link">
                <img
                  src="/assets/img/logo2.png"
                  className="subnav-logo"
                  alt=""
                />
                <button className="text-xs text-semilight ms-2">
                  World-cup schedule
                </button>
              </a>
            </li>
            <li className="nav-item ms-5">
              <a href="" className="nav-link">
                <img
                  src="/assets/img/logo3.png"
                  className="subnav-logo"
                  alt=""
                />
                <button className="text-xs text-semilight ms-2">
                  Football matches
                </button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
