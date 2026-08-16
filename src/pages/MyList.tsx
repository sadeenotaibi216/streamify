import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

function MyList({ theme }: { theme: "light" | "dark" }) {
  const myListMovies = useSelector(
    (state: {
      myList: {
        id: number;
        title: string;
        poster_path: string;
      }[];
    }) => state.myList
  );

  if (myListMovies.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-xl font-semibold">
          No favorite movie selected.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {myListMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          theme={theme}
          showAddButton={false}
        />
      ))}
    </div>
  );
}

export default MyList;