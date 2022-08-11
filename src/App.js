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
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://swapi.dev/api/films/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Something went wrong :\\");
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.results.map((movie) => {
          return {
            title: movie.title,
            openingCrawl: movie.opening_crawl,
            director: movie.director,
          };
        });
        setMovies(transformedMovies);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  }, []);

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
