import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../contexts/WindowWidth";
import "../css/ComponentsCSS/Navbar.css";

const Navbar = ({ tabs }) => {
  const windowWidth = useWindowWidth();
  const [showRemainingTabs, setShowRemainingTabs] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [numColumns, setNumColumns] = useState(5); // State to keep track of number of columns

  // Define breakpoints for tab display
  const breakpoints = [
    { width: 400, tabs: 0 },
    { width: 450, tabs: 1 },
    { width: 650, tabs: 2 },
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

  useEffect(() => {
    // Update number of columns based on screen width
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setNumColumns(10);
      } else if (window.innerWidth > 1024) {
        setNumColumns(12);
      } else if (window.innerWidth > 900) {
        setNumColumns(15);
      } else {
        setNumColumns(1);
      }
    };

    // Call the function initially and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  // Split the tabs into groups based on the number of columns
  const tabGroups = [];
  for (let i = 0; i < tabs.length; i += numColumns) {
    tabGroups.push(tabs.slice(i, i + numColumns));
  }

  // Add "Other Tabs" at the end
  tabGroups.push([
    { title: "Search" },
    { title: "Login" },
    { title: "invite Friends" },
    { title: "Saved Stories" },
    { title: "Manage Feed" },
  ]);

  return (
    <>
      <header className="navbar navbar-expand-md bg-dark navbar-dark sticky-top  align-items-center">
        <div className="container position-relative">
          <div className="d-flex justify-content-center align-items-center ">
            <div className="menu pt-1 position-relative">
              <button
                onMouseEnter={() => setShowSideNavbar(true)}
                onMouseLeave={() => setShowSideNavbar(false)}
              >
                <i className="fas fa-bars" style={{ color: "white" }}></i>
              </button>
              {showSideNavbar && (
                <div
                  className="triangle-side"
                  onMouseEnter={() => setShowSideNavbar(true)}
                  onMouseLeave={() => setShowSideNavbar(false)}
                ></div>
              )}
            </div>

            <div className="d-flex justify-content-center align-items-center ms-3">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
                className="navbar-brand"
              >
                Mr.Fit
              </Link>
              <div className="vr-line"></div>
              <ul className="navbar-nav">
                {displayedTabs.map((tab, i) => {
                  return tab.title === "Live News" ? (
                    <li className="nav-item" key={i}>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to={`/live`}
                        className="nav-link links"
                      >
                        {tab.title}
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item" key={i}>
                      <Link
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        to={`/category/${tab.title}`}
                        className="nav-link links"
                      >
                        {tab.title}
                      </Link>
                    </li>
                  );
                })}
                <li className="position-relative">
                  <button
                    className="nav-link links py-2 px-2 ms-1"
                    onMouseEnter={() => setShowRemainingTabs(true)}
                    onMouseLeave={() => setShowRemainingTabs(false)}
                  >
                    <i className="bi bi-three-dots nav-item"></i>
                  </button>
                  {showRemainingTabs && (
                    <div
                      className="triangle"
                      onMouseEnter={() => setShowRemainingTabs(true)}
                      onMouseLeave={() => setShowRemainingTabs(false)}
                    ></div>
                  )}
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
          {showRemainingTabs && (
            <div
              className="dropdown-content-remaining"
              onMouseEnter={() => setShowRemainingTabs(true)}
              onMouseLeave={() => setShowRemainingTabs(false)}
            >
              {remainingTabs.map((tab, i) => (
                <li
                  className="nav-item"
                  key={i}
                  onClick={() => setShowRemainingTabs(false)}
                >
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={`/category/${tab.title}`}
                    className="nav-link links"
                  >
                    <img
                      src={tab.logo}
                      alt={tab.title}
                      width="30px"
                      style={{ marginRight: "5px" }}
                    />
                    <span style={{ color: "black" }}> {tab.title}</span>
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
              <div className="tabs-container">
                {tabGroups.map((group, index) =>
                  index !== tabGroups.length - 1 ? (
                    <div key={index} className="column">
                      {group.map((tab, i) =>
                        tab.title === "Live News" ? (
                          <div
                            className="tab"
                            key={i}
                            onClick={() => setShowSideNavbar(false)}
                          >
                            <Link
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }
                              to={`/live`}
                              className="nav-link links"
                            >
                              <img
                                src={tab.logo}
                                alt={tab.title}
                                width="30px"
                                style={{ marginRight: "5px" }}
                              />
                              {tab.title}
                            </Link>
                          </div>
                        ) : (
                          <div
                            className="tab"
                            key={i}
                            onClick={() => setShowSideNavbar(false)}
                          >
                            <Link
                              onClick={() =>
                                window.scrollTo({ top: 0, behavior: "smooth" })
                              }
                              to={`/category/${tab.title}`}
                              className="nav-link links"
                            >
                              <img
                                src={tab.logo}
                                alt={tab.title}
                                width="30px"
                                style={{ marginRight: "5px" }}
                              />
                              {tab.title}
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <div key={index} className="column">
                      <hr
                        style={{
                          color: "white",
                          width: "200px",
                          margin: "0px",
                        }}
                      />
                      {group.map((tab, i) => (
                        <div
                          className="tab"
                          key={i}
                          onClick={() => setShowSideNavbar(false)}
                        >
                          <Link
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            // to={`/category/${tab.title}`}
                            className="nav-link links"
                          >
                            {tab.title}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
              {/* {tabs.map((tab, i) =>
                tab.title === "Live News" ? (
                  <li className="nav-item" key={i}>
                    <Link onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            } to={`/live`} className="nav-link links">
                      <img
                        src={tab.logo}
                        alt={tab.title}
                        width="30px"
                        style={{ marginRight: "5px" }}
                      />
                      {tab.title}
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item" key={i}>
                    <Link onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                      to={`/category/${tab.title}`}
                      className="nav-link links"
                    >
                      <img
                        src={tab.logo}
                        alt={tab.title}
                        width="30px"
                        style={{ marginRight: "5px" }}
                      />
                      {tab.title}
                    </Link>
                  </li>
                )
              )} */}
            </div>
          )}
        </div>
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
