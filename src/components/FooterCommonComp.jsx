import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const FooterCommonComp = ({ title }) => {
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
      <section data-aos="fade-up" className="sec3 my-3 py-3">
        <div className="container">
          <div className="p-3 border-bottom">
            {" "}
            <h1>{title}</h1>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="border-end">
                <div className="card border-0">
                  <div className="card-body">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/06021715/Foden-Manchester-City-Brentford-hat-trick-scaled-e1707203878962-1024x683.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="text-headblack text-lg"
                    >
                      Will Man City be worried? Why did Southgate scout
                      Henderson? Are fan walkouts valid? – The Briefing
                    </h3>
                    <p className="text-stone text-md mb-0">
                      Lorem ipsum dolor sit amet consectetur....
                    </p>
                    <div
                      className="text-stone text-sm
                        text-stone text-sm mt-1"
                    >
                      <span>Nick miller</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>49
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled">
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none">
                    <img
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/04151344/0204_TheBriefing-1024x683.jpg"
                      style={{
                        height: "80px",
                        width: "120px",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h6 className="mb-0 text-md">Example blog post title</h6>
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
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                    <img
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/04182449/GettyImages-1978650633-scaled-e1707089111403-1024x682.jpg"
                      className="img-fluid"
                      style={{
                        height: "80px",
                        width: "120px",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h6 className="mb-0 text-md">
                        This is another blog post title
                      </h6>
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
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                    <img
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/05062435/E3-1.png"
                      className="img-fluid"
                      style={{
                        height: "80px",
                        width: "120px",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h6 className="mb-0 text-md">
                        Longer blog post title: This one has multiple lines!
                      </h6>
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
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                    <img
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/05062435/E3-1.png"
                      className="img-fluid"
                      style={{
                        height: "80px",
                        width: "120px",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h6
                        className="mb-0 text-md"
                        onClick={() => {
                          navigate("/category/headlines/Premier League");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      >
                        Longer blog post title: This one has multiple lines!
                      </h6>
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
                  href=""
                >
                  <img
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/25103039/GettyImages-2106010111-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4
                      className="mb-0"
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href=""
                >
                  <img
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/24032250/F1-Australian-GP-2024-takeaways-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4
                      className="mb-0"
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href=""
                >
                  <img
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/23021503/F1_-Race-Preview-2-1024x683.png"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4
                      className="mb-0"
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none border-top"
                  href=""
                >
                  <img
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/13125803/GettyImages-2048037861-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4
                      className="mb-0"
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href=""
                >
                  <img
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/09170323/GettyImages-2071353403-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4
                      className="mb-0"
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href=""
                >
                  <img
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/09142853/3-9-24-Saudi-GP-Takeaways-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4
                      className="mb-0"
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href=""
                >
                  <img
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/12/13144224/GettyImages-1686717668-1-2-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4
                      className="mb-0"
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href=""
                >
                  <img
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/12/06141221/GettyImages-1813292064-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4
                      className="mb-0"
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
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

export default FooterCommonComp;
