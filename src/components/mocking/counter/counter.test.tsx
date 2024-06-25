import {describe, expect, vi} from "vitest";
import {render, screen} from "@testing-library/react";
import {Counter} from "./counter.tsx";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
    it('should render initial component', () => {
        render(<Counter count={0}/>)
        const headingTitle = screen.getByRole('heading', {
            name: /counter component/i
        })
        expect(headingTitle).toBeInTheDocument();
        const initialCount = screen.getByText(/0/i);
        expect(initialCount).toBeInTheDocument();
    });

    it('Should render action button', async () => {
        const user = userEvent.setup();
        const incrementHandler = vi.fn();
        const decrementHandler = vi.fn();
        render(
            <Counter
                count={0}
                handleIncrement={incrementHandler}
                handleDecrement={decrementHandler}
            />
        );
        const incrementButton = screen.getByRole('button', {
            name: /increment/i
        })

        const decrementButton = screen.getByRole('button', {
            name: /decrement/i
        })
        await user.click(incrementButton);
        await user.click(decrementButton);
        expect(incrementHandler).toHaveBeenCalledTimes(1);
        expect(decrementHandler).toHaveBeenCalledTimes(1);
    })
})