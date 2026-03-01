import React, { useState } from "react";
import MovieCard from "../movies/MovieCard";

const movies = [
  {
    id: 1,
    title: "The Lord of the Rings",
    img: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
    criticScore: 91,
    audienceScore: 98,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    img: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",

    criticScore: 92,
    audienceScore: 96,
  },
  {
    id: 3,
    title: "Gladiator",
    img: "https://substackcdn.com/image/fetch/$s_!SjlY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F289ad232-bb03-4b07-848c-d0dad888a4dc_2000x2963.png",
    criticScore: 77,
    audienceScore: 87,
  },
  {
    id: 4,
    title: "Fight Club",
    img: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    criticScore: 79,
    audienceScore: 96,
  },
  {
    id: 6,
    title: "The Silence of the Lambs",
    img: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
    criticScore: 95,
    audienceScore: 95,
  },
  {
    id: 7,
    title: "Saving Private Ryan",
    img: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    criticScore: 94,
    audienceScore: 95,
  },
  {
    id: 8,
    title: "The Lion King",
    img: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
    criticScore: 93,
    audienceScore: 93,
  },
];

const Recommended = () => {
  const [page, setPage] = useState(0);

  // Logic: Each 'page' moves the slider by 80% of the container width
  // to bring the peeked card into full focus.
  const handleNext = () => setPage((p) => p + 1);
  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));

  const totalPages = Math.ceil(movies.length / 4);
  return (
    <section className="movie-section" aria-labelledby="theater-heading">
      <div className="section-header">
        <div>
          <h2 id="theater-heading">RT Recommends: Weekly Staff Picks</h2>
          <p className="section-subtext">
            From new releases to our favorite classics
          </p>
        </div>
        <a href="#" className="view-all-link">
          VIEW ALL
        </a>
      </div>

      <div className="slider-wrapper">
        {/* Navigation positioned at the center edges of the frame */}
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

export default Recommended;
