import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate, useParams } from "react-router-dom";

const NewsletterComp = () => {
  const { title, name } = useParams();
  const length = name.split(" ").length;
  const heading = name
    .split(" ")
    .slice(0, length - 1)
    .join(" ");

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <section data-aos="fade-up">
        <div
          style={{
            backgroundColor: "black",
            width: "100%",
            aspectRatio: 2 / 0.5,
          }}
          className="d-flex flex-column text-start justify-content-center align-items-center"
        >
          <div>
            <h1
              style={{
                color: "white",
                fontFamily: "tiempos,serif",
                fontSize: "3rem",
              }}
            >
              {heading}
            </h1>
            <small style={{ color: "white" }}>
              The Essential{" "}
              {title.split(" ").length > 1 ? title.split(" ").join("") : title}{" "}
              Newsletter
            </small>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="sec2 my-3 py-3 ">
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/09135756/pt-apr-9-1024x683.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack">
                      F1's early season TV ratings; Pérez restakes his claim to
                      Red Bull's second seat
                    </h3>
                    <p className="text-stone text-lg mb-0">
                      Plus: We found the best hat at the Japanese GP.
                    </p>
                    <div
                      className="text-stone text-sm
                text-stone text-md mt-1"
                    >
                      <span>Patrick Iversen</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        36
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/05122652/5-1024x683.png"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        F1 upgrades, Japanese GP practice takeaways; An ode to
                        the lovely Suzuka Circuit{" "}
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Patrick Iversen</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>7
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/29115215/PT-Mar-29-2-1024x683.png"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Max Verstappen's unparalleled 43-race F1 stretch; Is
                        Carlos...
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Patrick Iversen</span>
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
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/26121137/PT-Mar-22-1-1024x683.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Red Bull finally surrenders to bad luck; Understanding
                        Alonso's costly penalty
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Patrick Iversen</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          17
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/22102540/pt_mar_22_720.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        A Valtteri Bottas mystery solved, Logan Sargeant out of
                        Australian GP: Prime Tire
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Patrick Iverson</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          23
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/08222041/02_ColorBlock_TwoPhotos-8-1024x683.png"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Why F1 can't move on from Horner story; Three teams
                      feeling good in Saudi Arabia{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Plus, good vibes from F1 Academy on International Women's
                      Day.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Patrick Iversen</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        51
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/05113048/5-1-1024x683.png"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      F1's messy off-track stories; what Bahrain tells us about
                      the Saudi Arabian GP
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Plus: Sergio Pérez tells us why he's hoping for F1
                      Academy's success..
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Patrick Iversen</span>
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
                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top">
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/01163615/PT-Lewis-to-Ferrari-6-1024x683.png"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      The Mercedes slide that led Hamilton to Ferrari, ripple
                      effects on Sainz and F1
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The clock is ticking on Hamilton's career, and his
                      shocking move will impact the future of many F1...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Patrick Iversen</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        29
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/01/03093316/F1_Reviews-8-1024x683.png"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Predicting F1's 2024 narratives and reviewing Haas'
                      moribund season: Prime Tire
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Plus: Why F1 could stand to have a little more fun this
                      year.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Patrick Iversen</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        18
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=384%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/12/27112959/Alfa-Romeo-PT-2-1024x683.png"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Alfa Romeo's mediocre F1 season heralded its era of
                      evolution: Prime Tire{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Plus: The driver Guenther Steiner wishes Haas had signed,
                      and the evolving job of an F1 trainer.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Patrick Iversen</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>5
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/12/20101053/F1_Reviews-6-1024x683.png"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      The unsteady aftermath of AlphaTauri's fascinating 2023:
                      Prime Tire{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Plus: Red Bull's latest pit stop excellence and a lunch at
                      Ferrari HQ.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Patrick Iversen</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>2
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/12/13144224/GettyImages-1686717668-1-2-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Let's imagine F1's 2023 season under NASCAR's playoff
                      system: Prime Tire{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Plus: Clearing up the drama around Lewis Hamilton's
                      missing trophy.s...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Patrick Iversen</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        26
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/12/06141221/GettyImages-1813292064-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Mercedes' optimism for 2024 and a brewing F1 mess: Prime
                      Tire{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      We've got a look at why the Silver Arrows feel good about
                      next year — and some news from the FIA.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Alex Davies and Madekine Coleman</span>
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
    </>
  );
};

export default NewsletterComp;
