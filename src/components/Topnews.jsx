import React from "react";
import { useNavigate } from "react-router-dom";

const Topnews = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="sec1 my-2">
        <div className="container">
          <div className="row py-2 border-bottom">
            <div className="col-md-5">
              <div className="border-end my-3">
                <div className="card border-0 pb-4">
                  <div className="card-body">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/04151344/0204_TheBriefing-1024x683.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
            <div className="col-md-4">
              <div className="border-end my-3 px-2">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                      href="#"
                    >
                      <img
                        onClick={() =>
                          navigate("/category/headlines/Premier League")
                        }
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/04151344/0204_TheBriefing-1024x683.jpg"
                        style={{
                          height: "80px",
                          width: "80px",
                          cursor: "pointer",
                        }}
                        alt=""
                      />
                      <div className="col-lg-8">
                        <h6 className="mb-0 text-md">
                          Example blog post title
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
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        onClick={() =>
                          navigate("/category/headlines/Premier League")
                        }
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/04182449/GettyImages-1978650633-scaled-e1707089111403-1024x682.jpg"
                        className="img-fluid"
                        style={{
                          height: "80px",
                          width: "80px",
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
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/05062435/E3-1.png"
                        className="img-fluid"
                        onClick={() =>
                          navigate("/category/headlines/Premier League")
                        }
                        style={{
                          height: "80px",
                          width: "80px",
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
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                      href="#"
                    >
                      <img
                        onClick={() =>
                          navigate("/category/headlines/Premier League")
                        }
                        src="https://cdn.theathletic.com/cdn-cgi/image/width=256%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/05062435/E3-1.png"
                        className="img-fluid"
                        style={{
                          height: "80px",
                          width: "80px",
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
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-between text-xs my-3 pt-3">
                <span className="text-dark fw-bold">HEADLINES</span>
                <span className="text-stone">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate("/category/headlines/Premier League")
                    }
                    className="nav-link"
                  >
                    see all
                  </a>
                </span>
              </div>
              <div>
                <ul className="list-box mb-2">
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec2 my-3 py-3">
        <div className="container">
          <h6 className="text-dark ps-2 pt-2 fw-bold">Spotlight</h6>
          <div className="row">
            <div className="col-md-6">
              <div className="border-end">
                <div className="card border-0">
                  <div className="card-body">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/02085517/02-02-contracts-2025-2-1024x683.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec3 my-3 py-3">
        <div className="container">
          <h6 className="text-dark ps-2 pt-2 fw-bold">
            Around the premier league
          </h6>
          <div className="row">
            <div className="col-md-6">
              <div className="border-end">
                <div className="card border-0">
                  <div className="card-body">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/06021715/Foden-Manchester-City-Brentford-hat-trick-scaled-e1707203878962-1024x683.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack text-lg">
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
                    <img
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec4 my-3 py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center my-2">
            <h6 className="text-dark fw-bold">A1: Today's Must-Read</h6>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/category/headlines/Premier League")}
              className="nav-link text-stone text-sm"
            >
              see all
            </a>
          </div>
          <div className="row mb-2">
            <div className="col-md-12">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
                <div className="col-md-6 p-4 d-flex align-items-center justify-content-center">
                  <div className="">
                    <h5 className="text-dark ff-pt">
                      ‘I message Christian on WhatsApp – I need to let it out
                      and ask, ‘Why are you{" "}
                    </h5>
                    <p className="my-1 text-stone text-md">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae enim minus perspiciatis atque.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="object-fit-cover">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        navigate("/category/headlines/Premier League")
                      }
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/02081506/ATSU-LEAD-scaled.jpeg"
                      className="object-fit-cover"
                      height="310px"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </>
  );
};

export default Topnews;
