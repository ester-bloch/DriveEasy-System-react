import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import Swal from "sweetalert2"

export const CreditCardDetails2 = () => {
    const [errors, setErrors] = useState([])
    const cvvRf = useRef()
    const creditCardRf = useRef()
    const passDayRf = useRef()
    const TzRf = useRef()
    const navigate = useNavigate()
    const validCC = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, creditCard: 'שדה חובה!' })
        }
        else if (e.target.value.length < 8) {
            setErrors({ ...errors, creditCard: 'מספר אשראי צריך  להכיל יותר  תווים' })
        }
        else { setErrors({ ...errors, creditCard: '' }) }
    }
    const validTz = (e) => {
        if (e.target.value.length === 0) {
            setErrors({ ...errors, creditCard: 'שדה חובה!' })
        }
        else if (e.target.value.length < 9) {
            setErrors({ ...errors, creditCard: 'מספר זהות שגוי' })
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
    const send = () => {
        if (errors.cvv.length == 0 &&
            errors.passDay.length == 0 &&
            errors.creditCard.length == 0 ) {
            Swal.fire('שילמת  בהצלחה', `קוד אישור הוא: ${Math.floor(Math.random() * 8888888)} קבלה נשלחה אלייך למייל`, 'success');
            navigate(`../../Cars`)
        }
    }
    return <>
        <label htmlFor={'creditCard'}>creditCard:</label><br></br>
        <input ref={creditCardRf} id={'creditCard'} type={'creditCard'} onChange={(e) => validCC(e)}></input>
        {errors.creditCard&&errors.creditCard !== '' && <p>{errors.creditCard}</p>}
        <br></br>
        <label htmlFor={'Tz'}>מספר זהות:</label><br></br>
        <input ref={TzRf} id={'Tz'} type={'Tz'} onChange={(e) => validTz(e)}></input>
        {errors.Tz&&errors.Tz !== '' && <p>{errors.Tz}</p>}
        <br></br>
        <label htmlFor={'passDay'}>passDay:</label><br></br>
        <input ref={passDayRf} id={'passDay'} type={'passDay'} onChange={(e) => validPd(e)}></input>
        {errors.passDay&&errors.passDay !== '' && <p>{errors.passDay}</p>}
        <br></br>

        <label htmlFor={'cvv'}>cvv:</label><br></br>
        <input ref={cvvRf} id={'cvv'} type={'cvv'} onChange={(e) => validcvv(e)}></input>
        {errors.cvv &&errors.cvv !== '' && <p>{errors.cvv}</p>}
        <br></br><br></br>
        <button id="submit" value={'sign up'} onClick={send}>לאישור</button><br></br>

    </>
}