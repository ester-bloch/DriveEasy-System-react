import { useEffect, useState } from "react"

export const Comp = () => {

    const [arr, setArr] = useState([
        'eyes',
        'nose',
        'shoulders',
        'fingers',
        'legs',
        'feet',
        'arms',
        'hands',
        'ears',
        'mouth'
    ])
    const [num, setNum] = useState(0)

    const add = (value) => {
        // arr.push(value);
        // console.log(arr);
        setArr([...arr, value])
    }

    // מחזור החיים של הקומפוננטה - life cycle
    // בעת טעינה של הקומפוננטה
    useEffect(() => {
        // מה שיהיה כתוב כאן יקרה בעת טעינה של הקומפוננטה
        // UseState משתנים של הקומפוננטה מסוג useEffect אם נכניס בתוך המערך של 
        // הקוד יקרה גם בעת שינוי של כל אחד מהמשתנים
        document.title = `I have ${arr.length} organs`

        // בעת דריסה
        // flag הקוד יקרה ברגע שהקומפוננטה תידרס - ע"י ניתוב או ע"י 
        // חובה להחזיר פוקנציה אנונימית 
        // פונקציה דומה useEffect יש לשים לב מסיבה זו לא לכתוב ב
        return () => {
            document.title = `React App`
        }
    },
        // בעת שינוי של פרמטר - useState
        // שוב useEffect כאן נכתוב כל פרמטר שנרצה שיפעיל את ה 
        [arr])

    // useState מותר לכתוב כמה פונקציות של 
    useEffect(() => {
        if (num != 0) {
            let r = Math.floor(Math.random() * 255)
            let g = Math.floor(Math.random() * 255)
            let b = Math.floor(Math.random() * 255)

            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        }

    }, [num])

    return <>
        <h1>Thank you Hashem for my:</h1>
        {arr.map((x, i) => <p key={i}>{x}</p>)}
        <input placeholder="input organ" onBlur={(e) => add(e.target.value)}></input>
        <br></br>
        <button onClick={(e) => setNum(num + 1)}>inc num</button>
    </>
}