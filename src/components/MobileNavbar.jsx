import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../contexts/WindowWidth";

function MobileNavbar({ tabs }) {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const windowWidth = useWindowWidth();
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
              <Link to="/" className="navbar-brand">
                Mr.Fit
              </Link>
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
              {tabs.map((tab, i) =>
                tab.title === "Live News" ? (
                  <li className="nav-item" key={i}>
                    <Link to={`/live`} className="nav-link links">
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
                  </li>
                )
              )}
            </div>
          )} */}
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
}

export default MobileNavbar;
