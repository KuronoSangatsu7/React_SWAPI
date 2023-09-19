import { MovieType } from "../../types/movie.types";

export const Movie = ({ movie }: { movie: MovieType }) => {
    return (
        <div className="flex-col space-y-2">
            <h2 className="text-4xl font-black text-meat">{movie.title}</h2>
            <div className="flex-col space-y-2 pl-2">
                <div>{movie.opening_crawl}</div>
                <div>Directed By: {movie.director}</div>
            </div>
        </div>
    );
};
