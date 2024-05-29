import './App.css'
import Greet from "./components/greet/Greet.tsx";
import User from "./components/user/User.tsx";

function App() {
    const user = {name: "khalid", age: 12, isAdmin: true }
  return (
    <>
      <Greet  name="mohaimen"/>

        <hr />

        <User user={user} />
    </>
  )
}

export default App
