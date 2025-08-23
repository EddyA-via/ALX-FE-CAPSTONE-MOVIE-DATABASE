import { useEffect, useState } from "react";
import { getMovieDetails } from "../utils/api";

export default function useMovieDetails(id) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getMovieDetails(id)
      .then((res) => {
        if (res.Response === "True") {
          setMovie(res);
        } else {
          setError(res.Error || "Not found.");
        }
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
  }, [id]);

  return { movie, loading, error };
}
