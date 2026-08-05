import { useEffect, useRef, useState } from "react";
import getMovies from "../components/getMovies";
import MovieCard from "../components/MovieCard";
// import Button from "../components/Buttons";

function NewPost({ theme }) {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const bounceTimeout = useRef(null);
  const moviesPerPage = 6;

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
        if (error.name !== "AbortError") {
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

  useEffect(() => {
    return function cleanup() {
      clearTimeout(bounceTimeout.current);
    };
  }, []);

  const visibleMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  function startBounceAnimation() {
    clearTimeout(bounceTimeout.current);

    setIsBouncing(true);

    bounceTimeout.current = setTimeout(() => {
      setIsBouncing(false);
    }, 500);
  }

  function showNextMovies() {
    if (startIndex + moviesPerPage < movies.length) {
      setStartIndex((previousIndex) => {
        return previousIndex + moviesPerPage;
      });

      startBounceAnimation();
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
        return previousIndex - moviesPerPage;
      });

      startBounceAnimation();
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={showPreviousMovies}
          disabled={isLoading || startIndex === 0}
          className={`flex h-10 w-10 items-center justify-center rounded-lg text-xl font-bold ${
            isLoading || startIndex === 0
              ? "cursor-not-allowed bg-gray-300 text-gray-500 opacity-50"
              : "cursor-pointer bg-green-400 text-black hover:bg-green-300"
          }`}
        >
          ←
        </button>

        <div
          className={`grid flex-1 grid-cols-6 gap-5 ${
            isBouncing ? "animate-bounce" : ""
          }`}
        >
          {visibleMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} theme={theme} />;
          })}
        </div>

        <button
          type="button"
          onClick={showNextMovies}
          disabled={isLoading || startIndex + moviesPerPage >= movies.length}
          className={`flex h-10 w-10 items-center justify-center rounded-lg text-xl font-bold ${
            isLoading || startIndex + moviesPerPage >= movies.length
              ? "cursor-not-allowed bg-gray-300 text-gray-500 opacity-50"
              : "cursor-pointer bg-green-400 text-black hover:bg-green-300"
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default NewPost;
