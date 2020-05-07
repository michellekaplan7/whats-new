import React from "react";
import Menu from "./Menu";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Menu", () => {
  it("displays information that we'd expect", () => {

    const { getAllByRole, getByText } = render(
    <Menu
    selectedTopicTitle="local"
    />
    );

    expect(getAllByRole("button")).toHaveLength(5)
    expect(getByText("Local News")).toBeInTheDocument();
    expect(getByText("Technology")).toBeInTheDocument();
    expect(getByText("Entertainment")).toBeInTheDocument();
    expect(getByText("Science")).toBeInTheDocument();
    expect(getByText("Health")).toBeInTheDocument();
  });

  it('displays a different category of news depending on which button is clicked', () => {
    
    const mockFilterNews = jest.fn();

    const { getByText } = render(
    <Menu
    filterNews={mockFilterNews}
    selectedTopicTitle="local"
    />
    );
    fireEvent.click(getByText("Local News"));
    expect(mockFilterNews).toHaveBeenCalledWith("local")
  });

});