import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

import Footer from "./Footer";
import { store } from "../store/Store";

describe("Footer", () => {
  test(" Streamify title", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Streamify")).toBeInTheDocument();
  });

  test(" description", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(/your favorite stories, all in one place/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/stream anytime, anywhere/i)
    ).toBeInTheDocument();
  });

  test(" footer sections ", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Browse")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
  });

  test("shows Browse links", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("TV Shows")).toBeInTheDocument();
    expect(screen.getByText("Movies")).toBeInTheDocument();
    expect(screen.getByText("Kids")).toBeInTheDocument();
    expect(screen.getByText("My List")).toBeInTheDocument();
  });

  test(" Company links", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Press")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  test(" Support links", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Help Center")).toBeInTheDocument();
    expect(screen.getByText("Terms of Use")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Cookie Policy")).toBeInTheDocument();
  });
});