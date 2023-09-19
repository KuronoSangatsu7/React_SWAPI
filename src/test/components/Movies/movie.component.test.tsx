import { render, screen } from "../../../utils/test-utils";
import { describe, it } from "vitest";
import { Movie } from "../../../components/Movies/movie.component";
import { MovieType } from "../../../types/movie.types";

const mockMovie: MovieType = {
    id: 0,
    opening_crawl: "Opening crawl",
    title: "Title",
    director: "Director",
};

describe("Movie", async () => {
    it("should render h2 tag for the title", () => {
        const { container } = render(<Movie movie={mockMovie} />);
        expect(container.querySelector("h2")).toBeInTheDocument();
    });
    it("should render a title", () => {
        render(<Movie movie={mockMovie} />);
        expect(screen.getByText("Title")).toBeInTheDocument();
    });
    it("should render an opening crawl", () => {
        render(<Movie movie={mockMovie} />);
        expect(screen.getByText("Opening crawl")).toBeInTheDocument();
    });
    it("should render the director's name", () => {
        render(<Movie movie={mockMovie} />);
        expect(screen.getByText("Directed By: Director")).toBeInTheDocument();
    });
});
