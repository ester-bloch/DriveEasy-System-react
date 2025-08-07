
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import swal from "sweetalert"
import { User } from "./User"

export const Home = () => {
    
    const navigate = useNavigate()
   
    function login() {
        navigate("../Login")
    }
    function register() {
        navigate("../Register")
    }
    return <>
        <User></User><br></br>
        <img src={process.env.PUBLIC_URL + '/images/' + "כניסה" + '.png'}></img>
        <button onClick={login}>לכניסה</button>
        <button onClick={register}>להרשמה</button>
       
    </>
}

