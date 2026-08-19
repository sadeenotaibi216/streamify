import { useEffect, useState } from "react";
import getMovies from "../components/getMovies";
import MovieCard from "../components/MovieCard";
import axios from "axios";
// import Button from "../components/Buttons";

function NewPost({ theme }:    {theme: "light" | "dark";}) {
const [movies, setMovies] = useState<{
  id: number;
  title: string;
  poster_path: string;
}[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setMoviesPerPage(1);
      } else if (window.innerWidth < 768) {
        setMoviesPerPage(2);
      } else if (window.innerWidth < 1024) {
        setMoviesPerPage(3);
      } else if (window.innerWidth < 1280) {
        setMoviesPerPage(4);
      } else {
        setMoviesPerPage(6);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return function cleanup() {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      setIsLoading(true);

      try {
        const result = await getMovies(page, controller.signal);

        setMovies((previousMovies) => {
          return [...previousMovies, ...result.results];
        });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.error(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchMovies();

    return function cleanup() {
      controller.abort();
    };
  }, [page]);

  const visibleMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  function showNextMovies() {
    if (startIndex + moviesPerPage < movies.length) {
      setStartIndex((previousIndex) => {
        return previousIndex + moviesPerPage;
      });
    }

    if (startIndex + moviesPerPage * 2 >= movies.length) {
      setPage((previousPage) => {
        return previousPage + 1;
      });
    }
  }

  function showPreviousMovies() {
    if (startIndex > 0) {
      setStartIndex((previousIndex) => {
        return Math.max(0, previousIndex - moviesPerPage);
      });
    }
  }

  const previousButtonDisabled = isLoading || startIndex === 0;

  const nextButtonDisabled =
    isLoading || startIndex + moviesPerPage >= movies.length;

  return (
    <div className="w-full overflow-hidden p-3 sm:p-5 lg:p-8">
      <div className="flex w-full items-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={showPreviousMovies}
          disabled={previousButtonDisabled}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg font-bold transition sm:h-10 sm:w-10 sm:text-xl ${
            previousButtonDisabled
              ? "cursor-not-allowed bg-gray-300 text-gray-500 opacity-50"
              : "cursor-pointer bg-green-400 text-black hover:bg-green-300"
          }`}
        >
          <span className="-mt-0.5 ml-0.5">←</span>
        </button>

        <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-5">
          {visibleMovies.map((movie) => {
            return (
              <div key={movie.id} className="min-w-0 w-full">
                <MovieCard movie={movie} theme={theme} />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={showNextMovies}
          disabled={nextButtonDisabled}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-lg font-bold transition sm:h-10 sm:w-10 sm:text-xl ${
            nextButtonDisabled
              ? "cursor-not-allowed bg-gray-300 text-gray-500 opacity-50"
              : "cursor-pointer bg-green-400 text-black hover:bg-green-300"
          }`}
        >
          <span className="-mt-0.5 mr-0.5">→</span>
        </button>
      </div>
    </div>
  );
}

export default NewPost;
