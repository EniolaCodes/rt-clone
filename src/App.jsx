import "./App.css";
import SkipToContent from "./components/layout/SkipToContent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MovieGrid from "./features/movies/MovieGrid";
import DiscoverMore from "./features/DiscoverMore";
import Recommend from "./features/Recommend";

function App() {
  return (
    <div className="app-container">
      <SkipToContent />
      <Header />
      <main id="main-content" tabIndex="-1" className="outline-none">
        {/* <section className="max-w-7xl mx-auto px-4 py-8">
          <h2
            className="text-2xl f
          ont-bold mb-6"
          >
            Movies in Theaters
          </h2>
          <MovieGrid />
       
          <DiscoverMore />
        </section> */}
        <MovieGrid />
        <DiscoverMore />
        {/* <Recommend /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
