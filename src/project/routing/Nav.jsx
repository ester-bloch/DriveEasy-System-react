import { NavLink } from "react-router-dom"
import './Style.css'
import { useSelector } from "react-redux"
export const Nav = () => {
    let currentUser = useSelector(s => s.currentUser)
    return <>
        <div className="Nav">
            <NavLink to="/Home" className="link" >Home</NavLink>
            {/*currentUser.name != undefined &&*/ <NavLink to="/Cars" className="link" >Cars</NavLink>}
            <NavLink to="Login" className="link" >Login</NavLink>
            <NavLink to="/Register" className="link" >Register</NavLink>
        </div>
    </>
}