import React from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from '@testing-library/user-event'
import Login from "./Login";
import Bubbles from "./Bubbles";

test("Renders Login without errors", () => {
    // Finish this test
    render(<Login />)
  });

test("Can input form requirments", () => {

    //Arrange
    render(<Login />)

    const username = screen.getByTestId('username')
    const password = screen.getByTestId('password')

    //Act
    UserEvent.type(username, 'Lambda School')
    UserEvent.type(password, 'i<3Lambd4')

    
    //Assert
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  });

  test("Can Submit login", async () => {
    render(<Login />)

    const button = screen.getByRole('button')
    const username = screen.queryByTestId('username')
    const password = screen.queryByTestId('password')
    
    UserEvent.type(username, 'Lambda School')
    UserEvent.type(password, 'i<3Lambd4')
    UserEvent.click(button)
    // screen.debug()
    

    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
  });