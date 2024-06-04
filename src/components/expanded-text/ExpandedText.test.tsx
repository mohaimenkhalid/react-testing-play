import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import ExpendableText from "./ExpendableText.tsx";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";

describe("ExpandedText", () => {
    const limit = 255;
    const longText = 'a'.repeat(limit+10);
    const truncateText = longText.substring(0, limit)+"...";
    it('should render the full text if text tess than 255', () => {
        const text = "Some Text"
        render(<ExpendableText text={text} />)
        const textElement = screen.getByText(text)
        expect(textElement).toBeInTheDocument();
    });

    it('should truncate text if longer than 255', () => {
        render(<ExpendableText text={longText} />)
        const expectedText = screen.getByText(truncateText)
        expect(expectedText).toBeInTheDocument();

        const button = screen.getByRole("button");
        expect(button).toHaveTextContent(/more/i)
    });

    it('should expand text  when show more button is clicked', async () => {
        render(<ExpendableText text={longText} />)

        const button = screen.getByRole("button");
        const user = userEvent.setup();
        await user.click(button)
        const fullText = screen.getByText(longText)

        expect(fullText).toBeInTheDocument()
        expect(button).toHaveTextContent(/less/i)
    });

    it('should collapse text  when show less button is clicked', async () => {
        render(<ExpendableText text={longText} />)

        const showMoreButton = screen.getByRole("button", {name: /more/i});
        const user = userEvent.setup();
        await user.click(showMoreButton)

        const showLessButton = screen.getByRole("button", {name: /less/i});

        await user.click(showLessButton)

        const fullText = screen.getByText(truncateText)
        expect(fullText).toBeInTheDocument()
        expect(showMoreButton).toHaveTextContent(/more/i)
    });
})