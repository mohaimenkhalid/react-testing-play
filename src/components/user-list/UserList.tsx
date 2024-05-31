type User = {
    id: number,
    name: string,
    email: string,
    phone: string,
    age: number,
    balance: number
}
const UserList = ({ users } : { users: User[] }) => {
    if(users.length === 0) return <p>No users available.</p>
    return (
        <ul>
            { users.map((user: User) => (
                <li key={user.id}>
                    <a href={`/users/${user.id}`}>{user.name}</a>
                </li>
            ))}
        </ul>
    );
};

export default UserList;