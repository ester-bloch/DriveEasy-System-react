import { useState } from 'react'
import pic from './Girl Davening 2.jpg'

export const Daven = () => {

    // let num = 0;
    // useState
    // react hooks
    // useState - 

    // שליפה מאובייקט ג'סון לפי שמות המפתחות
    // const { name, email } = props

    // שליפה ממערך לפי מיקום
    // const arr = [1, 2, 3, 4]
    // const [x, y] = arr
    // x => 1, y => 2

    // הגדרת מערך
    // האיבר הראשון - המשתנה בעצמו
    // האיבר השני - פונקציה שאחראית על שינוי המשתנה
    // אין אפשרות לגשת למשתנה בצורה ישירה ולשנות אותו
    // אלא אך ורק דרך שימוש בפונקציה
    // שמקבלת ערך חדש להציב במשתנה
    // בתוך הסוגריים העגולות - ניתן להציב ערך התחלתי למשתנה
    const [num, setNum] = useState(1)

    const incNum = () => {
        // num++
        setNum(num + 1)
        // num = 5
        // setNum(5)
        console.log(num);
    }

    return <>
        <div style={{ float: 'left', marginLeft: '2rem' }}>
            <h1>{num}</h1>
            {/* camelCase - אות ראשונה במילה שניה באות גדולה */}
            {/* קריאה לפונקציה ללא סוגריים */}
            {/* קריאה עם סוגריים מפעילה בעת טעינה */}
            <button onClick={incNum}>inc num</button>
        </div>
        <img src={pic} width={'200vw'} height={'auto'} style={{ float: 'right', marginRight: '5rem' }}></img>
    </>
}