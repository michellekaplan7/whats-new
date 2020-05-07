import React from "react";
import "./Menu.css";
import PropTypes from "prop-types";

const Menu = ({ filterNews, selectedTopicTitle }) => {
  const handleClick = (event) => {
    const { value } = event.target;
    filterNews(value);
  };

  return (
    <nav className="nav">
      <h1>
        What's <span>New?</span>
      </h1>
      <button
        value="local"
        className={selectedTopicTitle === "local" ? "active" : "nav-button"}
        onClick={handleClick}
      >
        Local News
      </button>
      <button
        value="technology"
        className={
          selectedTopicTitle === "technology" ? "active" : "nav-button"
        }
        onClick={handleClick}
      >
        Technology
      </button>
      <button
        value="entertainment"
        className={
          selectedTopicTitle === "entertainment" ? "active" : "nav-button"
        }
        onClick={handleClick}
      >
        Entertainment
      </button>
      <button
        value="science"
        className={selectedTopicTitle === "science" ? "active" : "nav-button"}
        onClick={handleClick}
      >
        Science
      </button>
      <button
        value="health"
        className={selectedTopicTitle === "health" ? "active" : "nav-button"}
        onClick={handleClick}
      >
        Health
      </button>
    </nav>
  );
};

Menu.propTypes = {
  filterNews: PropTypes.func,
  selectedTopicTitle: PropTypes.string,
};

export default Menu;
