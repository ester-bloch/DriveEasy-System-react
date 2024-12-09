import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Data-Redux/action";
import { useNavigate } from "react-router";

export const Register = () => {

    //משתנה שנפעיל עליו את הפונקציות של האקשנס
    //הדיספץ' ישלח את הפונקציה לאויר והרדוסר יתפוס אותו ויפעיל את הפונקציה המתאימה
    //const dispatch = useDispatch()
    const cvvRf = useRef()
    const creditCardRf = useRef()
    const passDayRf = useRef()
    const passwordRf = useRef()
    const cellRf = useRef()
    const idRf = useRef()
    const firstnameRf = useRef()
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let [errors, setErrors] = useState({ firstname: '', passDay: '', lastname: '', email: '', id: '', cell: '', cvv: "", password: '', creditCard: '' })
    let userType = useSelector(s => s.userType)
    const validN = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, firstname: 'שדה חובה!' })
        }
        else if (e.target.value.length < 4) {
            setErrors({ ...errors, firstname: 'שם חייב להכיל בין 4 ל 15 תווים' })
        }
        else setErrors({ ...errors, firstname: '' })
    }
    const ValidId = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, id: 'שדה חובה!' })
        }
        else if (e.target.value.length > 9 || e.target.value.length < 9) {
            setErrors({ ...errors, id: 'מספר זהות חייב להכיל  9 תווים' })
        }
        else setErrors({ ...errors, id: '' })
    }
    const validPass = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, email: 'שדה חובה!' })
        }
        // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)) {
        else if (e.target.value.length < 3) {
            setErrors({ ...errors, password: 'סיסמא קצרה מידי!' })
        }
        else setErrors({ ...errors, password: '' })
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
        else if (e.target.value.length < 4) {
            setErrors({ ...errors, password: 'סיסמה חייבת להתחיל באות אנגלית ויכולה להכיל בין 4 ל 14 תווים' })
        }
        else setErrors({ ...errors, password: '' })
    }
    const validCC = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, creditCard: 'שדה חובה!' })
        }
        else if (e.target.value.length < 8) {
            setErrors({ ...errors, creditCard: 'מספר אשראי צריך  להכיל יותר  תווים' })
        }
        else { setErrors({ ...errors, creditCard: '' }) }
    }
    const validPd = (e) => {
        const pw = /^[A-Za-z]+\w{7,14}$/
        if (e.target.value.length === 0) {
            setErrors({ ...errors, passDay: 'שדה חובה!' })
        }
        else if (e.target.value.length < 4) {
            setErrors({ ...errors, passDay: ' תוקף אשראי צריך  להכיל 4  תווים' })
        }
        else setErrors({ ...errors, passDay: '' })
    }
    const validcvv = (e) => {
        const pw = /^[A-Za-z]+\w{7,14}$/
        if (e.target.value.length === 0) {
            setErrors({ ...errors, cvv: 'שדה חובה!' })
        }
        else if (e.target.value.length < 3) {
            setErrors({ ...errors, cvv: ' cvv צריך  להכיל 3  תווים' })
        }
        else setErrors({ ...errors, cvv: '' })
    }

    const send = (event) => {
        //שמחפש לעבור לדף אחר submit ביטול ברירת המחדל של
        event.preventDefault();
        console.log(event);
        const user = {
            name: firstnameRf.current.value,
            id: idRf.current.value,
            phoneNumber: cellRf.current.value
            , password: passwordRf.current.value
            , passDay: passDayRf.current.value
            , cvv: cvvRf.current.value
            , creditCard: creditCardRf.current.value
        }
        console.log(user);
        console.log(errors);



        if (errors.cvv.length == 0 &&
            errors.passDay.length == 0 &&
            errors.creditCard.length == 0 &&
            errors.password.length == 0 &&
            errors.cell.length == 0 &&
            errors.id.length == 0 &&
            errors.firstname.length == 0) {
            console.log("נכנסתי")
            dispatch(addUser(user))
            navigate("../Cars")
        }


    }
    //        { key: 0, name: "Esty", id: 327789616, phoneNumber: "0583212846", password: 123456, 
    //creditCard: 4580160117194037, ppassDay: "4575", cvv: "555", userType: 0 }



    return <>
        <form onSubmit={(e) => send(e)} className="white">
            <label htmlFor={'name'}> name:</label><br></br>
            <input ref={firstnameRf} id={'name'} onChange={(e) => validN(e)}></input>
            {errors.firstname !== '' && <p>{errors.firstname}</p>}
            <br></br>
            <label htmlFor={'id'}>id:</label><br></br>
            <input ref={idRf} id={'lastname'} onChange={(e) => ValidId(e)}></input>
            {errors.id !== '' && <p>{errors.id}</p>}
            <br></br>
            <label htmlFor={'cell'}>phoneNumber:</label><br></br>
            <input ref={cellRf} id={'cell'} onChange={(e) => validCell(e)}></input>
            {errors.cell !== '' && <p>{errors.cell}</p>}
            <br></br>
            <label htmlFor={'password'}>password:</label><br></br>
            <input ref={passwordRf} id={'password'} type={'password'} onChange={(e) => validPW(e)}></input>
            {errors.password !== '' && <p>{errors.password}</p>}
            <br></br>
            <label htmlFor={'creditCard'}>creditCard:</label><br></br>
            <input ref={creditCardRf} id={'creditCard'} type={'creditCard'} onChange={(e) => validCC(e)}></input>
            {errors.creditCard !== '' && <p>{errors.creditCard}</p>}
            <br></br>
            <label htmlFor={'passDay'}>passDay:</label><br></br>
            <input ref={passDayRf} id={'passDay'} type={'passDay'} onChange={(e) => validPd(e)}></input>
            {errors.passDay !== '' && <p>{errors.passDay}</p>}
            <br></br>

            <label htmlFor={'cvv'}>cvv:</label><br></br>
            <input ref={cvvRf} id={'cvv'} type={'cvv'} onChange={(e) => validcvv(e)}></input>
            {errors.cvv !== '' && <p>{errors.cvv}</p>}
            <br></br><br></br>
            <input type={'submit'} value={'sign up'} onClick={send}></input><br></br>
        </form>
    </>
}