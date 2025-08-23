import { useEffect, useState } from "react";
import { searchMovies } from "../utils/api";

export default function useSearchMovies(query, page) {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setMovies([]);
      setTotalResults(0);
      return;
    }
    setLoading(true);
    setError(null);
    searchMovies(query, page)
      .then((res) => {
        if (res.Response === "True") {
          setMovies(res.Search);
          setTotalResults(Number(res.totalResults));
        } else {
          setError(res.Error || "No results found.");
          setMovies([]);
          setTotalResults(0);
        }
      })
      .catch(() => setError("Network error"))
      .finally(() => setLoading(false));
  }, [query, page]);

  return { movies, totalResults, loading, error };
}
