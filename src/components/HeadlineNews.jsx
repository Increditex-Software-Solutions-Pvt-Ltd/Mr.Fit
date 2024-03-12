import React from "react";
import "../css/ComponentsCSS/HeadlineNews.css";

function HeadlineNews({ headline }) {
  const { title, description, imageUrl, author, publishDate } = headline;

  return (
    <div className="headline-news">
      <div className="headline">
        <h2>{title}</h2>
      </div>
      <div className="image-container">
        <img src={imageUrl} alt={title} className="headline-image" />
        <div className="author-info">
          <span className="author">By {author}</span>
          <span className="publish-date">{publishDate}</span>
        </div>
      </div>
      <hr />
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default HeadlineNews;
