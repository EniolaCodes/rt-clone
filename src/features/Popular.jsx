import React from "react";

const MovieRow = ({ title, score, type }) => {
  // Map icons to accessibility labels
  const getAccessibilityLabel = () => {
    if (!score) return `${title}, no rating available`;
    const status =
      type === "certified"
        ? "Certified Fresh"
        : type === "fresh"
          ? "Fresh"
          : "Rotten";
    return `${title}, ${status} score: ${score}%`;
  };

  return (
    <li className="stats-row">
      <a href="#" className="item-title">
        {title}
      </a>
      <div className="item-score-wrapper" aria-label={getAccessibilityLabel()}>
        {type === "certified" && (
          <span className="icon certified" title="Certified Fresh">
            🍿
          </span>
        )}
        {type === "fresh" && (
          <span className="icon fresh" title="Fresh">
            🍅
          </span>
        )}
        {type === "rotten" && (
          <span className="icon rotten" title="Rotten">
            🌿
          </span>
        )}
        {!type && <span className="icon empty"></span>}
        <span className="score-value">{score ? `${score}%` : ""}</span>
      </div>
    </li>
  );
};

const StatsSection = ({ title, linkLabel, items, subLinks }) => (
  <section
    className="stats-column"
    aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
  >
    <div className="stats-column-header">
      <div className="title-group">
        <h2 id={title.replace(/\s+/g, "-").toLowerCase()}>{title}</h2>
        {subLinks && (
          <nav className="sub-nav" aria-label={`${title} filters`}>
            {subLinks.map((link, i) => (
              <React.Fragment key={link}>
                <a href="#">{link}</a>
                {i < subLinks.length - 1 && (
                  <span className="separator">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>
      <a href="#" className="view-all-link">
        {linkLabel}
      </a>
    </div>
    <ul className="stats-list">
      {items.map((item, idx) => (
        <MovieRow key={idx} {...item} />
      ))}
    </ul>
  </section>
);

const Popular = () => {
  const popularMovies = [
    { title: "The Bluff", score: 71, type: "fresh" },
    { title: "Scream VI", score: 77, type: "certified" },
    { title: "The Secret Agent", score: 98, type: "certified" },
    { title: "Marty Supreme", score: 93, type: "certified" },
    { title: "The Revenant", score: 78, type: "certified" },
  ];

  const popularTV = [
    { title: "Scrubs", score: 90, type: "certified" },
    { title: "Paradise", score: 89, type: "certified" },
    { title: "The Night Agent", score: 85, type: "fresh" },
    { title: "56 Days", score: 58, type: "rotten" },
    { title: "Under Salt Marsh", score: 100, type: "fresh" },
  ];

  return (
    <div className="stats-board-container">
      <StatsSection
        title="Popular Streaming Movies"
        linkLabel="VIEW ALL"
        items={popularMovies}
        subLinks={["Fandango at Home", "Netflix", "Prime Video", "HBO Max"]}
      />
      <StatsSection title="Popular TV" linkLabel="VIEW ALL" items={popularTV} />
    </div>
  );
};

export default Popular;
