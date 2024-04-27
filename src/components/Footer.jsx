import React from "react";
import { Link } from "react-router-dom";
import { useTabContext } from "../contexts/TabsContext";

const Footer = () => {
  const footerNavs = [
    {
      title: "National",
      tabs: [
        "Boxing",
        "Bundesliga",
        "Champions League",
        "Championship",
        "College Football",
        "College Sports",
        "Copa America",
        "CopaDel Rey",
        "Culture",
        "Europa League",
        "European Championship",
        "FA Cup",
        "Fantasy Baseball",
        "Fantasy Basketball",
        "Fantasy Football",
        "Fantasy Hockey",
        "Fantasy Premier  League",
        "Formula 1",
        "Gaming",
        "Golf",
        "International Football",
        "La Liga",
        "League Cup",
        "League One",
        "League Two",
        "LNH",
        "Men's College Basketball",
        "Headlines",
        "Men's World Cup",
        "Mixed Martial Arts",
        "MLB",
        "MLS",
        "Motorsports",
        "NASCAR",
        "NBA",
        "NFL",
        "NHL",
        "NWSL",
        "Olympics",
        "Opinion",
        "Premier League",
        "Scottish Premiership",
        "Serie A",
        "Soccer",
        "Sports Betting",
        "Sports Business",
        "Tennis",
        "UK Women's Football",
        "WNBA",
        "Women's College Basketball",
        "Women's Euros",
        "Women's Hockey",
        "Women's World Cup",
        "The Athletic Ink",
        "Podcasts",
      ],
    },
    {
      title: "US",
      tabs: [
        "Arizona",
        "Atlanta",
        "Baltimore",
        "Bay Area",
        "Boston",
        "Buffalo",
        "Carolina",
        "Chicago",
        "Cincinnati",
        "Cleveland",
        "Columbus",
        "Dallas",
        "Denver",
        "Detroit",
        "Houston",
        "indiana",
        "Jacksonvilla",
        "Kansas City",
        "Las Vegas",
        "Las Angeles",
        "Memphis",
        "Miami",
        "Minnesota",
        "Nashville",
        "New Orleans",
        "New York",
        "Oklahoma",
        "Oregon",
        "Orlando",
        "Philadelphia",
        "Pittsburgh",
        "Sacramento",
        "San Antonio",
        "San Diego",
        "Seattle",
        "St. Louis",
        "Tampa Bay",
        "Utah",
        "Washington DC",
        "Wisconsin",
      ],
    },
    {
      title: "Canada",
      tabs: [
        "Calgary",
        "Edmonton",
        "Montreal",
        "Montréal (français)",
        "Ottawa",
        "Toronto",
        "Vancouver",
        "Winnipeg",
      ],
    },
    {
      title: "Partners",
      tabs: ["Odds by BetMGM", "Tickets by Viagogo"],
    },
    {
      title: "Subscribe",
      tabs: [
        "Start Subscription",
        "Buy a Gift",
        "Student Discount",
        "Group Subscriptions",
      ],
    },
    {
      title: "HQ",
      tabs: [
        "About Us",
        "Careers",
        "Code of Conduct",
        "Editorial guidelines",
        "Business Inquiries",
        "Press Inquiries",
      ],
    },
    {
      title: "Support",
      tabs: [
        "FAQ",
        "Forget Password?",
        "Redeem Gift",
        "Contact Us",
        "Terms of Service",
      ],
    },
    {
      title: "Newsletters",
      tabs: [
        "The Pulse",
        "The Bounce",
        "The Windup",
        "Prime Tire",
        "Full Time",
        "Until Saturday",
        "Scoop City",
        "The Athletic FC",
      ],
    },
  ];
  const tabs = useTabContext();

  function checkTab(val) {
    const subs = tabs.filter((tab) => {
      if (tab.title.split(" ").join("") === val.split(" ").join("")) {
        return tab;
      } else return 0;
    });
    return subs.length;
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-4">
          <h6 className="text-white">
            <b>{footerNavs[0].title}</b>
          </h6>
          <div className="row">
            <div className="col-12 col-md-6">
              <ul style={{ padding: "0px" }}>
                {footerNavs[0].tabs
                  .slice(0, Math.floor(footerNavs[0].tabs.length / 2))
                  .map((tab, i) => {
                    if (tab === "College Football") {
                      return (
                        <li
                          key={i}
                          className="nav-items"
                          style={{
                            cursor: "pointer",
                            paddingBottom: "8px",
                            fontSize: "12px",
                            listStyleType: "none",
                            color: "white",
                            margin: "0px",
                          }}
                        >
                          <Link
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            to={`/category/NCAAF`}
                            className="nav-link links"
                          >
                            {tab}
                          </Link>
                        </li>
                      );
                    } else if (!checkTab(tab)) {
                      return (
                        <li
                          key={i}
                          className="nav-items"
                          style={{
                            cursor: "pointer",
                            paddingBottom: "8px",
                            fontSize: "12px",
                            listStyleType: "none",
                            color: "white",
                            margin: "0px",
                          }}
                        >
                          <Link
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            to={`/category/common/${tab}`}
                            className="nav-link links"
                          >
                            {tab}
                          </Link>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={i}
                        className="nav-items"
                        style={{
                          cursor: "pointer",
                          paddingBottom: "8px",
                          fontSize: "12px",
                          listStyleType: "none",
                          color: "white",
                          margin: "0px",
                        }}
                      >
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                          to={`/category/${tab}`}
                          className="nav-link links"
                        >
                          {tab}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul style={{ padding: "0px" }}>
                {footerNavs[0].tabs
                  .slice(Math.floor(footerNavs[0].tabs.length / 2))
                  .map((tab, i) => {
                    if (!checkTab(tab)) {
                      return (
                        <li
                          key={i}
                          className="nav-items"
                          style={{
                            cursor: "pointer",
                            paddingBottom: "8px",
                            fontSize: "12px",
                            listStyleType: "none",
                            color: "white",
                            margin: "0px",
                          }}
                        >
                          <Link
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            to={`/category/common/${tab}`}
                            className="nav-link links"
                          >
                            {tab}
                          </Link>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={i}
                        className="nav-items"
                        style={{
                          cursor: "pointer",
                          paddingBottom: "8px",
                          fontSize: "12px",
                          listStyleType: "none",
                          color: "white",
                          margin: "0px",
                        }}
                      >
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                          to={`/category/${tab}`}
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
        </div>

        <div className="col-12 col-sm-4">
          <h6 className="text-white">
            <b>{footerNavs[1].title}</b>
          </h6>
          <div className="row">
            <div className="col-12 col-md-6">
              <ul style={{ padding: "0px" }}>
                {footerNavs[1].tabs
                  .slice(0, Math.floor(footerNavs[1].tabs.length / 2))
                  .map((tab, i) => {
                    if (!checkTab(tab)) {
                      return (
                        <li
                          key={i}
                          className="nav-items"
                          style={{
                            cursor: "pointer",
                            paddingBottom: "8px",
                            fontSize: "12px",
                            listStyleType: "none",
                            color: "white",
                            margin: "0px",
                          }}
                        >
                          <Link
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            to={`/category/common/${tab}`}
                            className="nav-link links"
                          >
                            {tab}
                          </Link>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={i}
                        className="nav-items"
                        style={{
                          cursor: "pointer",
                          paddingBottom: "8px",
                          fontSize: "12px",
                          listStyleType: "none",
                          color: "white",
                          margin: "0px",
                        }}
                      >
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                          to={`/category/${tab}`}
                          className="nav-link links"
                        >
                          {tab}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul style={{ padding: "0px" }}>
                {footerNavs[1].tabs
                  .slice(Math.floor(footerNavs[1].tabs.length / 2))
                  .map((tab, i) => {
                    if (!checkTab(tab)) {
                      return (
                        <li
                          key={i}
                          className="nav-items"
                          style={{
                            cursor: "pointer",
                            paddingBottom: "8px",
                            fontSize: "12px",
                            listStyleType: "none",
                            color: "white",
                            margin: "0px",
                          }}
                        >
                          <Link
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            to={`/category/common/${tab}`}
                            className="nav-link links"
                          >
                            {tab}
                          </Link>
                        </li>
                      );
                    }
                    return (
                      <li
                        key={i}
                        className="nav-items"
                        style={{
                          cursor: "pointer",
                          paddingBottom: "8px",
                          fontSize: "12px",
                          listStyleType: "none",
                          color: "white",
                          margin: "0px",
                        }}
                      >
                        <Link
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                          }
                          to={`/category/${tab}`}
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
        </div>

        <div className="col-12 col-sm-2">
          <h6 className="text-white">
            <b>{footerNavs[2].title}</b>
          </h6>
          <ul style={{ padding: "0px" }}>
            {footerNavs[2].tabs.map((tab, i) => {
              if (!checkTab(tab)) {
                return (
                  <li
                    key={i}
                    className="nav-items"
                    style={{
                      cursor: "pointer",
                      paddingBottom: "8px",
                      fontSize: "12px",
                      listStyleType: "none",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={`/category/common/${tab}`}
                      className="nav-link links"
                    >
                      {tab}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={i}
                  className="nav-items"
                  style={{
                    cursor: "pointer",
                    paddingBottom: "8px",
                    fontSize: "12px",
                    listStyleType: "none",
                    color: "white",
                    margin: "0px",
                  }}
                >
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={`/category/${tab}`}
                    className="nav-link links"
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}
          </ul>
          <h6 className="text-white pt-3">
            <b>{footerNavs[3].title}</b>
          </h6>
          <ul style={{ padding: "0px" }}>
            {footerNavs[3].tabs.map((tab, i) => {
              if (!checkTab(tab)) {
                return (
                  <li
                    key={i}
                    className="nav-items"
                    style={{
                      cursor: "pointer",
                      paddingBottom: "8px",
                      fontSize: "12px",
                      listStyleType: "none",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={`/`}
                      className="nav-link links"
                    >
                      {tab}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={i}
                  className="nav-items"
                  style={{
                    cursor: "pointer",
                    paddingBottom: "8px",
                    fontSize: "12px",
                    listStyleType: "none",
                    color: "white",
                    margin: "0px",
                  }}
                >
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={`/`}
                    className="nav-link links"
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-12 col-sm-2">
          <h6 className="text-white">
            <b>{footerNavs[4].title}</b>
          </h6>
          <ul style={{ padding: "0px" }}>
            {footerNavs[4].tabs.map((tab, i) => {
              if (!checkTab(tab)) {
                return (
                  <li
                    key={i}
                    className="nav-items"
                    style={{
                      cursor: "pointer",
                      paddingBottom: "8px",
                      fontSize: "12px",
                      listStyleType: "none",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={`/`}
                      className="nav-link links"
                    >
                      {tab}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={i}
                  className="nav-items"
                  style={{
                    cursor: "pointer",
                    paddingBottom: "8px",
                    fontSize: "12px",
                    listStyleType: "none",
                    color: "white",
                    margin: "0px",
                  }}
                >
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={`/`}
                    className="nav-link links"
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}
          </ul>
          <h6 className="text-white pt-3">
            <b>{footerNavs[5].title}</b>
          </h6>
          <ul style={{ padding: "0px" }}>
            {footerNavs[5].tabs.map((tab, i) => {
              if (!checkTab(tab)) {
                return (
                  <li
                    key={i}
                    className="nav-items"
                    style={{
                      cursor: "pointer",
                      paddingBottom: "8px",
                      fontSize: "12px",
                      listStyleType: "none",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={`/`}
                      className="nav-link links"
                    >
                      {tab}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={i}
                  className="nav-items"
                  style={{
                    cursor: "pointer",
                    paddingBottom: "8px",
                    fontSize: "12px",
                    listStyleType: "none",
                    color: "white",
                    margin: "0px",
                  }}
                >
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={`/`}
                    className="nav-link links"
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}
          </ul>
          <h6 className="text-white pt-3">
            <b>{footerNavs[6].title}</b>
          </h6>
          <ul style={{ padding: "0px" }}>
            {footerNavs[6].tabs.map((tab, i) => {
              if (!checkTab(tab)) {
                return (
                  <li
                    key={i}
                    className="nav-items"
                    style={{
                      cursor: "pointer",
                      paddingBottom: "8px",
                      fontSize: "12px",
                      listStyleType: "none",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={`/`}
                      className="nav-link links"
                    >
                      {tab}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={i}
                  className="nav-items"
                  style={{
                    cursor: "pointer",
                    paddingBottom: "8px",
                    fontSize: "12px",
                    listStyleType: "none",
                    color: "white",
                    margin: "0px",
                  }}
                >
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={`/`}
                    className="nav-link links"
                  >
                    {tab}
                  </Link>
                </li>
              );
            })}
          </ul>
          <h6 className="text-white pt-3">
            <b>{footerNavs[7].title}</b>
          </h6>
          <ul style={{ padding: "0px" }}>
            {footerNavs[7].tabs.map((tab, i) => {
              if (!checkTab(tab)) {
                return (
                  <li
                    key={i}
                    className="nav-items"
                    style={{
                      cursor: "pointer",
                      paddingBottom: "8px",
                      fontSize: "12px",
                      listStyleType: "none",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={`/`}
                      className="nav-link links"
                    >
                      {tab}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={i}
                  className="nav-items"
                  style={{
                    cursor: "pointer",
                    paddingBottom: "8px",
                    fontSize: "12px",
                    listStyleType: "none",
                    color: "white",
                    margin: "0px",
                  }}
                >
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={`/`}
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
      <h4 style={{ color: "gray", fontFamily: "Calibre, sans-serif" }}>
        <b>The Mr.Fit</b>
      </h4>

      <div className="d-flex justify-content-start gap-3 flex-wrap">
        <div className="">
          <small style={{ color: "gray" }}>
            @2024 Mr.Fit Media Company,A New York Times Company
          </small>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <small className="text-white" style={{ cursor: "pointer" }}>
              Privacy Policy
            </small>
          </div>
          <div className="col-3">
            <small className="text-white" style={{ cursor: "pointer" }}>
              Support
            </small>
          </div>
          <div className="col-3">
            <small className="text-white" style={{ cursor: "pointer" }}>
              Sitemap
            </small>
          </div>
        </div>

        <div className="ms-2">
          <small className="text-white d-flex gap-3">
            <a href="">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAMAAAA+9+1qAAAAb1BMVEUAAACNjY19fX1+fn5+fn59fX1+fn5/f3+AgIB9fX1+fn5/f399fX1+fn6AgIB/f3+BgYF9fX19fX1/f3+Dg4OEhISKiop9fX1+fn59fX1/f39+fn6CgoJ+fn59fX1+fn5/f3+CgoKJiYl+fn59fX2aS4TsAAAAJHRSTlMABXLv4c+vQyu3kGL49ltOI9q8Uh0QC+nDn4loFdahezEZCZac0dbIAAAA+klEQVQ4y43T2Y6DIBSA4cOiKO7bqK1d57z/Mw5DiWWxpN+VnvwRiAEOjXTpuvy86ZcWlIb4zblCjTUwDf1NTaYq9apf3CUl8qcaDYj9zx7ogS0Z2waA/j9lVsTtpsy7eVSRfj7tH8vQNd/VUKDGa5MV6C0HCpnNa3UVoNRuNJgDvydsud5ObiR0Q8Aah15HojntI9GmI4ExDLSJxaIUXmgsKkxE8kj0AIPI+GpGJqvj6A67lH3zoQ9NlYGljh/NaDiGVvCQYk28ZnlCQFy8TZMwSdElwdK2mShWf0tdA7ZNluGvp8FSD5q496OY4Ehbyz7hjF9yqe5D4A+8DVFvmWK0CQAAAABJRU5ErkJggg=="
                alt="twitter-logo"
                width="20px"
              />
            </a>
            <a href="">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAwFBMVEUAAAB8fH5ZWV96enyBgYSDg4RmZlp7e3xxcXZ7e31nZ2d0dHeBgYN8fH5/f4GDg4V7e314eHlvb3FDQ0h/f4F8fH57e35gYGB/f4F6enx+fn9nZ2dmZmZ6en2AgIJ8fH2BgYN/f4F+foF6en1+foF5eXx6en2AgIF7e3x8fHxycnZ9fYCEhIZ+foB9fYF6en1+fn53d3d+foF+fn5xcXdmZm18fH6BgYN7e319fX9+foCDg4WCgoSFhYeGhomKiozAnj/HAAAANnRSTlMA/QL79NEQ/TT4BTP89ePWaDcbDMyYfBPxoVoXCO7r59rGuqqpj4eAdGM5M93TvbJdWEVFKyPD16SCAAABbklEQVQ4y63T13KDMBAF0BWKLYsYjHvv3U4vKkjg//+rGMgDM1l5MpnsK2eupIsEHoz3j4FQAhtF5pvmlUAzTKRwjRK2PgL4nElOlFtRXW9CN+Xi1mgqNxBq5cgg+Qgi5sBwwqiOYyllnGlQGjNUmtmi0WhUwuwz4Dlm+frRGvfH7aNlGkfUdj3IxoORpXgSkx0ffO9qfHgxDkTMEXyAPGzkQITUT4Xot9qRYTjSd7Ur8mDPp9NACxzFd/dZUrths55RpCkdFKijOWU4UjJJTkXSxSSSaQQpPeztWtnZ/KjXO6wlunHbhIx8T5RQLKn+Bn5hPH8COwd6L6MhXqY9l5d7smiSft5u841PDt3heqAJXkFq8hdSfbgYqwXeOCVFmdVKzKkSzt9SK5AkQriQ/g2K/4bUvyUF+KUrowCWkv08XRkR2YEo4beX40kPvFXKmXIixc2iD9BfpdJZphJpeIbs7USdQCl0T4yF3RZ4X4EAyDr7JRlfAAAAAElFTkSuQmCC"
                alt="facebook-logo"
                width="20px"
              />
            </a>
            <a href="">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAjVBMVEUAAACEhIR9fX2BgYF8fHx2dnZycnJ0dHR7e3t8fHx2dnZ8fHx+fn5+fn58fHx8fHx9fX18fHx3d3d7e3t+fn5dXV1+fn5+fn5/f39/f39+fn58fHyBgYF6enp7e3t3d3d2dnZ1dXV0dHRycnJycnJ4eHh9fX16enp5eXl8fHx+fn6AgICDg4OBgYGGhob7f8wlAAAAK3RSTlMAA/78/kQHPWLNSPv67+3gkGtV9fMS9+vj1bKpoHlzTTg2LiYdavuHiYDBDElRsAAAAbZJREFUOMuNlIeS6jAMRYXiOL0TeicQdiXz/5/3NMYsb0uG3GTGRSeOLUsC0QTguFtHRd4kSqF9kyYvovXuaI0P5rCasSHCbyIinq0OYrbMJTVIQhnvP8mQCU16EUDeyiCa5WYb1vvYd4r3dbjdLBmVsdQhRcyqFv5QW2Wo0oP0VoyZLyv+EmgAP0NeyblmyJWMn7Jmq8tn30LFODvCjmnZvhDXyFMbvvfQLol3sDa8edlAn4LgpKWF8t7wp4YN0xoiMtsnBF0f5UrlUd8BBNO7CQG2hiIoSLoOCudMZAwRz0OhyloMoaECcuTaQR+Miq+LxZWvyB9uAzVjDg16+4dTQ05oWsbnc1xOKeEQ9ERm9x42kKAX25W6OVIRgFVQEM47u1LsYQKInm+PfGM1DeRrkZZdJ9zbad9DBeoBgY7oXjqnWgdQpOE7NIFTRmn8clicUnaCiYXwCwqUWZxf0HlhVOAg9Q4a/7tRGx/lgnHOHL4WmXLXMu6Ch0NF5ELlR9DdHkF368BBNuiGwvc5Y8N3KBGcXCIMp5RIu5QaTE7RV3JKmqs3af6mYBhXMEaUnnFFbFQ5/AcbxznTCcWaDQAAAABJRU5ErkJggg=="
                alt="instagram-logo"
                width="20px"
              />
            </a>
          </small>
        </div>
      </div>
      <div className="my-2">
        <img
          src="data:image/png;base64,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"
          alt="app-store-logo"
          height="30px"
          style={{ cursor: "pointer" }}
        />
        <img
          className="ps-3"
          src="data:image/png;base64,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"
          alt="play-store-logo"
          height="30px"
          style={{ cursor: "pointer" }}
        />
      </div>
    </>
  );
};

export default Footer;
