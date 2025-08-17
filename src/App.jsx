import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-indigo-600 text-white p-4 shadow">
        <Link to="/" className="text-xl font-bold">🎬 MovieDB</Link>
      </header>
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-gray-200 text-center py-2">
        © 2025 MovieDB
      </footer>
    </div>
  );
}

export default App;
