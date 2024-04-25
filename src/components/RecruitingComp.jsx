import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const RecruitingComp = ({ title }) => {
  if (title === "NCAAF") {
    title = "College Football";
  }

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <>
      <section data-aos="fade-up">
        <div className="py-3 m-3 border-bottom">
          <h3>
            <b>{title} Recruiting</b>
          </h3>
        </div>
        <section data-aos="fade-up" className="sec2 my-2 py-2 ">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="border-end">
                  <div className="card border-0">
                    <div className="card-body">
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/22121653/GettyImages-2149428549-1024x683.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="card-footer bg-transparent border-0">
                      <h3 className="text-headblack">
                        Nate Marshall commitment gives Michigan first recruiting
                        win under Sherrone Moore
                      </h3>
                      <p className="text-stone text-lg mb-0">
                        Nate Marshall, a high-end four-star defensive lineman
                        from Illinois, became Michigan's first...
                      </p>
                      <div
                        className="text-stone text-sm
                    text-stone text-md mt-1"
                      >
                        <span>Austin Meek</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          21
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                      href="#"
                    >
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=96%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/17080707/0404_Dallas_RecruitingConfidential-1024x512.png"
                        style={{ height: "100px", width: "140px" }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h5 className="mb-0">
                          Dallas high school football coaches on best
                          recruiters, impact of OU,{" "}
                        </h5>
                        <div
                          className="text-stone text-sm
                       text-stone text-sm mt-1"
                        >
                          <span>Ari Wasserman and David Ubben</span>
                          <span className="ms-3">
                            <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                            87
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=96%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/17142251/SmithCarter2-scaled-e1713378192386-1024x682.jpg"
                        style={{ height: "100px", width: "140px" }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h5 className="mb-0">
                          Why Carter Smith is a 'Michigan man’ and a
                          'linebacker...
                        </h5>
                        <div
                          className="text-stone text-sm
                       text-stone text-sm mt-1"
                        >
                          <span>Manny Navarro</span>
                          <span className="ms-3">
                            <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                            33
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=96%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/17153318/USATSI_22829999-scaled-e1713382417928-1024x682.jpg"
                        className="img-fluid"
                        style={{ height: "100px", width: "140px" }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h5 className="mb-0">
                          College football recruiting mailbag: Who will sign the
                          No. 1 class in...
                        </h5>
                        <div
                          className="text-stone text-sm
                       text-stone text-sm mt-1"
                        >
                          <span>Grace Raynor</span>
                          <span className="ms-3">
                            <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                            36
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=96%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/16090700/IMG_3836-scaled-e1713273265515-1024x684.jpg"
                        className="img-fluid"
                        style={{ height: "100px", width: "140px" }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h5 className="mb-0">
                          Florida's 2026 high school QB class is loaded, and
                          decisions loom for a few...
                        </h5>
                        <div
                          className="text-stone text-sm
                       text-stone text-sm mt-1"
                        >
                          <span>Manny Navarro</span>
                          <span className="ms-3">
                            <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                            12
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
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/15144226/NorthCarolina_AllState-1024x683.png"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Drake Maye or Hendon Hooker? The North Carolina
                        all-state team in the modern recruiting era{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Since the start of the modern recruiting era, North
                        Carolina high schools have been a top-10 producer in
                        consensus All...
                      </p>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Manny Navarro</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          31
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      src="https://theathletic.com/static/img/discussion.svg"
                      className="img-fluid"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Submit your questions for Grace Raynor’s recruiting
                        mailbag
                      </h4>

                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Grace Raynor</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          10
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/11112001/USATSI_22405226-1024x684.jpg"
                      className="img-fluid"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Penn State tops Auburn, FSU, Miami, Oregon for top-100
                        RB recruit Alvin Henderson
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Four-star running back Alvin Henderson of Elba, Ala.,
                        announced his commitment to Penn State on Thursday.
                      </p>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Audrey Snyder</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>4
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/10103422/USATSI_22364227-scaled-e1712795787401-1024x683.jpg"
                      className="img-fluid"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        College football recruiting mailbag: Will Michigan
                        change its strategy under Sherrone Moore?
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        A new college football fan from Wales needs a team to
                        follow. It can't wear the color blue and must have a
                        cool mascot. Who...
                      </p>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Ari Wasserman</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          69
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/21110508/Recruiting_Rankings_2024-1024x512.png"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        College football recruiting rankings: Which Power 4
                        schools have the most potential?{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        We know which programs sign the best — and worst —
                        classes. Which ones are set up to recruit the best
                        moving forward?
                      </p>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>The Athletic College Football Staff</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          132
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/04154229/April4_All_Georgia_Team-1-1024x683.png"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Cam Newton, Deshaun Watson or Trevor Lawrence? The
                        Georgia all-state team in the modern recruiting era{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        The state of Georgia has produced 29 consensus
                        All-Americans since the modern era of recruiting began
                        in 2002. Who are the...
                      </p>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Manny Navarro</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          57
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/08/10133226/GettyImages-1245186912-1024x757.jpg"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Miami Hurricanes football recruiting: Canes beat Ohio
                        State, Michigan for 4-star TE Luka Gilbert{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Gilbert is the sixth commitment in Miami's 2025 class
                        that ranks No. 17 nationally. All but one of the commits
                        is ranked in the top...
                      </p>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Manny Navarro</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          11
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/03163744/USATSI_21705276-1-1024x683.jpg"
                      style={{ height: "160px", width: "240px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h4 className="mb-0">
                        Should Wisconsin be concerned after recruiting losses of
                        Torin Pettaway, Cody Haddad?{" "}
                      </h4>
                      <p className="text-stone text-lg mb-0">
                        Wisconsin's 2025 class has shrunk to seven following two
                        decommitments, including the flip of Pettaway to
                        rival...
                      </p>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Jesse Temple</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          33
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center border-top border-bottom">
            <h6 className="pt-2">See more</h6>
          </div>
        </section>
      </section>
    </>
  );
};

export default RecruitingComp;
