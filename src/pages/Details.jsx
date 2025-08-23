import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import Spinner from "../components/Spinner";
import ErrorBanner from "../components/ErrorBanner";

export default function Details() {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id);

  if (loading) return <Spinner />;
  if (error) return <ErrorBanner message={error} />;
  if (!movie) return null;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
          className="w-full md:w-1/3 rounded"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
          <p className="text-gray-700 mb-2">{movie.Plot}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Ratings:</strong></p>
          <ul className="list-disc ml-5">
            {movie.Ratings?.map((r, i) => (
              <li key={i}>{r.Source}: {r.Value}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
