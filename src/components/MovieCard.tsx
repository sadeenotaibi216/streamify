import { useDispatch } from "react-redux";
import { addToMyList } from "../store/MyListSlice";

function MovieCard(
  {
    movie,
    theme,
    showAddButton = true,
  }: {
    movie: {
      poster_path: string;
      title: string;
    };
    theme: "light" | "dark";
    showAddButton?: boolean;
  }
) {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex h-[490px] w-full flex-col overflow-hidden rounded-xl shadow-md
        transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl
        ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-[370px] w-full object-cover"
      />

      <div className="flex h-[70px] items-center justify-center px-3">
        <h2 className="text-center text-xl font-bold leading-6">
          {movie.title}
        </h2>
      </div>

      {showAddButton && (
        <button
          type="button"
          onClick={() => dispatch(addToMyList(movie))}
          className="mx-4 mb-4 rounded-lg bg-green-400 px-4 py-2 font-semibold text-black hover:bg-green-300"
        >
          Add to My List
        </button>
      )}
    </div>
  );
}

export default MovieCard;