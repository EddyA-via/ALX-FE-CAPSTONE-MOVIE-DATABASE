import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="bg-white rounded-lg shadow p-2 hover:shadow-md">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{movie.Title}</h3>
      <p className="text-sm text-gray-600">{movie.Year}</p>
    </Link>
  );
}
