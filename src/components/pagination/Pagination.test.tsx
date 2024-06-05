import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  const onPageChangeMock = jest.fn();

  beforeEach(() => {
    onPageChangeMock.mockClear();
  });

  test("renders pagination component with initial page number", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /prev/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /next/i })).not.toBeDisabled();
  });

  test("calls onPageChange with next page number", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /next/i }));

    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  test("calls onPageChange with previous page number", () => {
    render(
      <Pagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /prev/i }));

    expect(onPageChangeMock).toHaveBeenCalledWith(1);
  });

  test("disables prev button on first page", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    expect(screen.getByRole("button", { name: /prev/i })).toBeDisabled();
  });

  test("disables next button on last page", () => {
    render(
      <Pagination
        currentPage={5}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    expect(screen.getByRole("button", { name: /next/i })).toBeDisabled();
  });

  test("enables prev and next buttons when not on the first or last page", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={onPageChangeMock}
      />
    );

    expect(screen.getByRole("button", { name: /prev/i })).not.toBeDisabled();
    expect(screen.getByRole("button", { name: /next/i })).not.toBeDisabled();
  });
});
