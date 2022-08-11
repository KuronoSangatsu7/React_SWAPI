import { useRef } from "react";
import Spinner from "./UI/Spinner";
import TransparentContainer from "./UI/TransparentContainer";

const NewMovie = (props) => {
  const titleRef = useRef();
  const directorRef = useRef()
  const openingRef = useRef()

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const movie = {
      title: titleRef.current.value,
      director: directorRef.current.value,
      openingCrawl: openingRef.current.value
    }

    props.onNewMovieAdded(movie)

    titleRef.current.value = ''
    directorRef.current.value = ''
    openingRef.current.value = ''
  }

  return (
    <TransparentContainer className="container md:w-1/2 mx-auto">
      <form onSubmit={handleFormSubmit} className="flex-col space-y-3 text-xl">
        <h1 className="text-3xl font-extrabold text-meat">New movie:</h1>
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" ref={titleRef}/>
        <label htmlFor="director">Directed by:</label>
        <input id="director" type="text" ref={directorRef}/>
        <label htmlFor="opening">Opening text:</label>
        <input id="opening" type="text" ref={openingRef}/>
        <button className="bg-amber-400 rounded-lg p-2 ml-auto flex ">{props.loading? <Spinner />:"Add Movie"}</button>
      </form>
    </TransparentContainer>
  );
};

export default NewMovie;
