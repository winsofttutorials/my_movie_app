import "./App.css";
import search from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./Component/MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=971b437a";
const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovieTerm, setSearchMovieTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="App">
      <div className="movieApp">
        <h1 className="title">MovieLand</h1>
        <div className="search">
          <input
            placeholder="Search Movies here"
            value={searchMovieTerm}
            onChange={(e) => setSearchMovieTerm(e.target.value)}
          />
          <img
            src={search}
            alt="searchIcon"
            onClick={() => searchMovies(searchMovieTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movie found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
