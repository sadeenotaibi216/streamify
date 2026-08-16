import MovieCard from "../components/MovieCard";

function Favorites(
  {
    theme,
    favorites,
  }: {
    theme: "light" | "dark";
    favorites: {
      id: number;
      poster_path: string;
      title: string;
    }[];
  }
) {
  if (favorites.length === 0) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-xl font-semibold">
          No favorite movie selected.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 p-8 sm:grid-cols-2 lg:grid-cols-3">
      {favorites.map(function (movie) {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            theme={theme}
          />
        );
      })}
    </div>
  );
}

export default Favorites;