import React from 'react'
import App from './App'
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('App', () => {
    it("should display the articles that match the users search query within a specific category", () => {
        const { getByText, getByPlaceholderText } = render(<App />)

        fireEvent.change(getByPlaceholderText("Search for news articles here"), {target: {value: "beer"}});
        fireEvent.click(getByText("SEARCH"));

        expect(getByText('The owner of Los Chingones is planning a food hall, beer garden and brewery in Denver Tech Center')).toBeInTheDocument()
    });
});