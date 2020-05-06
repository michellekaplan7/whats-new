import React from "react";
import "./NewsArticle.css";
import PropTypes from "prop-types";

const NewsArticle = ({ img, headline, description, url, id }) => {
  const addErrorImage = (event) => {
    event.target.src = require("../../image-not-found.png");
  };

  return (
    <div className="card" id={id}>
      <img
        className="card-image"
        src={img}
        alt={headline}
        onError={addErrorImage}
      />
      <div className="card-body">
        <h2>{headline}</h2>
        <p>{description}</p>
      </div>
      <a href={url} target="_blank" rel="noreferrer noopener">
        <button className="read-article-button">Read Article →</button>
      </a>
    </div>
  );
};

NewsArticle.propTypes = {
  img: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  id: PropTypes.number,
};

export default NewsArticle;
