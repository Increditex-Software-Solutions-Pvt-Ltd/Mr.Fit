import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Formula1Subcomp = ({ title, category }) => {
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
    <div>
      <section data-aos="fade-up" className="m-4">
        <div className="my-3 border-bottom">
          <h3>
            <b>{category}</b>
          </h3>
        </div>
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=600%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/20043853/Chinese-GP-Preview-4-20-24-1024x683.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack">
                      F1 Chinese GP preview: Verstappen threatens to repeat the
                      sprint, Hamilton targets recovery
                    </h3>
                    <p className="text-stone text-lg mb-0">
                      This weekend may mark a new chapter for the Shanghai
                      International Circuit, but it’s business as usual for...
                    </p>
                    <div
                      className="text-stone text-sm
                    text-stone text-md mt-1"
                    >
                      <span>Madeloine Coleman and Luke Smith</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        18
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/07040701/Japanese-GP-takeaways-4-7-24-1024x683.jpg"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        F1 Japanese GP takeaways: Williams' woes, Red Bull's
                        status quo statement{" "}
                      </h5>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Madelibne Coleman and Patrick Iverson</span>
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/06032822/Japanese-GP-Preview-4-6-24-1024x683.jpg"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        F1 Japanese GP preview: Wary of Ferrari’s threat,
                        Verstappen seeks a bounceback...
                      </h5>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Madeline coleman and Luke Smith</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>9
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/05041157/GettyImages-1694980634-1024x683.jpg"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Seb? Max? Kimi? Mercedes ponders Lewis Hamilton’s...
                      </h5>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Luke Smith</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          37
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/26121137/PT-Mar-22-1-1024x683.png"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Prime Tire: Red Bull finally surrenders to bad luck;
                        Understanding...
                      </h5>
                      <div
                        className="text-stone text-sm
                       text-stone text-sm mt-1"
                      >
                        <span>Patrick Iverson</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          17
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/25103039/GettyImages-2106010111-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Off to a 'brutal' start, Mercedes and Lewis Hamilton
                      struggle for understanding{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      2024 was supposed to be a year of progress and a solid
                      sign off for the historic partnership. It hasn't started
                      that way.
                    </p>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Luke Smith</span>
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/24032250/F1-Australian-GP-2024-takeaways-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      F1 Australian GP takeaways: Ferrari takes advantage,
                      Mercedes lost at sea
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The Australian GP deviated from the recent F1 script,
                      leaving behind plenty of interesting ramifications.
                    </p>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Madeline Coleman and Patrick Iverson</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        81
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/23021503/F1_-Race-Preview-2-1024x683.png"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      F1 Australian GP preview: Ferrari sets sights on Red Bull,
                      Albon out for redemption
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Ferrari is looking the strongest it has this season –
                      could it unseat Max Verstappen in Melbourne?
                    </p>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Madeline Coleman and Luke Smith</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        27
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/13125803/GettyImages-2048037861-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      The tricky dynamics of Lewis Hamilton's Ferrari move won't
                      wait for 2025
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Hamilton, Mercedes and Ferrari will soon have to deal with
                      the effects of the move, says analyst Bernie Collins.
                    </p>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Michael bailey</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        41
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/09170323/GettyImages-2071353403-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      On top of the F1 world, would Max Verstappen really leave
                      Red Bull for Mercedes?{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Red Bull may continue to dominate, but the wrangling is
                      unlikely to end here as the past week has proven the
                      divides at...
                    </p>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Luke Smith</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>99
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/09142853/3-9-24-Saudi-GP-Takeaways-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      F1 Saudi Arabian GP takeaways: Verstappen's a class above,
                      Haas takes advantage{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      A sleepy race on a fast track emphasizes the Red Bull's
                      driver status as top of the class.
                    </p>
                    <div
                      className="text-stone text-sm
                       text-stone text-sm mt-1"
                    >
                      <span>Patrick Iversen</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>91
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
    </div>
  );
};

export default Formula1Subcomp;
