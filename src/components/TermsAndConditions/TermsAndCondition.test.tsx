import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import TermsAndConditions from "./TermsAndConditions.tsx";
import userEvent from '@testing-library/user-event'

describe("TermsAndCondition", () => {
    it('should render correct text', () => {
        render(<TermsAndConditions />)
        const textElement = screen.getByRole("heading")
        expect(textElement).toHaveTextContent("Terms & Conditions")
    });

    it('should render checkbox, submit button and initially unchecked, disabled button', () => {
        render(<TermsAndConditions />)
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        const submitBtn = screen.getByRole("button")
        expect(submitBtn).toHaveTextContent('Submit')
        expect(submitBtn).toBeDisabled();
    });

    it('should enable button when user will check checkbox', async () => {
        render(<TermsAndConditions />)

        const checkbox = screen.getByRole("checkbox");
        const user = userEvent.setup();
        await user.click(checkbox);

        expect(checkbox).toBeChecked();
    });
})