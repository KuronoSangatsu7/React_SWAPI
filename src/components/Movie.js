const Movie = (props) => {
  return (
    <div className="flex-col space-y-2">
      <h1 className="text-4xl font-black text-meat">{props.movie.title}</h1>
      <div className="flex-col space-y-2 pl-2">
        <div>{props.movie.openingCrawl}</div>
        <div>Directed By: {props.movie.director}</div>
      </div>
    </div>
  );
};

export default Movie;
