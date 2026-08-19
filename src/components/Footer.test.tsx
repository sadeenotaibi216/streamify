import "@testing-library/react/dont-cleanup-after-each";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  test,
} from "vitest";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

import Footer from "./Footer";
import { store } from "../store/Store";

describe("Footer", () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </Provider>
    );
  });

  afterAll(() => {
    cleanup();
  });

  test("Streamify title", () => {
    expect(screen.getByText("Streamify")).toBeInTheDocument();
  });

  test("description", () => {
    expect(
      screen.getByText(/your favorite stories, all in one place/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/stream anytime, anywhere/i)
    ).toBeInTheDocument();
  });

  test("footer sections", () => {
    expect(screen.getByText("Browse")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
  });

  test("shows Browse links", () => {
    expect(screen.getByText("TV Shows")).toBeInTheDocument();
    expect(screen.getByText("Movies")).toBeInTheDocument();
    expect(screen.getByText("Kids")).toBeInTheDocument();
    expect(screen.getByText("My List")).toBeInTheDocument();
  });

  test("Company links", () => {
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Careers")).toBeInTheDocument();
    expect(screen.getByText("Press")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  test("Support links", () => {
    expect(screen.getByText("Help Center")).toBeInTheDocument();
    expect(screen.getByText("Terms of Use")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Cookie Policy")).toBeInTheDocument();
  });
});