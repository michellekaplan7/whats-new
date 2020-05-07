import React from "react";
import NewsContainer from "./NewsContainer";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import local from "../../data/local";

describe("NewsContainer", () => {
  it("holds NewsArticles and displays the correct information", () => {
    const { getByText } = render(<NewsContainer news={local} />);

    const articleTitle = getByText("Car2Go leaving Denver amid company shake-up");

    expect(articleTitle).toBeInTheDocument();
  });
});
