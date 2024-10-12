import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";


function App() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");

    const API_KEY = "352e8bcc"; 

    const fetchMovies = async (movieName) => {
        setLoading(true);
        setError("");

        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`);
            if (response.data.Response === "True") {
                setMovies(response.data.Search);
            } else {
                setError("No Movies found!");
            }
        } catch (err) {
            setError("Failed to fetch data");
        }
        setLoading(false);
    };

    const handleSearch = () => {
        if (query.trim()) {
            fetchMovies(query);
        }
    };

    return (
        <div>
            <h1>Movie Search App</h1>
            <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            <MovieList movies={movies} />
        </div>
    );
}

export default App;
