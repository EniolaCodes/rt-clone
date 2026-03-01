import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdded(!isAdded);
  };

  return (
    <article className="movie-card" aria-labelledby={`title-${movie.id}`}>
      <div className="poster-container">
        <img
          src={movie.img}
          alt={`Poster for ${movie.title}`}
          role="presentation"
          className="poster-img"
          loading="lazy"
        />
        <div className="poster-overlay">
          <a href={`/movie/${movie.id}`} className="poster-link">
            <span className="sr-only">View details for {movie.title}</span>
          </a>
        </div>

        {/* Centered Play Overlay */}
        <div className="play-overlay">
          <button
            type="button"
            className="play-button"
            aria-label={`Play trailer for ${movie.title}`}
            onClick={(e) => {
              e.preventDefault();
              console.log("Play");
            }}
          >
            <span className="play-icon" aria-hidden="true">
              ▶
            </span>
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3 id={`title-${movie.id}`} className="movie-title">
          <a href={`/movie/${movie.id}`} className="movie-title-link">
            {movie.title}
          </a>
        </h3>

        <div className="scores" role="group" aria-label="Ratings">
          <span className="score">
            <span className="sr-only">Critics:</span>🍅 {movie.criticScore}%
          </span>
          <span className="score">
            <span className="sr-only">Audience:</span>🍿 {movie.audienceScore}%
          </span>
        </div>

        <button
          type="button"
          className={`watchlist-action ${isAdded ? "active" : ""}`}
          onClick={handleToggle}
          aria-pressed={isAdded}
        >
          {/* Circular + Sign Container */}
          <span className="plus-circle" aria-hidden="true">
            {isAdded ? "✓" : "+"}
          </span>
          <span className="button-text">
            {isAdded ? "WATCHED" : "WATCHLIST"}
          </span>
          <span className="sr-only">
            {" "}
            {isAdded ? "from" : "to"} watchlist for {movie.title}
          </span>
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
