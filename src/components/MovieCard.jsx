function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition-transform duration-200 ease-out hover:z-10 hover:scale-110 dark:bg-gray-800">
      <img
        src={imageUrl}
        alt={movie.title}
        className="h-96 w-full object-cover"
      />

      <h2 className="p-4 text-center text-xl font-bold text-gray-900 dark:text-white">
        {movie.title}
      </h2>
    </div>
  );
}

export default MovieCard;
