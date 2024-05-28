const Greet = ({name}: {name: string}) => {
    return (
        <div>
            <div>{name ? `Hello ${name}` : 'login'}</div>
            <h1>This is a heading</h1>
        </div>
    );
};

export default Greet;