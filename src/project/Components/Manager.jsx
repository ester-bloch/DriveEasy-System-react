import { Button } from "bootstrap"
import { Outlet, useNavigate } from "react-router"

export const Manager = () => {
    const navigate = useNavigate()
    const showEngine = () => {
        navigate("Engine")
    }
    const showModel = () => {
        navigate("Model")
    }
    const showCars = () => {
        navigate("Cars")
    }
    const showLends = () => {
        navigate("Lends")
    }
    return <>
        <button className="smallButton" onClick={showEngine}>ערוך סוגי הנעה</button>
        <button className="smallButton" onClick={showModel}>ערוך דגמים</button>
        <button className="smallButton" onClick={showCars}>ערוך רכבים</button>
        <button className="smallButton" onClick={showLends}>צפייה בכל ההשאלות</button>
        <Outlet></Outlet>
    </>
}