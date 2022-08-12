import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import NewMovie from "./components/NewMovie";
import AppWrapper from "./components/UI/AppWrapper";
import FullWrapper from "./components/UI/FullWrapper";
import Header from "./components/UI/Header";
import Spinner from "./components/UI/Spinner";
import TransparentContainer from "./components/UI/TransparentContainer";
import useHttp from "./components/hooks/use-http";

const App = () => {
  const [movies, setMovies] = useState([]);
  const { loading, error, requestHttp: fetchMovies } = useHttp();

  useEffect(() => {
    const parseMovies = (data) => {
      const loadedMovies = [];

      for (const key of Object.keys(data)) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          director: data[key].director,
          openingCrawl: data[key].openingCrawl,
        });
      }
      
      setMovies(loadedMovies);
    };
    fetchMovies(
      {
        url: "https://react-swapi-eb200-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      },
      parseMovies
    );
    
  }, [fetchMovies]);

  const newMovieAddedHandler = (movie) => {
    setMovies(prevMovies => prevMovies.concat(movie))
  };

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
    error === "Something went wrong :\\" &&
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
        <NewMovie
          onNewMovieAdded={newMovieAddedHandler}
        />
        {content}
      </AppWrapper>
    </FullWrapper>
  );
};

export default App;
