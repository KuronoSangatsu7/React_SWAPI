import { TransparentContainer } from "../../../components/UI/transparent-container.component";
import { render, screen } from "../../../utils/test-utils";
import { describe, it } from "vitest";

describe("TransparentContainer", async () => {
    it("should render children", () => {
        render(
            <TransparentContainer>
                i am text inside container
            </TransparentContainer>,
        );
        expect(
            screen.getByText("i am text inside container"),
        ).toBeInTheDocument();
    });
});
