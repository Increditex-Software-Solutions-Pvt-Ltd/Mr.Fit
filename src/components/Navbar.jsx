import React from "react";
import { Link } from "react-router-dom";
// import SideNavbar from "./SideNavbar";

const Navbar = ({ tabs }) => {
  tabs.length = 7;
  return (
    <>
      <header className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="menu pt-1">
              <i className="fas fa-bars" style={{ color: "white" }}></i>
              {/* <SideNavbar /> */}
            </div>

            <div className="d-flex justify-content-center align-items-center ms-3">
              <Link to="/" className="navbar-brand">
                The Athelitic
              </Link>
              <div className="vr-line"></div>
              <ul className="navbar-nav">
                {tabs.map((tab) => {
                  return tab.title === "Live News" ? (
                    <li className="nav-item">
                      <Link to={`/live`} className="nav-link links">
                        {tab.title}
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        to={`/category/${tab.title}`}
                        className="nav-link links"
                      >
                        {tab.title}
                      </Link>
                    </li>
                  );
                })}
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
                <span className="text-xs text-semilight ms-2">
                  Footballs biggest talking points
                </span>
              </a>
            </li>
            <li className="nav-item ms-5">
              <a href="" className="nav-link">
                <img
                  src="/assets/img/logo2.png"
                  className="subnav-logo"
                  alt=""
                />
                <span className="text-xs text-semilight ms-2">
                  World-cup schedule
                </span>
              </a>
            </li>
            <li className="nav-item ms-5">
              <a href="" className="nav-link">
                <img
                  src="/assets/img/logo3.png"
                  className="subnav-logo"
                  alt=""
                />
                <span className="text-xs text-semilight ms-2">
                  Football matches
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
