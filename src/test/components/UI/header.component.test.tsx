import { render, screen } from "../../../utils/test-utils";
import { Header } from "../../../components/UI/header.component";
import { describe, it } from "vitest";

describe("Header", async () => {
    it("should render text", () => {
        render(<Header>test</Header>);
        expect(screen.getByText("test")).toBeInTheDocument();
    });
    it("should render an h1 tag", async () => {
        const { container } = render(<Header>test</Header>);

        expect(container.querySelector("h1")).toBeInTheDocument();
    });
});
