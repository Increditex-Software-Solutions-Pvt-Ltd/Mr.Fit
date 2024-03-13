import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";
import { useWindowWidth } from "../contexts/WindowWidth";
import "../css/ComponentsCSS/CommonNavbar.css";

const CommonNavbar = ({ subTabs }) => {
  const { title } = useParams();

  const tabs = useTabContext();

  const name = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  const windowWidth = useWindowWidth();
  const [showRemainingTabs, setShowRemainingTabs] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const [numColumns, setNumColumns] = useState(5); // State to keep track of number of columns

  useEffect(() => {
    // Update number of columns based on screen width
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setNumColumns(10);
      } else if (window.innerWidth > 800) {
        setNumColumns(16);
      } else if (window.innerWidth > 900) {
        setNumColumns(15);
      } else {
        setNumColumns(2);
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

  // Define breakpoints for tab display
  const breakpoints = [
    { width: 400, tabs: 0 },
    { width: 450, tabs: 1 },
    { width: 650, tabs: 1 },
    { width: 750, tabs: 2 },
    { width: 1050, tabs: 2 },
    { width: 1200, tabs: 3 },
    { width: 1400, tabs: 4 },
  ];

  let tabsToDisplay = 7; // default value
  for (let i = 0; i < breakpoints.length; i++) {
    if (windowWidth < breakpoints[i].width) {
      tabsToDisplay = breakpoints[i].tabs;
      break;
    }
  }

  const displayedTabs = subTabs.slice(0, tabsToDisplay);
  const remainingTabs = subTabs.slice(tabsToDisplay);

  return (
    <>
      <header className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <div className="container position-relative">
          <div className="d-flex justify-content-center align-items-center">
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
              <Link to="/" className="navbar-brand">
                The Athelitic
              </Link>
              <Link to={`/category/${title}`} className="navbar-brand">
                <img
                  src={`${name[0].logo}`}
                  alt=""
                  width="30px"
                  className="pe-1"
                />
                {name[0].name}
              </Link>
              <div className="vr-line"></div>
              <ul className="navbar-nav justify-content-start align-items-center gap-3">
                {subTabs.length > 1 &&
                  displayedTabs.map((tab, i) => {
                    return tab === "Home" ? (
                      <li className="nav-item" key={i}>
                        <Link
                          to={`/category/${title}`}
                          className="nav-link links"
                        >
                          {tab}
                        </Link>
                      </li>
                    ) : (
                      <li className="nav-item" key={i}>
                        <Link
                          to={`/category/sub/${tab}/${title}`}
                          className="nav-link links"
                        >
                          {tab}
                        </Link>
                      </li>
                    );
                  })}
                {remainingTabs.length > 0 ? (
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
                ) : (
                  ""
                )}
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
              className="dropdown-content-sub"
              onMouseEnter={() => setShowRemainingTabs(true)}
              onMouseLeave={() => setShowRemainingTabs(false)}
            >
              {remainingTabs.map((tab, i) =>
                tab === "Home" ? (
                  <li
                    className="nav-item"
                    key={i}
                    onClick={() => setShowRemainingTabs(false)}
                  >
                    <Link to={`/category/${title}`} className="nav-link links">
                      <img
                        src="https://cdn-media.theathletic.com/cropped-favicon-50x50.png"
                        alt="logo"
                        width="30px"
                        style={{ marginRight: "10px" }}
                      />
                      <span
                        style={{
                          color: "black",
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        {tab}
                      </span>
                    </Link>
                  </li>
                ) : (
                  <li
                    className="nav-item"
                    key={i}
                    onClick={() => setShowRemainingTabs(false)}
                  >
                    <Link
                      to={`/category/sub/${tab}/${title}`}
                      className="nav-link links"
                    >
                      <img
                        src="https://cdn-media.theathletic.com/cropped-favicon-50x50.png"
                        alt="logo"
                        width="30px"
                        style={{ marginRight: "10px" }}
                      />
                      <span
                        style={{
                          color: "black",
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        {tab}
                      </span>
                    </Link>
                  </li>
                )
              )}
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
                            <Link to={`/live`} className="nav-link links">
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
            </div>
          )}
          {/* {showSideNavbar && (
            <div
              className="dropdown-content"
              onMouseEnter={() => setShowSideNavbar(true)}
              onMouseLeave={() => setShowSideNavbar(false)}
            >
              {tabs.map((tab, i) => (
                <li className="nav-item" key={i}>
                  <Link
                    onClick={() => setShowSideNavbar(false)}
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
              ))}
            </div>
          )} */}
        </div>
      </header>
    </>
  );
};

export default CommonNavbar;
