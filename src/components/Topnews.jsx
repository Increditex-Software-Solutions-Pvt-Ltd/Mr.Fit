import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Topnews = () => {
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
      <section data-aos="fade-up" className="sec1 my-2">
        <div className="container">
          <div className="row py-2 border-bottom">
            <div className="col-md-5">
              <div className="border-end my-3">
                <div className="card border-0 pb-4">
                  <div className="card-body">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=770%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/04151344/0204_TheBriefing-1024x683.jpg"
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
            <div className="col-md-4">
              <div className="border-end my-3 px-2">
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                      href="#"
                    >
                      <img
                        onClick={() => {
                          navigate("/category/headlines/Premier League");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
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
                        onClick={() => {
                          navigate("/category/headlines/Premier League");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
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
                        onClick={() => {
                          navigate("/category/headlines/Premier League");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
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
                        onClick={() => {
                          navigate("/category/headlines/Premier League");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
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
                    onClick={() => {
                      navigate("/AllNews");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
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
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="nav-link text-normal"
                    >
                      Regragui to remain as Morocco head coach
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
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

      <section data-aos="fade-up" className="sec2 my-3 py-3">
        <div className="container">
          <h6 className="text-dark ps-2 pt-2 fw-bold">Spotlight</h6>
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/02/02085517/02-02-contracts-2025-2-1024x683.png"
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none"
                    href="#"
                  >
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="sec3 my-3 py-3">
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
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
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="sec3 my-3 py-3">
        <div className="container">
          <h6 className="text-dark ps-2 pt-2 fw-bold">
            <b>Title Race Latest</b>
          </h6>
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
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24060805/g1-2-1.png"
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
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24022126/MARTIN-ODEGAARD-DECLAN-RICE-scaled-e1713939710129-1024x682.jpeg"
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
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23164726/GettyImages-2149878666-1024x683.jpg"
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
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/22103003/pltitleracestress-1024x683.png"
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
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23070929/GettyImages-2148003255-scaled-e1713871674497.jpg"
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

      <section data-aos="fade-up" className="sec3 my-3 py-3">
        <div className="container">
          <h6 className="text-dark ps-2 pt-2 fw-bold">
            <b>Liverpool's Main Target</b>
          </h6>
          <div className="row">
            <div className="col-md-5">
              <div className="border-end">
                <div className="card border-0">
                  <div className="card-body">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24104604/GettyImages-2147821939-1-scaled-e1713969989670-1024x683.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack text-lg">
                      Liverpool's €9m Slot bid and why managers are cheaper than
                      players
                    </h3>
                    <p className="text-stone text-md mb-0">
                      As Liverpool negotiate a deal to hire Arne Slot as Jurgen
                      Klopp's replacement, we explain why managers cost much
                      less than players
                    </p>
                    <div
                      className="text-stone text-sm
                        text-stone text-sm mt-1"
                    >
                      <span>Greg O'Keeffe</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>26
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="card border-0">
                <div className="card-body">
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23121307/GettyImages-1845882688-e1713888813351.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="card-footer bg-transparent border-0">
                  <h3 className="text-headblack text-lg">
                    Arne Slot: A champion with Feyenoord and now a leading
                    contender for Liverpool
                  </h3>
                  <div
                    className="text-stone text-sm
                        text-stone text-sm mt-1"
                  >
                    <span>Nick Miller</span>
                    <span className="ms-3">
                      <i className="bi bi-chat-left-fill icon-sm me-1"></i>114
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="sec3 my-3 py-3">
        <div className="container">
          <h6 className="text-dark ps-2 pt-2 fw-bold">
            <b>Access All Areas</b>
          </h6>
          <div className="row">
            <div className="col-md-5">
              <div className="border-end">
                <div className="card border-0">
                  <div className="card-body">
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23045042/0422_ManUtdAcademy_pt2-scaled.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <h3 className="text-headblack text-lg">
                      Inside Man Utd's academy. Part two: Creating players and
                      people
                    </h3>
                    <p className="text-stone text-md mb-0">
                      Can they cook? Understand their bank statement? Drive? And
                      what about the football? Access all areas
                    </p>
                    <div
                      className="text-stone text-sm
                        text-stone text-sm mt-1"
                    >
                      <span>Andy Mitten</span>
                      <span className="ms-3">
                        <i className="bi bi-chat-left-fill icon-sm me-1"></i>43
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="card border-0">
                <div className="card-body">
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/category/headlines/Premier League");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/20034047/0422_ManUtdAcademy-scaled.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="card-footer bg-transparent border-0">
                  <h3 className="text-headblack text-lg">
                    Part one: How are they producing the next Mainoos and
                    Beckhams?
                  </h3>
                  <div
                    className="text-stone text-sm
                        text-stone text-sm mt-1"
                  >
                    <span>Andy Mitten</span>
                    <span className="ms-3">
                      <i className="bi bi-chat-left-fill icon-sm me-1"></i>88
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="sec4 my-3 py-3">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center my-2">
            <h6 className="text-dark fw-bold">A1: Today's Must-Read</h6>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/category/seeAll/A1");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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
                      onClick={() => {
                        navigate("/category/headlines/Premier League");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/19094405/GettyImages-650121356-scaled-e1713535017599.jpg"
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

      <section className="sec4 my-2 py-2" data-aos="fade-up">
        <div className="container">
          <h3 className="my-2">
            <b className="bungee-outline-regular">Most Popular</b>
          </h3>
          <div className="row pt-3">
            <div className="col-12 col-md-6 border-end">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/category/headlines/Premier League");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="d-flex justify-content-between align-items-center gap-3 px-2"
              >
                <div className="bungee-outline-regular">
                  <h3>
                    <b>1</b>
                  </h3>
                </div>
                <h6 style={{ width: "max-content" }}>
                  <b>
                    Arsenal 5 Chelsea 0: Psychological advantage in title race?
                    Petrovic doubts? – The Briefing...
                  </b>
                </h6>
                <div>
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23164726/GettyImages-2149878666-1024x683.jpg"
                    alt="img"
                    width="80px"
                    style={{ aspectRatio: 2 / 2.5, objectFit: "cover" }}
                  />
                </div>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/category/headlines/Premier League");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="d-flex justify-content-between align-items-center gap-3 p-2"
              >
                <div className="bungee-outline-regular">
                  <h3>
                    <b>2</b>
                  </h3>
                </div>
                <h6 style={{ width: "max-content" }}>
                  <b>
                    Why Arsenal are replacing the club crest with the cannon on
                    next season’s kits...
                  </b>
                </h6>
                <div>
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/22103915/GettyImages-2149101804-1024x683.jpg"
                    alt="img"
                    width="80px"
                    style={{ aspectRatio: 2 / 2.5, objectFit: "cover" }}
                  />
                </div>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/category/headlines/Premier League");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="d-flex justify-content-between align-items-center gap-3 p-2"
              >
                <div className="bungee-outline-regular">
                  <h3>
                    <b>3</b>
                  </h3>
                </div>

                <h6 style={{ width: "max-content" }}>
                  <b>
                    Arsenal and their marvellous midfield . Why Arsenal are
                    replacing the club
                  </b>
                </h6>

                <div>
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24022126/MARTIN-ODEGAARD-DECLAN-RICE-scaled-e1713939710129-1024x682.jpeg"
                    alt="img"
                    width="80px"
                    style={{ aspectRatio: 2 / 2.5, objectFit: "cover" }}
                  />
                </div>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/category/headlines/Premier League");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="d-flex justify-content-between align-items-center gap-3 p-2"
              >
                <div className="bungee-outline-regular">
                  <h3>
                    <b>4</b>
                  </h3>
                </div>
                <h6 style={{ width: "max-content" }}>
                  <b>
                    Martin Odegaard and Kai Havertz as a duo of No 10s is
                    different… and devastating...
                  </b>
                </h6>
                <div>
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/24060805/g1-2-1.png"
                    alt="img"
                    width="80px"
                    style={{ aspectRatio: 2 / 2.5, objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/category/headlines/Premier League");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="d-flex justify-content-between align-items-center gap-3 px-2"
              >
                <div className="bungee-outline-regular">
                  <h3>
                    <b>5</b>
                  </h3>
                </div>
                <h6 style={{ width: "max-content" }}>
                  <b>
                    The Ange Postecoglou culture war is playing out just as we
                    expected
                  </b>
                </h6>
                <div>
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/22110854/ange-culture-war-1024x683.jpg"
                    alt="img"
                    width="80px"
                    style={{ aspectRatio: 2 / 2.5, objectFit: "cover" }}
                  />
                </div>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/category/headlines/Premier League");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="d-flex justify-content-between align-items-center gap-3 p-2"
              >
                <div className="bungee-outline-regular">
                  <h3>
                    <b>6</b>
                  </h3>
                </div>
                <h6 style={{ width: "max-content" }}>
                  <b>Is Mohamed Salah declining at Liverpool – or evolving?</b>
                </h6>
                <div>
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23070929/GettyImages-2148003255-scaled-e1713871674497-1024x512.jpg"
                    alt="img"
                    width="80px"
                    style={{ aspectRatio: 2 / 2.5, objectFit: "cover" }}
                  />
                </div>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/category/headlines/Premier League");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="d-flex justify-content-between align-items-center gap-3 p-2"
              >
                <div className="bungee-outline-regular">
                  <h3>
                    <b>7</b>
                  </h3>
                </div>
                <h6 style={{ width: "max-content" }}>
                  <b>
                    Arsenal, Spurs, Man Utd and Newcastle: How new stadiums
                    shape a club’s future and soul ...
                  </b>
                </h6>
                <div>
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23074241/0424_stadiums-1024x512.jpg"
                    alt="img"
                    width="80px"
                    style={{ aspectRatio: 2 / 2.5, objectFit: "cover" }}
                  />
                </div>
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/category/headlines/Premier League");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="d-flex justify-content-between align-items-center gap-3 p-2"
              >
                <div className="bungee-outline-regular">
                  <h3>
                    <b>8</b>
                  </h3>
                </div>
                <h6 style={{ width: "max-content" }}>
                  <b>
                    Arne Slot: A champion with Feyenoord and now Liverpool’s new
                    manager contender ...
                  </b>
                </h6>
                <div>
                  <img
                    src="https://cdn.theathletic.com/cdn-cgi/image/width=1000%2cformat=auto%2cquality=75/https://cdn.theathletic.com/app/uploads/2024/04/23121307/GettyImages-1845882688-e1713888813351-1024x512.jpg"
                    alt="img"
                    width="80px"
                    style={{ aspectRatio: 2 / 2.5, objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec4 my-3 py-3" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 mb-5">
                <div
                  onClick={() => {
                    navigate("/category/Premier League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{ cursor: "pointer" }}
                  className="d-flex justify-content-between border-bottom align-items-center"
                >
                  <h6>
                    <img
                      src="https://cdn-league-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-league-logos.theathletic.com/league-6-color-small.png"
                      alt=""
                      width="20px"
                    />{" "}
                    <b>Premier League</b>
                  </h6>
                  <i className="fa fa-angle-right mt-1" aria-hidden="true"></i>
                </div>
                <div className="d-flex flex-column">
                  <div className="border-bottom py-2">
                    <small>
                      The 'Last Dance' has disintegrated but succeeding Klopp
                      looks less daunting now
                    </small>
                  </div>
                  <div className="border-bottom py-2">
                    <small>
                      Manchester United's lesson? Feed Rasmus Hojlund, and he
                      will score
                    </small>
                  </div>
                  <div className="border-bottom py-2">
                    <small>
                      Manchester City, the masters of the run-in: 'They know
                      it’s dead or alive'
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 mb-5">
                <div
                  onClick={() => {
                    navigate("/category/International Football");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{ cursor: "pointer" }}
                  className="d-flex justify-content-between border-bottom align-items-center"
                >
                  <h6>
                    <img
                      src="https://cdn-league-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-league-logos.theathletic.com/league-16-color-small.png"
                      alt=""
                      width="20px"
                    />{" "}
                    <b>International Football</b>
                  </h6>
                  <i className="fa fa-angle-right mt-1" aria-hidden="true"></i>
                </div>
                <div className="d-flex flex-column">
                  <div className="border-bottom py-2">
                    <small>
                      Xavi to stay on as Barcelona head coach after talks with
                      Joan Laporta
                    </small>
                  </div>
                  <div className="border-bottom py-2">
                    <small>
                      Euro 2024 squads expand to 26 players - but who gets the
                      additional slots?
                    </small>
                  </div>
                  <div className="border-bottom py-2">
                    <small>Rangnick confirms Bayern talks</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 mb-5">
                <div
                  onClick={() => {
                    navigate("/category/Champions League");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{ cursor: "pointer" }}
                  className="d-flex justify-content-between border-bottom align-items-center"
                >
                  <h6>
                    <img
                      src="https://cdn-league-logos.theathletic.com/cdn-cgi/image/width=32%2cformat=auto%2cquality=75/https://cdn-league-logos.theathletic.com/league-7-color-small.png"
                      alt=""
                      width="20px"
                    />{" "}
                    <b>Champions League</b>
                  </h6>
                  <i className="fa fa-angle-right mt-1" aria-hidden="true"></i>
                </div>
                <div className="d-flex flex-column">
                  <div className="border-bottom py-2">
                    <small>
                      Barca aren't used to losing - they need mental strength to
                      come back against Chelsea
                    </small>
                  </div>
                  <div className="border-bottom py-2">
                    <small>
                      PSG's Al-Khelaifi told Barcelona's Laporta to give up on
                      'stupid' Super League
                    </small>
                  </div>
                  <div className="border-bottom py-2">
                    <small>
                      Antony, Ramos, Maupay: The celebrations players will have
                      regretted
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="p-3 mb-5">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate("/category/seeAll/A1");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="d-flex justify-content-between border-bottom align-items-center"
                >
                  <h6>
                    <b>A1</b>
                  </h6>
                  <i className="fa fa-angle-right mt-1" aria-hidden="true"></i>
                </div>
                <div className="d-flex flex-column">
                  <div className="border-bottom py-2">
                    <small>
                      The story of one of football's most horrific injuries - as
                      told by those involved
                    </small>
                  </div>
                  <div className="border-bottom py-2">
                    <small>
                      The way to sum up every Premier League team's attacking
                      style - how they get the ball into the box
                    </small>
                  </div>
                  <div className="border-bottom py-2">
                    <small>
                      Many Premier League champions have 'choked' - the true
                      test is can you recover in time
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topnews;
