import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const PicksComp = () => {
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
      <section data-aos="fade-up" className="sec2 my-3 py-3 ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="border-end">
                <div className="card border-0">
                  <div className="card-body">
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/04023315/USATSI_19948812-1024x675.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack">
                      What happens if a generation of sports fans is swallowed
                      up by gambling?
                    </h3>
                    <p className="text-stone text-lg mb-0">
                      Wagering on sports is being marketed as cool, fun, sexy.
                      But the risk involved with gambling is something...
                    </p>
                    <div
                      className="text-stone text-sm
                text-stone text-md mt-1"
                    >
                      <span>Steve Buckley</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        330
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=128%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/17202224/0315_AmitPatel-1024x512.jpg"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Feeding the ‘demon inside’: Ex-employee tells how and
                        why he stole $22 million...{" "}
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Katie Strang</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          455
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2023/07/20190440/GettyImages-1063197040-1024x683.jpg"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Ex-Jaguars employee who stole more than $22 million from
                        team sentenced to 6 1/2...
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Katie Strang</span>
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/03/04163114/GettyImages-2047896326-1024x683.jpg"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        2024 NFL Draft odds: Caleb Williams favored to go No. 1,
                        but where do Jayden Danie
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Khari Demos</span>
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
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/13112241/chiefs-49ers-1024x683.jpg"
                      className="img-fluid"
                      style={{ height: "100px", width: "140px" }}
                      alt=""
                    />
                    <div className="col-lg-8">
                      <h5 className="mb-0">
                        Nevada sees record $185.6 million wagered on Super Bowl
                        LVIII
                      </h5>
                      <div
                        className="text-stone text-sm
                   text-stone text-sm mt-1"
                      >
                        <span>Nando Di Fino</span>
                        <span className="ms-3">
                          <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                          55
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/06234844/0207_LettermanProducer-1024x512.png"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      From Stupid Pet Tricks to the Super Bowl, 11 years booking
                      quarterbacks for Letterman{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      For more than a decade, Brian Teta’s booking schemes
                      established "The Late Show" as a post-
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Peter Keating</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        20
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/11231713/GettyImages-1946580246-1024x613.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Which NFL teams have the biggest swings in Super Bowl 2025
                      odds since last year?
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Michael Salfino looks back to who the books liked in July
                      and charts the biggest odds movers for next...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Michael Salfino</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        45
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/11232603/GettyImages-2004207865-scaled-e1707711999385-1024x683.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Results and outcomes for Super Bowl 2024 prop bets
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      We tracked the outcomes for all the major prop bets for
                      the Super Bowl between the Kansas City Chiefs
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Jay Felicio and Dan Santaromita</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        25
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/11212357/GettyImages-2004008405-scaled-e1707704662271-1024x512.jpg"
                    className="img-fluid"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Super Bowl halftime shows ranked: Where does Usher rank
                      with Prince, U2, Rihanna?
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      A rubric focusing on vocal performance, staging, set list
                      and memorable moments assisted in ranking
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Levi Weaver</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        526
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/11230740/GettyImages-2003635626-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Super Bowl 2025 odds: 49ers are early favorites; Chiefs,
                      Ravens and Bills among top teams{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The Chiefs beat the 49ers in overtime to win Super Bowl
                      LVIII. Is it too early to start looking ahead to
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Andrew DeWitt and Athletic NFL Staff</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        111
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/10172500/Screenshot-2024-02-10-at-5.19.33-PM-1024x580.png"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Best 2024 Super Bowl commercials: Ranking the ads |
                      Dunkings, Walken, Beyonce, Schwarzenegger and more{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Award-winning ranker Jake Ciely fixes his attention on the
                      best (and worst) Super Bowl commercials.
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
              <li>
                <a
                  className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-start py-3 link-body-emphasis text-decoration-none"
                  href="#"
                >
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/07152020/GettyImages-1990467047-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Super Bowl LVIII schedule: How to watch Chiefs-49ers,
                      betting odds and matchup history{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      The Chiefs beat the 49ers in overtime to win Super Bowl
                      LVIII. It’s been four years since the Kansas...
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Lauren Merola</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        12
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
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/10153546/GettyImages-1971524769-1024x683.jpg"
                    style={{ height: "160px", width: "240px" }}
                    alt=""
                  />
                  <div className="col-lg-8">
                    <h4 className="mb-0">
                      Deebo Samuel Super Bowl prop bets: Betting on 49ers wide
                      receiver to have a big game against Chiefs{" "}
                    </h4>
                    <p className="text-stone text-lg mb-0">
                      Jay Felicio looks at Deebo Samuel's matchups in the Super
                      Bowl and makes some prop bets.
                    </p>
                    <div
                      className="text-stone text-sm
                   text-stone text-sm mt-1"
                    >
                      <span>Jay Felicio</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>
                        11
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

export default PicksComp;
