function MovieCard({ movie, theme }) {
  return (
    <div
      className={`flex h-[450px] w-full flex-col overflow-hidden rounded-xl shadow-md
    transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl
    ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="h-[370px] w-full object-cover"
      />

      <div className="flex h-[80px] items-center justify-center px-3">
        <h2 className="text-center text-xl font-bold leading-6">
          {movie.title}
        </h2>
      </div>
    </div>
  );
}

export default MovieCard;
