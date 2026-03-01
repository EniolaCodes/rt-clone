import React from "react";

const tvData = [
  { title: "DTF St. Louis", score: 79, type: "fresh" },
  { title: "Marshals", score: 43, type: "rotten" },
  { title: "Young Sherlock", score: null, type: "none" },
  { title: "Vladimir", score: null, type: "none" },
  { title: "American Classic", score: null, type: "none" },
  { title: "RJ Decker", score: null, type: "none" },
  { title: "The Dinosaurs", score: null, type: "none" },
  { title: "Ted", score: null, type: "none" },
  { title: "Outlander", score: null, type: "none" },
  { title: "America's Culinary Cup", score: null, type: "none" },
];

const boxOfficeData = [
  { title: "GOAT", score: 82, type: "fresh" },
  { title: "Wuthering Heights", score: 58, type: "rotten" },
  { title: "I Can Only Imagine 2", score: 63, type: "fresh" },
  { title: "Crime 101", score: 88, type: "certified" },
  { title: "Send Help", score: 93, type: "certified" },
  { title: "How to Make a Killing", score: 46, type: "rotten" },
  { title: "EPiC: Elvis Presley in Concert", score: 96, type: "certified" },
  { title: "Solo Mio", score: 82, type: "fresh" },
  { title: "Zootopia 2", score: 91, type: "certified" },
  { title: "Avatar: Fire and Ash", score: 66, type: "fresh" },
];

const ListSection = ({ id, title, linkText, data }) => (
  <section className="stats-column" aria-labelledby={id}>
    <header className="stats-header">
      <h2 id={id}>{title}</h2>
      <a href="#" className="stats-link">
        {linkText}
      </a>
    </header>
    <ul className="stats-list ">
      {data.map((item, index) => (
        <li key={index} className="stats-row">
          <span className="item-title">{item.title}</span>
          <span
            className="item-score"
            aria-label={
              item.score ? `Score: ${item.score}%` : "No score available"
            }
          >
            {item.type === "fresh" && <span className="icon">🍅</span>}
            {item.type === "rotten" && <span className="icon">☘️</span>}
            {item.type === "certified" && <span className="icon">🍿</span>}
            {item.type === "none" && <span className="icon grey-circle"></span>}
            <span className="score-text">
              {item.score ? `${item.score}%` : ""}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </section>
);

const NewTV = () => {
  return (
    <div className="stats-container">
      <ListSection
        id="tv-title"
        title="New TV This Week"
        linkText="WHAT'S ON TONIGHT"
        data={tvData}
      />
      <ListSection
        id="boxoffice-title"
        title="Top 10 Box Office"
        linkText="VIEW ALL"
        data={boxOfficeData}
      />
    </div>
  );
};

export default NewTV;
