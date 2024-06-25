export const Counter = (props: {count: number, handleIncrement?: () => void, handleDecrement?: () => void}) => {
    return (
        <div>
            <h1>Counter Component</h1>
            <p>{props.count}</p>
            {
                props.handleIncrement && (
                    <button onClick={props.handleIncrement}>Increment</button>
                )
            }
            {
                props.handleDecrement && (
                    <button onClick={props.handleDecrement}>Decrement</button>
                )
            }
        </div>
    )
}