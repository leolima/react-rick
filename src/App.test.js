import { screen } from "@testing-library/react";
import { customRender } from "./testUtils";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("should render without problem", () => {
  customRender(<App />);
  const logo = screen.getByAltText(/Rick and Morty/i);
  expect(logo).toBeInTheDocument();
});

test("Should render List of characters", async () => {
  const { findAllByRole } = customRender(<App />);

  const characters = await findAllByRole("heading", { level: 2 });
  expect(characters).toHaveLength(20);
});

test("Should filter by search term", async () => {
  const { getByPlaceholderText, findAllByRole } = customRender(<App />);

  const input = await getByPlaceholderText("Buscar");

  userEvent.type(input, "Bet");

  const characters = await findAllByRole("heading", { level: 2 });

  expect(characters).toHaveLength(1);
});
