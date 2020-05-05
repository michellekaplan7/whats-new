import React from 'react';
import NewsArticle from '../NewsArticle/NewsArticle';
import './NewsContainer.css'

const NewsContainer = ({local}) => {

    const localNews = local.map(data => {
        return (
            <NewsArticle
                img={data.img}
                headline={data.headline}
                description={data.description}
                url={data.url}
                key={data.id}
            />
        )
    })

    return (
        <section className='card-container'>
            {localNews}
        </section>
    )
}

export default NewsContainer;