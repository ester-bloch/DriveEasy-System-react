import { useState } from "react"
import { useNavigate } from "react-router"
import swal from 'sweetalert'

export const Login = () => {

    const [user, setUser] = useState({})

    // hooks - נקרא use כל מה שמתחיל ב 
    // useNavigate
    // use - אסור להגדיר בתוך פונקציה
    const navigate = useNavigate()

    const send = () => {
        // swal(`Hello ${user.username}`, 'login successfuly!', 'success')
        // ניתוב לקומפוננטה מתוך קומפוננטה אחרת
        // ניתן את הניתוב שמוגדר בראוטינג 
        // ניתוב לאח - עם סלש
        // navigate(`/welcome/${user.username}/${user.password}`)
        navigate('/welcome/' + user.username + '/' + user.password)
    }

    return <>
        <h2>Login:</h2>
        <label htmlFor='UN'>Username:</label><br></br>
        <input id="UN" type="text" placeholder="input username" onBlur={(e) => setUser({ ...user, username: e.target.value })}></input><br></br>
        <label htmlFor='E'>Email:</label><br></br>
        <input id="E" type="email" placeholder="input email" onBlur={(e) => setUser({ ...user, email: e.target.value })}></input><br></br>
        <label htmlFor='PW'>Password:</label><br></br>
        <input id="PW" type="password" placeholder="input password" onBlur={(e) => setUser({ ...user, password: e.target.value })}></input><br></br>
        <button onClick={send}>send</button>
    </>
}