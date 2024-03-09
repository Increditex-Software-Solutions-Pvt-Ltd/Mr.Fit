import React from "react";
import "../css/ComponentsCSS/LiveNewsComp.css";

function LiveNewsComp({ news }) {
  return (
    <div className="container">
      <div className="row">
        {news.map((item, index) => (
          <div key={index} className="col-12 mb-4">
            <div className="custom-card mx-auto">
              <div className="card-heading">{item.headline}</div>
              <div className="card-description">{item.description}</div>
              <div className="card-author">
                <img
                  src={item.authorProfilePic}
                  className="author-profile-pic"
                  alt={item.authorName}
                />
                <div className="author-details">
                  <p className="author-name">{item.authorName}</p>
                  <p className="publish-date">{item.publishDateTime}</p>
                </div>
              </div>
              <div className="text-center">
                <img
                  src={item.image}
                  className="card-image"
                  alt={item.headline}
                />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveNewsComp;
