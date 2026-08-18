import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";

import Hero from "./Hero";

describe("Hero", () => {
  test("checks if hero buttons exist", () => {
    render(<Hero theme="dark" />);

    const startFreeTrialButton = screen.getByRole("button", {
      name: /start free trial/i,
    });

    const watchTrailerButton = screen.getByRole("button", {
      name: /watch trailer/i,
    });

    expect(startFreeTrialButton).toBeInTheDocument();
    expect(watchTrailerButton).toBeInTheDocument();

    expect(startFreeTrialButton).toHaveClass("hover:bg-green-300");
    expect(watchTrailerButton).toHaveClass("hover:bg-green-400");
  });
});