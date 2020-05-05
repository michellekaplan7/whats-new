import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ img, headline, description, url, id }) => {
    return (
        <div className='card'>
            <img className='card-image' src={img} />
            <h1>{headline}</h1>
            <p>{description}</p>
            <button>Read Article</button>
        </div>
    )
}

export default NewsArticle;