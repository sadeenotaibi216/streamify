import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

async function getMovies(page, signal) {
  if (!API_URL || !API_KEY) {
    throw new Error("API URL or API key is missing.");
  }
  const response = await axios.get(API_URL, {
    params: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: page,
      sort_by: "popularity.desc",
    },

    headers: {
      Authorization: `Bearer ${API_KEY}`,
      accept: "application/json",
    },

    signal,
  });

  return response.data;
}

export default getMovies;
