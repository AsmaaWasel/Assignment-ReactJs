import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test('renders the header with the title "Posts"', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement: HTMLElement | null = screen.getByText(/Posts/i);
  expect(linkElement).toBeInTheDocument();
});

test("search bar should be rendered", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const searchInput = screen.getByPlaceholderText(
    "Search posts by title"
  ) as HTMLInputElement | null;
  expect(searchInput).toBeInTheDocument();
});

test("renders PostList component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const postList: HTMLElement | null = screen.getByRole("list");
  expect(postList).toBeInTheDocument();
});
