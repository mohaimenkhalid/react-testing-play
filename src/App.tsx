import './App.css'
import Greet from "./components/greet/Greet.tsx";
import User from "./components/user/User.tsx";
import UserList from "./components/user-list/UserList.tsx";
import ImageGallery from "./components/image/ImageGallery.tsx";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions.tsx";
import ExpendableText from "./components/expanded-text/ExpendableText.tsx";
import {Counter} from "./components/counter/counter.tsx";
import {useCounter} from "./hooks/useCounter.ts";

function App() {
    type User = {
        id: number,
        name: string,
        email: string,
        phone: string,
        age: number,
        balance: number
    }
    const {count, increment, decrement} = useCounter()
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

            <hr/>

            <TermsAndConditions/>

            <hr/>

            <div style={{width: "100%"}}>
                <ExpendableText
                    text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                />
            </div>

            <hr />

            <Counter count={count} handleIncrement={increment} handleDecrement={decrement} />
        </>
    )
}

export default App
