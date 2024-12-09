import { Link, NavLink } from 'react-router-dom'
import './style.css'

export const Nav = () => {
    return <>
        <div className="nav">
            {/* ניגש לשרת לשלוף את הדף המבוקש */}
            {/* <a href="/*home" className="link">Home</a> */}
            {/* <a href="/login" className="link">Login</a> */}
            {/* <a href="/welcome" className="link">Welcome</a> */}

            {/* Link - ריקאט טוענת את כל הקומפוננטות על מחשב המשתמש */}
            {/* תגית הלינק לא ניגשת לשרת אלא טוענת את הקומפוננטה הרצויה לוקאלית */}
            {/* <Link to="/home" className="link">Home</Link> */}
            {/* <Link to="/login" className="link">Login</Link> */}
            {/* <Link to="/welcome" className="link">Welcome</Link> */}

            {/* NavLink - תגית דומה ללינק הרגיל */}
            {/* active אם יש קלאס עיצובי בשם */}
            {/* ריאקט מחוללת את העיצוב על הלינק הפעיל */}
            <NavLink to="/home" className="link">Home</NavLink>
            <NavLink to="/login" className="link">Login</NavLink>
            {/* <NavLink to="/welcome" className="link">Welcome</NavLink> */}
        </div>
    </>
}