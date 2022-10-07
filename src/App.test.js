import { screen } from "@testing-library/react";
import { customRender } from "./testUtils";
import App from "./App";

test("renders learn react link", () => {
  customRender(<App />);
  const logo = screen.getByAltText(/Rick and Morty/i);
  expect(logo).toBeInTheDocument();
});
