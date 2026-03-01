import React, { useState } from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    id: 1,
    title: "The Revenant",
    img: "https://media.designrush.com/tinymce_images/205872/conversions/1.-Dream-Factory-content.jpg",

    criticScore: 78,
    audienceScore: 84,
  },
  {
    id: 2,
    title: "Wuthering Heights",
    img: "https://substackcdn.com/image/fetch/$s_!SjlY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F289ad232-bb03-4b07-848c-d0dad888a4dc_2000x2963.png",
    criticScore: 85,
    audienceScore: 90,
  },
  {
    id: 3,
    title: "The Inception",
    img: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    criticScore: 56,
    audienceScore: 84,
  },
  {
    id: 4,
    title: "Interstellar",
    img: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    criticScore: 78,
    audienceScore: 100,
  },

  {
    id: 5,
    title: "The Godfather",
    img: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
    criticScore: 98,
    audienceScore: 95,
  },

  {
    id: 6,
    title: "Pulp Fiction",
    img: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    criticScore: 92,
    audienceScore: 94,
  },
  {
    id: 7,
    title: "Titanic",
    img: "https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg",
    criticScore: 54,
    audienceScore: 124,
  },

  {
    id: 8,
    title: "The Matrix",
    img: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg",
    criticScore: 78,
    audienceScore: 84,
  },
];

const MovieGrid = () => {
  const [page, setPage] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // --- CONDITIONAL SWIPE LOGIC ---
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    // Only initialize swipe if screen is wider than 600px (Desktop/Tablet)
    if (window.innerWidth <= 600) return;

    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (window.innerWidth <= 600) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    // Ignore swipe logic if we're on mobile (stacked view)
    if (window.innerWidth <= 600 || !touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  // Logic: Each 'page' moves the slider by 80% of the container width
  // to bring the peeked card into full focus.
  const handleNext = () => setPage((p) => p + 1);
  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));

  const totalPages = Math.ceil(movies.length / 4);
  return (
    <section className="movie-section" aria-labelledby="theater-heading">
      <div className="section-header">
        <div>
          <h2 id="theater-heading">Movies in Theaters</h2>
          <p className="section-subtext">
            New movies opening this week and playing now
          </p>
        </div>
        <a href="#" className="view-all-link">
          VIEW ALL
        </a>
      </div>

      <div
        className="slider-wrapper"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation Buttons (Hidden by CSS on mobile) */}
        {page > 0 && (
          <button
            className="nav-btn prev"
            onClick={handlePrev}
            aria-label="Previous"
          >
            ‹
          </button>
        )}

        <div className="slider-frame">
          <div
            className="slider-track"
            /* Transform is active only on Desktop; CSS will override on mobile */
            style={{
              transform:
                window.innerWidth > 600 ? `translateX(-${page * 84}%)` : "none",
            }}
          >
            {movies.map((movie) => (
              <div className="slider-item" key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>

        {page < totalPages - 1 && (
          <button
            className="nav-btn next"
            onClick={handleNext}
            aria-label="Next"
          >
            ›
          </button>
        )}
      </div>
    </section>
  );
};

export default MovieGrid;
