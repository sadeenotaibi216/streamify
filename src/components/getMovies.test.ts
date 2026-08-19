import axios from "axios";
import { describe, expect, test, vi } from "vitest";

import getMovies from "./getMovies";

vi.mock("axios");

describe("getMovies", () => {
  test("returns movies", async () => {
    const fakeMovies = {
      results: [
        {
          id: 1,
          title: "Batman",
          poster_path: "/batman.jpg",
        },
      ],
    };

    vi.mocked(axios.get).mockResolvedValue({
      data: fakeMovies,
    });

    const controller = new AbortController();

    const result = await getMovies(
      1,
      controller.signal
    );

    expect(result).toEqual(fakeMovies);
  });
});