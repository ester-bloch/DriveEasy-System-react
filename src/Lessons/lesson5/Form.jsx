import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Form = () => {

    //משתנה שנפעיל עליו את הפונקציות של האקשנס
    //הדיספץ' ישלח את הפונקציה לאויר והרדוסר יתפוס אותו ויפעיל את הפונקציה המתאימה
    //const dispatch = useDispatch()

    const [errors, setErrors] = useState({ firstname: '', lastname: '', email: '', cell: '', password: '' })

    const validFN = (e) => {
        const firstname = /^\w{5,15}$/
        if (e.target.value.length === 0) {
            setErrors({ ...errors, firstname: 'שדה חובה!' })
        }
        else if (!e.target.value.match(firstname)) {
            setErrors({ ...errors, firstname: 'שם חייב להכיל בין 5 ל 15 תווים' })
        }
        else setErrors({ ...errors, firstname: '' })
    }

    const validLN = (e) => {
        const lastname = /^\w{5,15}$/
        if (e.target.value.length === 0) {
            setErrors({ ...errors, lastname: 'שדה חובה!' })
        }
        else if (!e.target.value.match(lastname)) {
            setErrors({ ...errors, lastname: 'שם חייב להכיל בין 5 ל 15 תווים' })
        }
        else setErrors({ ...errors, lastname: '' })
    }

    const validEmail = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, email: 'שדה חובה!' })
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
            setErrors({ ...errors, email: 'כתובת האימייל אינה חוקית!' })
        }
        else setErrors({ ...errors, email: '' })
    }

    const validCell = (e) => {
        const cell = /^[0]+\w{8,9}$/
        if (!e.target.value.match(cell)) {
            setErrors({ ...errors, cell: 'מספר טלפון אינו תקין!' })
        }
        else setErrors({ ...errors, cell: '' })
    }

    const validPW = (e) => {
        const pw = /^[A-Za-z]+\w{7,14}$/
        if (e.target.value.length === 0) {
            setErrors({ ...errors, password: 'שדה חובה!' })
        }
        else if (!e.target.value.match(pw)) {
            setErrors({ ...errors, password: 'סיסמה חייבת להתחיל באות אנגלית ויכולה להכיל בין 7 ל 14 תווים' })
        }
        else setErrors({ ...errors, password: '' })
    }

    const send = (event) => {
        //שמחפש לעבור לדף אחר submit ביטול ברירת המחדל של
        event.preventDefault();
        console.log(event);
        const user = {
         //   id: id + 1,
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            eMail: event.target[2].value,
            cell: event.target[3].value,
            password: event.target[4].value
        }
        console.log(user);
        // //הפעלת האקשן באמצעות הדיספץ
        // dispatch(addUser(user))
    }

    return <>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor={'firstname'}>first name:</label><br></br>
            <input id={'firstname'} onChange={(e) => validFN(e)}></input>
            {errors.firstname !== '' && <p>{errors.firstname}</p>}
            <br></br>
            <label htmlFor={'last name'}>last name:</label><br></br>
            <input id={'lastname'} onChange={(e) => validLN(e)}></input>
            {errors.lastname !== '' && <p>{errors.lastname}</p>}
            <br></br>
            <label htmlFor={'email'}>email:</label><br></br>
            <input id={'email'} type={'email'} onChange={(e) => validEmail(e)}></input>
            {errors.email !== '' && <p>{errors.email}</p>}
            <br></br>
            <label htmlFor={'cell'}>cell:</label><br></br>
            <input id={'cell'} onChange={(e) => validCell(e)}></input>
            {errors.cell !== '' && <p>{errors.cell}</p>}
            <br></br>
            <label htmlFor={'password'}>password:</label><br></br>
            <input id={'password'} type={'password'} onChange={(e) => validPW(e)}></input>
            {errors.password !== '' && <p>{errors.password}</p>}
            <br></br>
            <input type={'submit'} value={'sign up'}></input><br></br>
        </form>
    </>
}