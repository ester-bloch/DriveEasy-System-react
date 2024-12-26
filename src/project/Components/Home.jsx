
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import swal from "sweetalert"
import { User } from "./User"

export const Home = () => {
    // const nameRef = useRef()
    // const hRef = useRef()
    // const passRef = useRef()
    const navigate = useNavigate()
    // const dispatch=useDispatch()
    // const manager = useSelector(s => s.managerDetails)
    // const send = () => {
    //     console.log(manager)
    //     const user = {
    //         name: nameRef.current.value
    //         , password: passRef.current.value
    //     }
    //     console.log(manager)
    //     console.log(user)

    //     if (user.name == manager.name && user.password == manager.password) {
    //          swal(`Hello manager ${user.name} 👩‍💼`, 'login successfuly!', 'success') 
    //         // dispatch(setIsManager(true))
    //           navigate('../Students')

    //         }
    //     else{
    //         swal(`Hello student ${user.name}`, 'Please don\'t try to be a manager☹️ !', 'error')
    //     }
    // }
    function login() {
        navigate("../Login")
    }
    function register() {
        navigate("../Register")
    }
    return <>
        <User></User><br></br>
        <p>i am home, place of picture</p>
        <button onClick={login}>לכניסה</button>
       
        <button onClick={register}>להרשמה</button>
        {/* <h2 ref={hRef}>Login:</h2>
        <label htmlFor='N'>Name:</label><br></br>
        <input id="N" type="name" ref={nameRef} placeholder="input name"></input><br></br>
        <label htmlFor='PW'>Password:</label><br></br>
        <input id="PW" type="password" ref={passRef} placeholder="input password"></input><br></br>
        <br></br><button onClick={send}>send</button> */}
    </>
}

