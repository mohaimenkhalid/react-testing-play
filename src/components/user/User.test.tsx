import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import {describe, expect, it} from "vitest";
import '@testing-library/jest-dom/vitest'

import User from "./User.tsx";

describe("UserAccount", () => {

    it('should render user name', () => {
        const user = {name: "khalid", age: 12, isAdmin: true}
        render(<User user={user} />)
        expect(screen.getByText(/khalid/i)).toBeInTheDocument();
    });

    it('should render edit button when user is an admin', () => {
        const user = {name: "khalid", age: 12, isAdmin: true}
        render(<User user={user} />)
        const buttonElement = screen.getByRole("button")
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Edit Profile")
    });

    it('should not render edit button when user is not an admin', () => {
        const user = {name: "khalid", age: 12}
        render(<User user={user} />)
        const buttonElement = screen.queryByRole("button")
        expect(buttonElement).not.toBeInTheDocument();
    });
} )