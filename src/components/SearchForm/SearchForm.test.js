import React from "react";
import SearchForm from "./SearchForm";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("SearchForm", () => {

  it("holds NewsArticles and displays the correct information", () => {

    const mockSearchNews = jest.fn();

    const { getByLabelText, getByPlaceholderText, getAllByRole, getByText } = render(<SearchForm searchNews={mockSearchNews} />);

    const searchLabel = getByLabelText("search");
    const placeHolderText = getByPlaceholderText("Search for news articles here");
    const searchButtonText = getByText("SEARCH")
    expect(searchLabel).toBeInTheDocument();
    expect(placeHolderText).toBeInTheDocument();
    expect(getAllByRole("button")).toHaveLength(1);
    expect(searchButtonText).toBeInTheDocument();
  });

  it("can search by headline or description", () => {

    const mockSearchNews = jest.fn();

    const { getByPlaceholderText, getByText } = render(<SearchForm searchNews={mockSearchNews} />);

    fireEvent.change(getByPlaceholderText("Search for news articles here"), {target: {value: "beer"}});
    fireEvent.click(getByText("SEARCH"));

    expect(getByPlaceholderText("Search for news articles here").value).toEqual('');
    expect(mockSearchNews).toHaveBeenCalledWith("BEER");
  })
});