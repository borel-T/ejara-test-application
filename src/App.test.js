import { render, screen } from "@testing-library/react";
import LandingPage from "./containers/auth/landing";
import { BrowserRouter } from "react-router-dom";

test("renders landing page", async () => {
  render(<LandingPage />, { wrapper: BrowserRouter });
  // check we are on landing page
  expect(screen.getByText(/Ejara Coding Challenge/i)).toBeInTheDocument();
  // check Note-app card renders on landing pagte
  expect(screen.getByText(/Google Keep App/i)).toBeInTheDocument();
});
