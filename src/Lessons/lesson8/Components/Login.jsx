import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../redux/Actions"
import swal from 'sweetalert'
import { useNavigate } from "react-router"

export const Login = () => {

    let dispatch = useDispatch()
    let nav = useNavigate()

    const [errors, setErrors] = useState({ email: '', password: '' })

    const validEmail = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, email: 'שדה חובה!' })
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
            setErrors({ ...errors, email: 'כתובת האימייל אינה חוקית!' })
        }
        else setErrors({ ...errors, email: '' })
    }

    const validPW = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, password: 'שדה חובה!' })
        }
        else if (e.target.value.length < 3) {
            setErrors({ ...errors, password: 'סיסמה קצרה מידי!' })
        }
        else setErrors({ ...errors, password: '' })
    }

    let users = useSelector(x => x.users)

    const send = (event) => {
        //שמחפש לעבור לדף אחר submit ביטול ברירת המחדל של
        event.preventDefault();
        const user = {
            email: event.target[0].value,
            password: event.target[1].value,
        }

        let u = users.find(x => x.email == user.email && x.password == user.password)
        if (u) {
            //הפעלת האקשן באמצעות הדיספץ
            dispatch(setCurrentUser(u))
            nav('/home')
        }
        else {
            swal("Oopps!", 'login failed! go to registeration', 'error')
        }

    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'email'}>email:</label><br></br>
            <input id={'email'} type={'email'} onChange={(e) => validEmail(e)}></input>
            {errors.email !== '' && <p>{errors.email}</p>}
            <br></br>
            <label htmlFor={'password'}>password:</label><br></br>
            <input id={'password'} type={'password'} onChange={(e) => validPW(e)}></input>
            {errors.password !== '' && <p>{errors.password}</p>}
            <br></br>
            <input type={'submit'} value={'login'}></input><br></br>
        </form>
    </>
}