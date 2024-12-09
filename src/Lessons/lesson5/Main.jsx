import { Form } from "./Form"
import { Login } from "./Login"
import { LoginRef } from "./LoginRef"
import { Register } from "./Register"

export const Main = () => {

    const users = [
        { username: 'Sara', email: 's111@gmail.com', password: '111' },
        { username: 'Rivka', email: 'r222@gmail.com', password: '222' },
        { username: 'Rachel', email: 'r333@gmail.com', password: '333' },
        { username: 'Leah', email: 'l444@gmail.com', password: '444' },
        { username: 'Pnina', email: 'p555@gmail.com', password: '555' },
    ]

    const login = (user) => {
        let found = users.find(u => u.email == user.email && u.password == user.password)
        return found
    }

    const addUser = (user) => {
        if (login(user))
            return;
        users.push(user)
        console.log({ users });
    }

    return <>
        {/* <Form></Form> */}
        <Login login={login}></Login>
        <LoginRef login={login}></LoginRef>
        <Register register={addUser}></Register>
    </>
}