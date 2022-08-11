import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import AppWrapper from "./components/UI/AppWrapper";
import FullWrapper from "./components/UI/FullWrapper";
import Header from "./components/UI/Header";
import Spinner from "./components/UI/Spinner";
import TransparentContainer from "./components/UI/TransparentContainer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/films/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const transformedMovies = data.results.map((movie) => {
          return {
            title: movie.title,
            openingCrawl: movie.opening_crawl,
            director: movie.director,
          };
        });
        setMovies(transformedMovies);
        setLoading(false)
      });
  }, []);

  let content = <div>No movies found.</div>;

  loading &&
    !error &&
    (content = (
      <TransparentContainer className="text-center">
        <Spinner />
      </TransparentContainer>
    ));

  !loading && error && (content = <div>Failed to fetch movies.</div>);

  !loading && !error && (content = <MovieList movies={movies} />);

  return (
    <FullWrapper>
      <AppWrapper>
        <Header />
        {content}
      </AppWrapper>
    </FullWrapper>
  );
};

export default App;
