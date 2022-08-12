import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import AppWrapper from "./components/UI/AppWrapper";
import FullWrapper from "./components/UI/FullWrapper";
import Header from "./components/UI/Header";
import Spinner from "./components/UI/Spinner";
import TransparentContainer from "./components/UI/TransparentContainer";
import useHttp from "./hooks/use-http"
const App = () => {
  const [movies, setMovies] = useState([]);
  const {loading, error, requestHttp: fetchMovies} = useHttp()

  useEffect(() => {
    const parseMovies = (data) => {
      const transformedMovies = data.results.map((movie) => {
        return {
          title: movie.title,
          openingCrawl: movie.opening_crawl,
          director: movie.director,
          id: movie.episode_id
        };
      });
      setMovies(transformedMovies);
    }

    fetchMovies({url: "https://swapi.dev/api/films"}, parseMovies)

  }, [fetchMovies]);

  let content = (
    <TransparentContainer className="text-center">
      No movies found.
    </TransparentContainer>
  );

  loading &&
    !error &&
    (content = (
      <TransparentContainer className="text-center">
        <Spinner />
      </TransparentContainer>
    ));

  !loading &&
    error &&
    (content = (
      <TransparentContainer className="text-center">
        {error}
      </TransparentContainer>
    ));

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
