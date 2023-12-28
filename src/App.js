import "./App.css";

import { Navbar, TitleCard, Row } from "./components/index";
import categories from "./db/request";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TitleCard />
      <Row title="Top Rated" fetchURL={categories.top_rated} />
      <Row title="Trending Movies" fetchURL={categories.trending_movies} />
      <Row title="Action Movies" fetchURL={categories.action_movies} />
      <Row title="Adventure Movies" fetchURL={categories.adventure_movies} />
      <Row title="Animation Movies" fetchURL={categories.animation_movies} />
      <Row title="Comedy Movies" fetchURL={categories.comedy_movies} />
      <Row title="Crime Movies" fetchURL={categories.crime_movies} />
      {/* <Row
        title="Documentary Movies"
        fetchURL={categories.documentary_movies}
      /> */}
      <Row title="Drama Movies" fetchURL={categories.drama_movies} />
      <Row title="Family Movies" fetchURL={categories.family_movies} />
      <Row title="Mystery Movies" fetchURL={categories.mystery_movies} />
      <Row title="Thriller Movies" fetchURL={categories.thriller_movies} />
    </div>
  );
}

export default App;
