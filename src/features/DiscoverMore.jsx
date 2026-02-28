import React from "react";

const discoverItems = [
  {
    title: "Awards Tour",
    href: "#",
    img: "https://resourceboy.com/wp-content/uploads/2022/05/cut-out-text-overlay-effect-1.jpg",

    alt: "Rotten Tomatoes Awards Tour promotional banner",
  },
  {
    title: "What to Watch",
    href: "#",
    img: "https://resourceboy.com/wp-content/uploads/2022/05/cut-out-text-overlay-effect-1.jpg",
  },
  {
    title: "Rotten Tomatoes App",
    href: "#",
    img: "https://resourceboy.com/wp-content/uploads/2022/05/cut-out-text-overlay-effect-1.jpg",

    alt: "Rotten Tomatoes mobile app displayed on smartphones",
  },
  {
    title: "Scene on the Screen",
    href: "#",

    img: "https://resourceboy.com/wp-content/uploads/2022/05/cut-out-text-overlay-effect-1.jpg",
    alt: "Scene on the Screen featuring hosts",
  },
];

const DiscoverMore = () => {
  return (
    <section className="discover-section" aria-labelledby="discover-heading">
      <div className="discover-header">
        <h2 id="discover-heading">Discover More</h2>

        <a
          href="#"
          className="view-all"
          aria-label="View all discover more content"
        >
          View All
        </a>
      </div>

      <ul className="discover-grid">
        {discoverItems.map((item) => (
          <li key={item.title} className="discover-card">
            <a href={item.href} className="card-link">
              <img src={item.img} alt={item.alt} className="card-image" />
              <span className="card-title">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DiscoverMore;
