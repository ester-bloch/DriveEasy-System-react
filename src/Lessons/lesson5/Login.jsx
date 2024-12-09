import { useState } from "react"
import swal from "sweetalert"

export const Login = ({ login }) => {

     const [name, setName] = useState()
     const [email, setEmail] = useState()
     const [password, setPassword] = useState()

    // {} - ערך התחלתי של המשתנה - אובייקט ג'סון
    const [user, setUser] = useState({})
    // אובייקט ג'סון - הצבת ערך למפתח
    // אם המפתח היה קיים - דריסה של הערך
    // אם לא היה קיים - המפתח והערך מתווספים
    // useState - מחכה לקבל ערך חדש
    // לכן נצטרך ליצור אובייקט חדש
    // ... - שפיכה 
    // מעתיקים את כל הנתונים שכבר היו באובייקט 
    // ואח"כ מוסיפים או דורסים את המפתח החדש

    // מערך מתנהל בצורה זהה
    // const [arr, setArr] = useState([])
    // let x = 5
    // let y = 8
    // setArr([...arr, x, y])

    const send = () => {
        // const user = {
        //     username: name,
        //     email,
        //     password
        // }
        let found = login(user)
        console.log(found);
        {found&&swal(`Hello ${found.username}`, 'login successfuly!', 'success')}
    }

    return <>
        <h2>Login:</h2>
        {/* <label htmlFor='UN'>Username:</label><br></br>
        {/* <input id="UN" type="text" placeholder="input username" onBlur={(e) => setName(e.target.value)}></input><br></br> */}
        {/* <input id="UN" type="text" placeholder="input username" onBlur={(e) => setUser({ ...user, username: e.target.value })}></input><br></br> */}
        <label htmlFor='E'>Email:</label><br></br>
        {/* <input id="E" type="email" placeholder="input email" onBlur={(e) => setEmail(e.target.value)}></input><br></br> */}
        <input id="E" type="email" placeholder="input email" onBlur={(e) => setUser({ ...user, email: e.target.value })}></input><br></br>
        <label htmlFor='PW'>Password:</label><br></br>
        {/* <input id="PW" type="password" placeholder="input password" onBlur={(e) => setPassword(e.target.value)}></input><br></br> */}
        <input id="PW" type="password" placeholder="input password" onBlur={(e) => setUser({ ...user, password: e.target.value })}></input><br></br>
        <button onClick={send}>send</button>
    </>
}