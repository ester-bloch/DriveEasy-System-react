import axios from "axios"
import { useEffect, useState } from "react"
import { useGetAxios } from "./useGetAxios"

export const Home = () => {

    // העדפנו להוציא להוקס בשביל להרוויח שימוש חוזר וקוד קצר יותר בקומפוננטה
    // const [list, setList] = useState([])
    // const [error, setError] = useState()

    // useEffect(() => {
    //     axios.get(`https://localhost:7256/api/Person`)
    //         .then(x => {
    //             setList(x.data)
    //         })
    //         .catch(err => {
    //             setError(err.message);
    //         })
    // }, [])

    // קריאת שם למפתח שנשלף מתוך אובייקט ג'סון
    const { data: list, error } = useGetAxios(`https://localhost:7256/api/Person`)

    // שגיאה - לא ניתן להפעיל הוקס מתוך פונקציה שאיננה קומפוננטה 
    // const func = () => {
    //     let x = useGetAxios(`https://localhost:7256/api/Person`)
    // }

    return <>
        {error && <h1>{error}</h1>}
        {list && list.map(x => <p>{x.name}</p>)}
    </>
}