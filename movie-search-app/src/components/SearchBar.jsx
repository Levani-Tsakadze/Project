import React from "react";

const SearchBar = ({ query, setQuery, handleSearch }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search a movie"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch} disabled={!query.trim()}>Search</button>
        </div>
    );
};

export default SearchBar;
