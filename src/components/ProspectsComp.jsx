import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const ProspectsComp = ({ title, name }) => {
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
      <section data-aos="fade-up" className="m-4">
        <div className="my-3 border-bottom">
          <h3>
            <b>{title} coverage</b>
          </h3>
        </div>
        <div></div>
      </section>
      <section data-aos="fade-up" className="sec2 my-2 py-2 ">
        <div className="container">
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/21201821/GettyImages-2099871588-1024x683.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack">
                      Four takeaways on the Boston Red Sox farm system: Marcelo
                      Mayer, Roman Anthony and more Four takeaways on the Boston
                      Red Sox farm system: Marcelo Mayer, Roman Anthony and more
                    </h3>
                    <p className="text-stone text-lg mb-0">
                      Mayer is off to a hot start, Anthony is progressing, Kyle
                      Teel is in his first full season and pitching...
                    </p>
                    <div
                      className="text-stone text-sm
                text-stone text-md mt-1"
                    >
                      <span>Jen McCaffrey</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>6
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=96%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/18105542/AP24108737067763-1024x709.jpg"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        An Orioles' pitcher's 6-year journey back to MLB; how
                        the Rangers’...{" "}
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Levi Weaver and Ken Rosenthal</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          14
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=96%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/16123611/0418_MLB-Draft-rankings-2.0-copy-1024x512.png"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        2024 MLB Draft top 50 prospects rankings: Why Keith Law
                        has Charlie...
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Keith Law</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          115
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=96%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/16125327/USATSI_20201138-1024x683.jpg"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Astros call up former top pitching prospect Forrest
                        Whitley: 'A long...
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Chandler Rome</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          34
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=96%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/16124331/AP24092104598002-1024x683.jpg"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Twins send struggling Matt Wallner to Triple-A St. Paul,
                        promote Trevo...
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Dan Hayes</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          65
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/16120614/GettyImages-2037863127-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Dodgers call up outfield prospect Andy Pages: Source{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      In 73 plate appearances in Triple A to start this season,
                      Pages has hit .371/452/.694 with five home runs.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Fabian Ardaya</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        35
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/16120827/jack-leiter-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Rangers call up Jack Leiter to pitch Thursday for MLB
                      debut
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Leiter posted a 3.77 ERA with 25 strikeouts in 14 1/3
                      innings pitched with Triple-A Round Rock this season.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Jenna West</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        23
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/15025114/GettyImages-2048838950-1024x641.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Paul Skenes' strong start, Jeferson Quero sidelined: Minor
                      league notes on NL teams' top prospects
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Drew Gilbert is on the IL for the Mets, Chase Dollander
                      has impressed early in his debut season and other notes
                      from all NL...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Melissa Lockard</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        48
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/12222855/USATSI_22725164-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Jack Leiter is hot, Walker Jenkins is hurt: Minor league
                      notes on AL teams' top prospects
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Notes on all of the farm systems in the American League,
                      including how Marcelo Mayer, Junior Caminero and other
                      top...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Melissa Lockard</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        33
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/14170507/USATSI_22596829-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Chicago Cubs mailbag: Matt Shaw, Cade Horton and more
                      prospects will be on their way{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Cubs prospects are generating interest from readers, so
                      let's discuss what to expect from some of the
                      organization's top...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Patrick Mooney and Sahadev Sharma</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>169
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/12133749/0415_DBH-1024x512.png"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      A new group is buying up minor league baseball teams at a
                      feverish pace. What's the end game?{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The private-equity backed Diamond Baseball Holdings now
                      owns a quarter of all minor-league clubs and is pushing
                      forward...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Chad Jennings,Evan Drellich,Sam Blum</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>195
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/05013553/AP24057621472180-scaled-e1709657863704-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      2024 MLB Draft notes on risers Kellon Lindsey, Trey
                      Yesavage; plus NHSI notes and more{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Yesavage is likely to be the third pitcher selected in the
                      draft, while Vance Honeycutt and Mike Sirota have seen
                      their stock...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Keith Law</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        47
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/10170929/GettyImages-1422084193-scaled-e1712802596524-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Oakland Ballers sign Kelsie Whitmore, who would be first
                      woman to play in Pioneer League{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Whitmore is a trailblazer for women in professional
                      baseball. She's relishing this new opportunity to compete
                      and inspire...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Melissa Lockard</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        62
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
    </div>
  );
};

export default ProspectsComp;
