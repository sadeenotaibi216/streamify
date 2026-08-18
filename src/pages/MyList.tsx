import { useSelector } from "react-redux";

import MovieCard from "../components/MovieCard";

function MyList({
  theme,
}: {
  theme: "light" | "dark";
}) {
  const myListMovies = useSelector(
    (state: {
      myList: {
        id: number;
        title: string;
        poster_path: string;
      }[];
    }) => state.myList
  );

  return (
    <div
      className={`min-h-screen px-7 py-7 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {myListMovies.length === 0 ? (
        <div className="flex min-h-[500px] items-center justify-center">
          <p className="text-xl font-semibold">
            No favorite movie selected.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {myListMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              theme={theme}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyList;