import { NavLink, Outlet } from "react-router-dom"

export const Stam = () => {
    return <>
        <h1>Stam!!!!!!!!!!!!!!!!!!!!!!.........................</h1>
        <NavLink to="other">other stam</NavLink>
        <Outlet></Outlet>
    </>
}