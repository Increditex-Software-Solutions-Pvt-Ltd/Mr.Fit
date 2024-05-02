import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const SuperBowlNFLComp = ({ title }) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <>
        <section data-aos="fade-up" className="sec2 my-3 py-3 ">
          <div className="container">
            <h1>Super Bowl {currentYear}</h1>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <div className="border-end">
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="card border-0"
                  >
                    <div className="card-body">
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/13220611/USATSI_22501971-1024x683.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <h3 className="text-headblack">
                        49ers pack their bags believing they'll be ready for the
                        steep climb ahead
                      </h3>
                      <p className="text-stone text-lg mb-0">
                        Linebacker Fred Warner: "I know it's not a thing of
                        'if,' it's just 'when.' It sucks that it wasn't this
                        time, because
                      </p>
                      <div
                        className="text-stone text-sm
                  text-stone text-md mt-1"
                      >
                        <span>David Lombardi</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          100
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none">
                      <img
                        src="https://cdn-media.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn-media.theathletic.com/s1iecqQvbh5m_QdXcDSKH6u6m_720x480.jpg"
                        style={{ height: "100px", width: "140px" }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h5 className="mb-0">
                          How the Chiefs and Patrick Mahomes defeated the 49ers
                          in the 2024 Super Bowl{" "}
                        </h5>
                        <div
                          className="text-stone text-sm
                     text-stone text-sm mt-1"
                        >
                          <span>Nick miller</span>
                          <span className="ms-3">
                            <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                            49
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12200436/GettyImages-2004098180-scaled-e1707789301831-1024x683.jpg"
                        style={{ height: "100px", width: "140px" }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h5 className="mb-0">
                          Inside the Chiefs-49ers chess match that set up Kansas
                          City to win the Super Bowl
                        </h5>
                        <div
                          className="text-stone text-sm
                     text-stone text-sm mt-1"
                        >
                          <span>Nate Taylor</span>
                          <span className="ms-3">
                            <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                            56
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12220728/AP24033670363713-1024x683.jpg"
                        className="img-fluid"
                        style={{ height: "100px", width: "140px" }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h5 className="mb-0">
                          Super Bowl film review: Chiefs' Steve Spagnuolo
                          cements all-time
                        </h5>
                        <div
                          className="text-stone text-sm
                     text-stone text-sm mt-1"
                        >
                          <span>Ted Nguyen</span>
                          <span className="ms-3">
                            <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                            122
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12025227/GettyImages-2004341962-1024x683.jpg"
                        className="img-fluid"
                        style={{ height: "100px", width: "140px" }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h5 className="mb-0">
                          Super Bowl LVIII becomes most-watched U.S. program
                          ever with 123.7 million
                        </h5>
                        <div
                          className="text-stone text-sm
                     text-stone text-sm mt-1"
                        >
                          <span>Richard Deitsch and Greg Rosenstein</span>
                          <span className="ms-3">
                            <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                            179
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="sec2 my-3 py-3 ">
          <div className="container">
            <hr />
            <h4 className="text-dark ps-2 pt-2 fw-bold">More Stories</h4>
            <div className="col-12 mx-2">
              <ul className="list-unstyled">
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/headlines/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12164421/GettyImages-2003857935-1024x683.jpg"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        49ers minutia minute: The players who stood out in the
                        Super Bowl — good and bad{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Jauan Jennings, Nick Bosa and Chris Conley stood out in
                        the Super Bowl loss. Some of their teammates, however,
                        failed to deliver.
                      </p>
                      <div
                        className="text-stone text-sm
                     text-stone text-sm mt-1"
                      >
                        <span>Matt Barrows</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          146
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/headlines/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top">
                    <img
                      src="https://cdn-media.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn-media.theathletic.com/PBgeIc1pUwC0_eP2P9SOGTK3V_720x480.jpg"
                      className="img-fluid"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        2024 Super Bowl halftime show and Taylor Swift recap:
                        Review of Usher's performance, plus Swift's busy weekend
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Alicia Keys, Jermaine Dupri, H.E.R., will.i.am, Lil Jon
                        and Ludacris joined Usher on the stage for a 13-minute
                        halftime set.
                      </p>
                      <div
                        className="text-stone text-sm
                     text-stone text-sm mt-1"
                      >
                        <span>Upadted 2mos ago</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/headlines/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/10172500/Screenshot-2024-02-10-at-5.19.33-PM-1024x580.png"
                      className="img-fluid"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Best 2024 Super Bowl commercials: Ranking the ads |
                        Dunkings, Walken, Beyonce, Schwarzenegger and more
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Award-winning ranker Jake Ciely fixes his attention on
                        the best (and worst) Super Bowl commercials.
                      </p>
                      <div
                        className="text-stone text-sm
                     text-stone text-sm mt-1"
                      >
                        <span>Jake Ciely</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          254
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/headlines/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12101547/GettyImages-1025973528-1024x828.jpg"
                      className="img-fluid"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Georgia players in the Super Bowl: Mecole Hardman, Chris
                        Conley highlight unconventional paths
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Hardman caught the game-winning touchdown pass from
                        Patrick Mahomes on Sunday. But his career path there is
                        far from a straight
                      </p>
                      <div
                        className="text-stone text-sm
                     text-stone text-sm mt-1"
                      >
                        <span>Seth Emerson</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          13
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/headlines/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12105256/GettyImages-2005219831-1024x688.jpg"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        49ers players say they were unaware of overtime
                        possession rules in Super Bowl{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        The Chiefs went on to beat the 49ers in a 25-22 thriller
                        to win their third Super Bowl in five years.
                      </p>
                      <div
                        className="text-stone text-sm
                     text-stone text-sm mt-1"
                      >
                        <span>The Athletic Staff</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          553
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/headlines/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12033711/GettyImages-2003877678-1024x683.jpg"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Dre Greenlaw's injury encapsulated the anguish inside
                        the 49ers' locker room{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Greenlaw's Achilles injury drew tears from Fred Warner
                        at halftime — and more would come later after the 49ers
                        lost the Super Bowl.
                      </p>
                      <div
                        className="text-stone text-sm
                     text-stone text-sm mt-1"
                      >
                        <span>David Lombardi</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          226
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/headlines/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12015209/GettyImages-2004030777-1024x683.jpeg"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Marchand: On the Super Bowl's biggest play, Tony Romo
                        freelanced and lost{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        CBS had the right plan for the Super Bowl. But, on the
                        biggest play, Tony Romo freelanced and lost.
                      </p>
                      <div
                        className="text-stone text-sm
                     text-stone text-sm mt-1"
                      >
                        <span>Andrew Marchand</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          1648
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/headlines/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/12032455/2-11-pick-six-1024x683.jpg"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        How the Chiefs stack up among NFL dynasties (and a path
                        past the Patriots): Sando’s Pick Six{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        What makes an NFL dynasty? Patrick Mahomes does, but
                        there's more to it than that. Plus, is Mahomes already
                        the third-best QB
                      </p>
                      <div
                        className="text-stone text-sm
                     text-stone text-sm mt-1"
                      >
                        <span>Mike Sando</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          311
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default SuperBowlNFLComp;
