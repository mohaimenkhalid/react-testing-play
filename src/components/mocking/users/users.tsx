import {useEffect, useState} from "react";

const Users = () => {
    const [users, setUsers] = useState<string[]>([]);
    const [error, setError] = useState<null | string>(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data.map((user: string) => user.name))
            })
            .catch(() => setError("Error fatching users"));
    }, [])

    return (
        <div>
            <h1>User List from api</h1>
            {error && <p>{error}</p>}
            <ul>
                {
                    users.map(user => (
                        <li key={user}>{user}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Users;