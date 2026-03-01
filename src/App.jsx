import "./App.css";
import SkipToContent from "./components/layout/SkipToContent";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MovieGrid from "./features/movies/MovieGrid";
import DiscoverMore from "./features/DiscoverMore";
import WatchAtHome from "./features/movies/WatctAtHome";
import NewRent from "./features/movies/NewRent";
import ComingSoon from "./features/movies/ComingSoon";
import Oscar from "./features/movies/Oscar";
import Latest from "./features/movies/Latest";
import Free from "./features/movies/Free";
import Recommended from "./features/movies/Recommended";
import NewTV from "./features/New";
import Popular from "./features/Popular";
import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <div className="app-container">
      <SkipToContent />
      <Header />
      <main id="main-content" tabIndex="-1">
        <MovieGrid />
        <WatchAtHome />
        <NewRent />
        <ComingSoon />
        <Popular />
        <Oscar />
        <Latest />
        <Free />
        <Recommended />
        <NewTV />
        <DiscoverMore />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
