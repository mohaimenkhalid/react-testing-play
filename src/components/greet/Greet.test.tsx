import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import Greet from "./Greet.tsx";
import '@testing-library/jest-dom/vitest'

describe("Greet", ()=> {
    test("should render Hello with name is provided", () => {
        render(<Greet name="khalid" />)
        const textElement = screen.getByText("Hello khalid");
        expect(textElement).toBeInTheDocument();
    })

    test("should render heading & match", () => {
        const heading = screen.getByRole("heading");
        //expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/this is/i)
    })

    test("should render login button when name is not provided", () => {
        render(<Greet name="" />)
        const textElement = screen.getByText("login");
        expect(textElement).toBeInTheDocument();
    })
})