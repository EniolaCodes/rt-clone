import MovieCard from "./movies/MovieCard";

const Recommend = () => {
  return (
    <section>
      <h2>Staff Picks</h2>
      <div className="movie-grid">
        <MovieCard
          title="Scream 4"
          posterUrl="/images/scream.jpg"
          criticScore={61}
          audienceScore={57}
        />
        <MovieCard
          title="Sinners"
          posterUrl="/images/sinners.jpg"
          criticScore={97}
          audienceScore={96}
          hasTrailer={true}
        />
      </div>
    </section>
  );
};
export default Recommend;
