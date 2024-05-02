import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate, useParams } from "react-router-dom";

const SeeAlllComp = () => {
  const { title } = useParams();
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
    <>
      <section
        data-aos="fade-up"
        data-aos-duration="100"
        className="sec2 my-3 py-3 "
      >
        <div className="container">
          <h3>
            <b>
              {" "}
              {title} {title === "A1" ? ":Must-Read Stories" : ""}
            </b>
          </h3>
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24152848/0425_QBs-1024x512.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack">
                      Why drafting a successful NFL quarterback remains 'an
                      inexact science'
                    </h3>
                    <p className="text-stone text-lg mb-0">
                      Despite NFL decision-makers' robust resumes as talent
                      evaluators and extensive research, franchise
                    </p>
                    <div
                      className="text-stone text-sm
                    text-stone text-md mt-1"
                    >
                      <span>Mike Jones</span>
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24115040/0422_CoyotesThenNow-1024x512.png"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        The Arizona Coyotes are gone. Someone please tell
                        ex-owner Alex Meruelo{" "}
                      </h5>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Katie Strang</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          508
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/22113537/0422_Michigan-QB-J.J.-McCarthy-copy-1024x512.png"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        How hockey helped make J.J. McCarthy one of NFL Draft's
                        most...
                      </h5>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Adam Jahns</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          100
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/22010709/IMG_1072-1-1024x512.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Dangerous games: What's next for Mike Brown, Vivek
                        Ranadivé and the...
                      </h5>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Anthony Slater and Sam Amick</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          111
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/18090549/0419_DraisaitlMcDavid-1024x512.jpg"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Is this the last stand for Connor McDavid, Leon
                        Draisaitl and the Oilers?
                      </h5>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Daniel Nugent-bowman</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          157
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/16143911/0417_ConnorBedard_FirstYear-1024x512.png"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Connor Bedard's rookie season dazzles fans and defies age:
                      'Unlike anything we've seen'
                    </h4>
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
                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top">
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/28164144/Chelsea-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Arsenal’s game against Chelsea postponed due to FA
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Nnamdi Onyeagwara</span>
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
                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top">
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/28031953/dominic-solanke-bmouth-scaled-e1709108450447-1024x682.jpeg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Dominic Solanke to have knee injury assessed before
                      Bournemouth's trip
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Luke Bosher</span>
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
                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top">
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/27093520/kaoru-mitoma-brighton-1024x682.jpeg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Brighton's Kaoru Mitoma likely ruled out for season due to
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Andy Naylor</span>
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
                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/26100210/GettyImages-2035633598-scaled-e1708961182776-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League tips: When is the best time to{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Holly Shand</span>
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
                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/26070953/GettyImages-2035394103-scaled-e1708949455227-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League Gameweek 26 review: Villa on fire,
                      Arsenal{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Abdul Rehman</span>
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
                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/22090231/GettyImages-2017671688-scaled-e1708610676204-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League tips: Should you hold or sell your{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Holly Shand</span>
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
                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none">
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/21110435/GettyImages-2027773156-scaled-e1708531508753-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Fantasy Premier League tips: When is the best time to use
                      your Free{" "}
                    </h4>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Abdul Rehman</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        49
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
  );
};

export default SeeAlllComp;
