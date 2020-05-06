import React from "react";
import NewsArticle from "../NewsArticle/NewsArticle";
import "./NewsContainer.css";
import PropTypes from "prop-types";

const NewsContainer = ({ news }) => {
  const newsArticles = news.map((data) => {
    return (
      <NewsArticle
        img={data.img}
        headline={data.headline}
        description={data.description}
        url={data.url}
        key={data.id}
      />
    );
  });

  return <section className="card-container">{newsArticles}</section>;
};

NewsContainer.propTypes = {
  news: PropTypes.array,
};

export default NewsContainer;
