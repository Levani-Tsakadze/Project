import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    if (!movies.length) {
        return null;
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
