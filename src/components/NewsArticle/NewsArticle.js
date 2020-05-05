import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({ img, headline, description, url, id }) => {
    return (
        <div className='card'>
            <img className='card-image' src={img} alt={headline} />
            <div className='card-body'>
                <h2>{headline}</h2>
                <p>{description}</p>
            </div>
            <a href={url} target='_blank' rel='noreferrer noopener'><button className='read-article-button'>Read Article →</button></a>
        </div>
    )
}

export default NewsArticle;