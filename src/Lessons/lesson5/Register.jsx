// login - signin
// register - signup

import { useState } from "react"
import swal from "sweetalert"

export const Register = ({ register }) => {

    const [errors, setErrors] = useState({})

    const validName = (value) => {
        if (value.length < 2) {
            setErrors({ ...errors, username: 'name is too shorted!' })
        } else {
            setErrors({ ...errors, username: '' })
        }
    }
    const validEmail = (value) => {
        // /regex/i.test(value)
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setErrors({ ...errors, email: 'invalid email!' })
        } else {
            setErrors({ ...errors, email: '' })
        }
    }
    const validPassword = (value) => {
        const regex =  /^[A-Za-z]+\w{7,14}$/
        // value.match(/regex/)
        if (!value.match(regex)) {
            setErrors({ ...errors, password: 'invalid password!' })
        }
        else {
            setErrors({ ...errors, password: '' })
        }
    }

    const send = (event) => {
        // אירוע של סבמיט - מחכה לקבל ניתוב לעבור אליו
        // preventDefault בשביל לנטרל את ברירת במחדל נבטל אותה באמצעות 
        event.preventDefault()
        console.log(event);
        if (errors.username == '' && errors.email == '' && errors.password == '') {
            const user = {
                username: event.target[0].value,
                email: event.target[1].value,
                password: event.target[2].value
            }
            console.log(user);
            register(user)
        }
        else {
            swal('Oopps!', 'invalid values', 'error')
        }
    }

    return <>
        <h2>Register:</h2>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor='un'>Username:</label><br></br>
            <input id="un" type="text" placeholder="input username" onChange={(e) => validName(e.target.value)}></input><br></br>
            <p>{errors.username}</p>
            <label htmlFor='email'>Email:</label><br></br>
            <input id="email" type="email" placeholder="input email" onChange={(e) => validEmail(e.target.value)}></input><br></br>
            <p>{errors.email}</p>
            <label htmlFor='pw'>Password:</label><br></br>
            <input id="pw" type="password" placeholder="input password" onChange={(e) => validPassword(e.target.value)}></input><br></br>
            <p>{errors.password}</p>
            <input type="submit" value={'send'}></input>
        </form>
    </>
}