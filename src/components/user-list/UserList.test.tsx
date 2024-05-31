import {render, screen} from "@testing-library/react";
import UserList from "./UserList.tsx";
import {describe, expect} from "vitest";
type User = {
    id: number,
    name: string,
    email: string,
    phone: string,
    age: number,
    balance: number
}

describe("UserList", () => {
    it('should display a message when no users are available', () => {
        render(<UserList users={[]} />)
        const textElement = screen.getByText(/no users/i);
        expect(textElement).toBeInTheDocument();
    })

    it('should render a list of users with user name and link ', () => {
        const users: User[] = [
            {
                id: 1,
                name: "mohaimen",
                email: "mohaimen707@gmail.com",
                phone: "01798659099",
                age: 30,
                balance: 50000
            },
            {
                id: 2,
                name: "mamun",
                email: "mamun@gmail.com",
                phone: "01798659057",
                age: 42,
                balance: 700000,
            }
        ]
        render(<UserList users={users} />)

        users.forEach(user => {
            // const textElement = screen.getByText(user.name);
            const link = screen.getByRole('link', {name: user.name});
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute('href', `/users/${user.id}`);
        })

    })
})
