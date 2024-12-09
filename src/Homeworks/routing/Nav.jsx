import { NavLink } from "react-router-dom"
import './Style.css'
export const Nav=()=>{
    return<>
    <div className="Nav">
        <NavLink to="/Students" className="link" >Students</NavLink>
        <NavLink to="/Login" className="link" >Login</NavLink>
    </div>
    </>
}