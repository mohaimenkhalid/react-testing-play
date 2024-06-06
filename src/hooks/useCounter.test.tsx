import {describe, expect} from "vitest";
import {renderHook, act} from "@testing-library/react";
import {useCounter} from "./useCounter.ts";

describe("userCounter", () => {
    it('should render the initial count', () => {
        const {result} = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    });

    it('should render the initial count with props', () => {
        const {result} = renderHook(useCounter, {
            initialProps: 10
        })
        expect(result.current.count).toBe(10)
    });

    it('should view correct count after increment count', () => {
        const {result} = renderHook(useCounter)
        act(() => result.current.increment())
        expect(result.current.count).toBe(1)
    });

    it('should view correct count after decrement count', () => {
        const {result} = renderHook(useCounter, {initialProps: 2})
        act(() => result.current.decrement())
        expect(result.current.count).toBe(1)
    });
})