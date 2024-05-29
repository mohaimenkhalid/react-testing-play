type User = {name: string, age: number, isAdmin?: boolean}
const User = ({user} : {user: User}) => {
    return (
        <>
            <h2>User profile</h2>
            {
                user.isAdmin && <button>Edit Profile</button>
            }
            <div>
                <strong>Name: </strong> {user.name} ,
                <strong>Age:</strong> {user.age}
            </div>
        </>
    );
};

export default User;