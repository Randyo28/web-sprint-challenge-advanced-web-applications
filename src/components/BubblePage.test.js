import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
// import Bubbles from './Bubbles'
import { getColors as mockGetColors } from '../helpers/getColors'

jest.mock('../helpers/getColors')


const bubblesData = [
  {
    color: "aquamarine",
    code: {
      hex: "#7fffd4",
    },
    id: 1,
  },
  {
    color: "lilac",
    code: {
      hex: "#9a99dd",
    },
    id: 2,
  },
]

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />)
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test

  //Arrange
  mockGetColors.mockResolvedValueOnce({data: bubblesData})
  render(<BubblePage/>)

  //Act
  const bubbles = await screen.findByTestId('bubbles')
  const bubbleText = await screen.getByText(/bubbles/i)
  
  //Assert
  expect(bubbles).toBeInTheDocument()
  expect(bubbles).toBeTruthy()
  expect(bubbleText).toBeInTheDocument()
  // screen.debug(bubbleText)
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading