import {describe, expect} from "vitest";
import {render, screen} from "@testing-library/react";
import Users from "./users.tsx";
import {server} from "../../../mocks/node.ts";
import { http, HttpResponse } from 'msw'
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

    it('should renders error', async () => {
        server.use(
            http.get('https://jsonplaceholder.typicode.com/users', () => {
                return new HttpResponse(null, {
                    status: 500
                })
            })
        )
        render(<Users />)
        const error = await screen.findByText("Error fatching users");
        expect(error).toBeInTheDocument();
    });
})