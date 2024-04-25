import React, { useEffect } from "react";
import "../css/ComponentsCSS/HeadlineNews.css";
import Aos from "aos";
import "aos/dist/aos.css";

function HeadlineNews({ headline }) {
  const { title, description, imageUrl, author, publishDate } = headline;

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="headline-news" data-aos="fade-up">
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
