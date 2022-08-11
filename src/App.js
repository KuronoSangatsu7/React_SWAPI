import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import NewMovie from "./components/NewMovie";
import AppWrapper from "./components/UI/AppWrapper";
import FullWrapper from "./components/UI/FullWrapper";
import Header from "./components/UI/Header";
import Spinner from "./components/UI/Spinner";
import TransparentContainer from "./components/UI/TransparentContainer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loadingGet, setLoadingGet] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoadingGet(true);
    fetch("https://react-swapi-eb200-default-rtdb.europe-west1.firebasedatabase.app/movies.json", {
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
        const loadedMovies = []

        for(const key of Object.keys(data)) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            director: data[key].director,
            openingCrawl: data[key].openingCrawl
          })
        }

        setMovies(loadedMovies);
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => setLoadingGet(false));
  }, [loadingPost]);

  const newMovieAddedHandler = (movie) => {
    setLoadingPost(true)
    fetch(
      "https://react-swapi-eb200-default-rtdb.europe-west1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      }
    ).then(() => setLoadingPost(false));
  };

  let content = (
    <TransparentContainer className="text-center">
      No movies found.
    </TransparentContainer>
  );

  loadingGet &&
    !error &&
    (content = (
      <TransparentContainer className="text-center">
        <Spinner />
      </TransparentContainer>
    ));

  !loadingGet &&
    error == "Something went wrong :\\" &&
    (content = (
      <TransparentContainer className="text-center">
        {error}
      </TransparentContainer>
    ));

  !loadingGet && !error && (content = <MovieList movies={movies} />);

  return (
    <FullWrapper>
      <AppWrapper>
        <Header />
        <NewMovie onNewMovieAdded={newMovieAddedHandler} loading={loadingPost} />
        {content}
      </AppWrapper>
    </FullWrapper>
  );
};

export default App;
