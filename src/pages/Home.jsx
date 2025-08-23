import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import Spinner from "../components/Spinner";
import ErrorBanner from "../components/ErrorBanner";
import useSearchMovies from "../hooks/useSearchMovies";

export default function Home() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { movies, totalResults, loading, error } = useSearchMovies(query, page);

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div>
      <SearchBar onSearch={(q) => { setQuery(q); setPage(1); }} />
      {loading && <Spinner />}
      {error && <ErrorBanner message={error} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((m) => <MovieCard key={m.imdbID} movie={m} />)}
      </div>
      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      )}
    </div>
  );
}
