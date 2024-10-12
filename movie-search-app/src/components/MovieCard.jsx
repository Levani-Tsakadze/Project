import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            <div>
                <h2>{movie.Title}</h2>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
};

export default MovieCard;
