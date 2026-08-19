import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import { Provider } from "react-redux";

import FAQ from "./faq";
import { store } from "../store/Store";

describe("FAQ", () => {
  test("shows Frequently Asked Questions heading", () => {
    render(
      <Provider store={store}>
        <FAQ />
      </Provider>
    );

    const heading = screen.getByRole("heading", {
      name: /frequently asked questions/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("shows all FAQ questions", () => {
    render(
      <Provider store={store}>
        <FAQ />
      </Provider>
    );

    expect(
      screen.getByText(/what devices can i use to watch streamify/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/can i cancel my subscription anytime/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/is there a free trial/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/how many devices can i watch on/i)
    ).toBeInTheDocument();
  });
});