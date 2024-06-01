import './App.css'
import Greet from "./components/greet/Greet.tsx";
import User from "./components/user/User.tsx";
import UserList from "./components/user-list/UserList.tsx";
import ImageGallery from "./components/image/ImageGallery.tsx";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions.tsx";

function App() {
    type User = {
        id: number,
        name: string,
        email: string,
        phone: string,
        age: number,
        balance: number
    }
    const user = {name: "khalid", age: 12, isAdmin: true}

    const users: User[] = [
        {
            id: 1,
            name: "mohaimen",
            email: "mohaimen707@gmail.com",
            phone: "01798659099",
            age: 30,
            balance: 50000
        },
        {
            id: 2,
            name: "mamun",
            email: "mamun@gmail.com",
            phone: "01798659057",
            age: 42,
            balance: 700000,
        }
    ]

    const images = [`https://source.unsplash.com/random/300x200?sig=${Math.random()}`, `https://source.unsplash.com/random/300x200?sig=${Math.random()}`]
    return (
        <>
            <Greet name="mohaimen"/>

            <hr/>

            <User user={user}/>

            <hr/>

            <UserList users={users}/>

            <hr/>

            <ImageGallery images={images}/>

            <hr />

            <TermsAndConditions />
        </>
    )
}

export default App
