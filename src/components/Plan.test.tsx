import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import { Provider } from "react-redux";

import Plan from "./plan";
import { store } from "../store/Store";

describe("Plan", () => {
  test(" plan section and cards", () => {
    render(
      <Provider store={store}>
        <Plan theme="dark" />
      </Provider>
    );

    expect(
      screen.getByRole("heading", {
        name: /choose your plan/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /monthly/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /yearly/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/save 20%/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText("Basic")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Standard")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Premium")
    ).toBeInTheDocument();
  });

  test("show monthly prices", () => {
    render(
      <Provider store={store}>
        <Plan theme="dark" />
      </Provider>
    );

    expect(screen.getByText("$5.99")).toBeInTheDocument();
    expect(screen.getByText("$9.99")).toBeInTheDocument();
    expect(screen.getByText("$13.99")).toBeInTheDocument();
  });

  test("show choose plan buttons", () => {
    render(
      <Provider store={store}>
        <Plan theme="dark" />
      </Provider>
    );

    expect(
      screen.getByRole("button", {
        name: /choose basic/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /choose standard/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /choose premium/i,
      })
    ).toBeInTheDocument();
  });

  test("show Most Popular", () => {
    render(
      <Provider store={store}>
        <Plan theme="dark" />
      </Provider>
    );

    expect(
      screen.getByText(/most-popular/i)
    ).toBeInTheDocument();
  });

  test("user can click Yearly", async () => {
    const user = userEvent.setup();

    render(
      <Provider store={store}>
        <Plan theme="dark" />
      </Provider>
    );

    const yearlyButton = screen.getByRole("button", {
      name: /yearly/i,
    });

    await user.click(yearlyButton);

    expect(yearlyButton).toBeInTheDocument();
  });
});