import React from "react";
import NewsArticle from "./NewsArticle";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("NewsArticle", () => {
  it("displays correct information on the NewsArticle card", () => {
    const cardInfo = {
      id: 1,
      url: "url here",
      description: "You thought you survived Coronavirus, only to get stung by a MURDER Hornet!?",
      headline: "Murder Hornets Oh My!",
      img: "goodbye",
    };
    const { getByText, getAllByRole, getByAltText } = render(<NewsArticle {...cardInfo} />);
    expect(getByText("You thought you survived Coronavirus, only to get stung by a MURDER Hornet!?")).toBeInTheDocument();
    expect(getByText("Murder Hornets Oh My!")).toBeInTheDocument();
    expect(getAllByRole("button")).toHaveLength(1)
    expect(getByText("Read Article →")).toBeInTheDocument();
    expect(getByAltText('Murder Hornets Oh My!')).toBeInTheDocument();

    fireEvent.click(getByText("Read Article →"))
  });
});
