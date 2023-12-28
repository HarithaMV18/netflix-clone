const API_KEY = "af8bedd4a97c6da667c0d8b3f13bbcc3";
const categories = {
  top_rated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  trending_movies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  action_movies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  adventure_movies: `discover/movie?api_key=${API_KEY}&with_genres=12`,
  animation_movies: `discover/movie?api_key=${API_KEY}&with_genres=16`,
  comedy_movies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  crime_movies: `discover/movie?api_key=${API_KEY}&with_genres=80`,
  documentary_movies: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  drama_movies: `discover/movie?api_key=${API_KEY}&with_genres=18`,
  family_movies: `discover/movie?api_key=${API_KEY}&with_genres=10751`,
  mystery_movies: `discover/movie?api_key=${API_KEY}&with_genres=9648`,
  thriller_movies: `discover/movie?api_key=${API_KEY}&with_genres=53`,
};
export default categories;
