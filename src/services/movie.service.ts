import { MoviesResponseType } from "../types/movie.types";

export const getMovies = () => {
    return fetch("https://swapi.dev/api/films")
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json() as Promise<MoviesResponseType>;
        })
        .then((data) => {
            console.log(data);
            return data;
        });
};
