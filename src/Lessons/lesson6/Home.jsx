import { Outlet, useNavigate } from "react-router"

export const Home = () => {

    const nav = useNavigate()

    const add = () => {
        // ניתוב לבן - ללא סלש
        nav('stam')
    }

    return <>
        <h1>Home</h1>
        <button onClick={add}>add stam</button>
        {/* Outlet - תגית שטוענת בפועל את הבן */}
        {/* היכן שנטען את הקומםוננטה אאוטלט - שם הבן יטען */}
        <Outlet></Outlet>
        <Outlet></Outlet>
    </>
}