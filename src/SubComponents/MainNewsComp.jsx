import React from "react";
import { useNavigate } from "react-router-dom";

function MainNewsComp() {
  const navigate = useNavigate();
  return (
    <div className="border-bottom mb-4">
      <section className="sec2 my-3 py-3">
        <div className="container">
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
    </div>
  );
}

export default MainNewsComp;
