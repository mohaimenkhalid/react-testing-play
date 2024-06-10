import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import {Counter} from "./counter.tsx";

describe("Counter", () => {
    it('should render initial component', () => {
        render(<Counter count={0} />)
        const headingTitle = screen.getByRole('heading', {
            name: /counter component/i
        })
        expect(headingTitle).toBeInTheDocument();
        const initialCount = screen.getByText(/0/i);
        expect(initialCount).toBeInTheDocument();
    });
})