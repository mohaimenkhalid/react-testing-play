import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Users from "./users.tsx";

describe("Users", () => {
    it('should render correctly', () => {
        render(<Users />)
        const textElement = screen.getByText("User List from api");
        expect(textElement).toBeInTheDocument();
    });

    it('should renders a list of users', async () => {
        render(<Users />)
        const users = await screen.findAllByRole("listitem");
        expect(users).toHaveLength(3);
    });
})