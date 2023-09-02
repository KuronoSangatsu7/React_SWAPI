import { useQuery } from "@tanstack/react-query";
import { TransparentContainer } from "../UI/transparent-container.component";
import { Movie } from "./movie.component";
import { getMovies } from "../../services/movie.service";
import { Spinner } from "../UI/spinner.component";

export const Movies = () => {
    const { data: movies, isLoading: isLoadingMovies } = useQuery({
        queryKey: ["movies"],
        queryFn: getMovies,
    });

    if (isLoadingMovies)
        return (
            <TransparentContainer className="text-center">
                <Spinner />
            </TransparentContainer>
        );

    if (movies && !movies.results)
        return (
            <TransparentContainer className="text-center">
                "No movies were found :/"
            </TransparentContainer>
        );

    if (movies)
        return (
            <TransparentContainer className="max-h-full overflow-y-scroll scroll-smooth flex">
                <div className="flex grow max-h-128 flex-col space-y-2">
                    {movies.results.map((movie) => (
                        <Movie movie={movie} key={movie.id} />
                    ))}
                </div>
            </TransparentContainer>
        );

    return null;
};
