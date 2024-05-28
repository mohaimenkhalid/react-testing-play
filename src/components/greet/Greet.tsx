const Greet = ({name}: {name: string}) => {
    return (
        <div>
            <div>Hello {name ? name : ''}</div>
        </div>
    );
};

export default Greet;