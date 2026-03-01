import "./App.css";
import SkipToContent from "./components/layout/SkipToContent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MovieGrid from "./features/movies/MovieGrid";
import DiscoverMore from "./features/DiscoverMore";
import Recommend from "./features/Recommend";
import WatchAtHome from "./features/movies/WatctAtHome";

function App() {
  return (
    <div className="app-container">
      <SkipToContent />
      <Header />
      <main id="main-content" tabIndex="-1" className="outline-none">
        <MovieGrid />
        <WatchAtHome />
        <DiscoverMore />
        {/* <Recommend /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
