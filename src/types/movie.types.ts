export type MoviesResponseType = {
    count: number;
    results: Array<MovieType>;
};

export type MovieType = {
    title: string;
    opening_crawl: string;
    director: string;
    id: number;
};
