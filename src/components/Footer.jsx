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
        <div className="col-12 col-md-4">
          <h6 className="text-white">
            <b>{footerNavs[0].title}</b>
          </h6>
          <div className="row">
            <div className="col-12 col-md-6">
              <ul style={{ padding: "0px" }}>
                {footerNavs[0].tabs
                  .slice(0, Math.floor(footerNavs[0].tabs.length / 2))
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

        <div className="col-12 col-md-4">
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

        <div className="col-12 col-md-2">
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

        <div className="col-12 col-md-2">
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
            <small className="text-white">Privacy Policy</small>
          </div>
          <div className="col-3">
            <small className="text-white">Support</small>
          </div>
          <div className="col-3">
            <small className="text-white">Sitemap</small>
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
    </>
  );
};

export default Footer;
