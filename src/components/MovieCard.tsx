import { useDispatch, useSelector } from "react-redux";

import {
  addToMyList,
  removeFromMyList,
} from "../store/MyListSlice";

function MovieCard({
  movie,
  theme,
  showAddButton = true,
}: {
  movie: {
    id: number;
    poster_path: string;
    title: string;
  };

  theme: "light" | "dark";

  showAddButton?: boolean;
}) {
  const dispatch = useDispatch();

  const myListMovies = useSelector(
    (state: {
      myList: {
        id: number;
        title: string;
        poster_path: string;
      }[];
    }) => state.myList
  );

 
  const isInMyList = myListMovies.some(
    (item) => item.id === movie.id
  );

  function handleMyList() {
    if (isInMyList) {
      dispatch(removeFromMyList(movie.id));
    } else {
      dispatch(addToMyList(movie));
    }
  }

  return (
    <div
      className={`flex h-[490px] w-full flex-col overflow-hidden rounded-xl shadow-md
      transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl
      ${
        theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-[370px] w-full object-cover"
      />

      <div className="flex flex-1 flex-col justify-between p-3">
        <h2 className="text-center text-lg font-bold">
          {movie.title}
        </h2>

        {showAddButton && (
          <button
            onClick={handleMyList}
            className="w-full cursor-pointer rounded bg-green-400 py-2 font-semibold text-black hover:bg-green-300"
          >
            {isInMyList
              ? "Remove from My List"
              : "Add to My List"}
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;