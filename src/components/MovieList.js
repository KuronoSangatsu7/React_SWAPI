import Movie from "./Movie";
import TransparentContainer from "./UI/TransparentContainer";

const MovieList = (props) => {
  let content = props.movies.map((movie) => <Movie movie={movie} key={movie.id}/>);
  return (
    <TransparentContainer className="max-h-full overflow-scroll scroll-smooth">
      <div className="flex-col space-y-2">{content}</div>
    </TransparentContainer>
  );
};

export default MovieList;
