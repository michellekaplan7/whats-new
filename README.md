# What's New?

What's New is a news application that contains five different categories of news (Local News, Technology, Entertainment, Science, and Health).

Upon load, the user will automatically see the Local News displayed, which is indicated by the Local News button having an active state of a yellow background. Depending on which category the user clicks on, that button will have an active state indicated by the yellow background.

The user can click on a different news category and the news articles for that news category will appear. The user can then click on the "Read Article →" button and the article will open in a new tab.

The user can also search for news articles within the current news category selected. Upon clicking the "SEARCH" button, the user will see news articles that match their search query based upon either the news article headline or description. The user can continue their search through that news category or they can re-click on the news category to get back to all of the news for that category. They can also click on another news category and perform a different search query through that category.


## GIF of working application
![whats-new-gif](https://media.giphy.com/media/RJOq5bcT5M65uYdNnY/giphy.gif)

## Setup

1. Clone down this repo
2. Install the library dependencies. Run: 
```
npm install
```
3. Then, run `npm start` in your terminal. Go to `http://localhost:8080/` and you should see the page there! Then, you can enter `control + c` in your terminal to stop the server at any time.

## Technologies Used
This project had a lot of moving pieces and parts and was the FIRST time we had ever used the following:
- React
- create-react-app
- Jest
- React Testing Library
- DOM Testing Library
- the fetch API
- JavaScript
- CSS

## Future Iterations
- Implement a clear search button to bring back all of the news articles for that news category without having to re-click on the news category button
- Add an error message for any search queries that don't match any news articles
- Build out media queries for mobile responsiveness
- Fix image sizing

## Contributors
- [Michelle Kaplan](https://github.com/MichelleKaplan7)
