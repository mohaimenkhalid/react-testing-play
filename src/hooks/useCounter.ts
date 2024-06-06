import {useState} from "react";

export const useCounter = (initialCount: number = 0) => {
    // @ts-ignore
    const [count, setCount] = useState(initialCount)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return {
        count, increment, decrement
    }
}