const Greet = ({name}: {name: string}) => {
    return (
        <div>
            <h1>This is a heading</h1>
            <div>Hello {name ? name : ''}</div>
        </div>
    );
};

export default Greet;