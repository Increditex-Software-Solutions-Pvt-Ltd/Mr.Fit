import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";

const CommonNavbar = ({ subTabs }) => {

  const { title } = useParams();

  const tabs = useTabContext();

  const name = tabs.filter((tab) => {
    if (tab.title.split(" ").join("") === title.split(" ").join("")) {
      return tab;
    } else return 0;
  });

  return (
    <>
      <header className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <div className="menu">
              <i className="fas fa-bars" style={{ color: "white" }}></i>
              {/* <SideNavbar /> */}
            </div>
            <div className="d-flex justify-content-center align-items-center ms-3">
              <Link to="/" className="navbar-brand">
                The Athelitic
              </Link>
              <Link to={`/category/${title}`} className="navbar-brand">
                <img
                  src={`${name[0].logo}`}
                  alt=""
                  width="40px"
                  className="pe-1"
                />
                {name[0].name}
              </Link>
              <div className="vr-line"></div>
              <ul className="navbar-nav">
                {subTabs.map((tab) => {
                  return (
                    tab === "Home" ?
                      <li className="nav-item">
                        <Link

                          to={`/category/${title}`}
                          className="nav-link links"
                        >
                          {tab}
                        </Link>
                      </li>

                      :
                      <li className="nav-item">
                        <Link

                          to={`/category/sub/${tab}/${title}`}
                          className="nav-link links"
                        >
                          {tab}
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
    </>
  );
};

export default CommonNavbar;
