import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import swal from "sweetalert"
import { setIsManager } from "../redux/action"

export const Login = () => {
    const nameRef = useRef()
    const hRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const manager = useSelector(s => s.managerDetails)
    const send = () => {
        console.log(manager)
        const user = {
            name: nameRef.current.value
            , password: passRef.current.value
        }
        console.log(manager)
        console.log(user)

        if (user.name == manager.name && user.password == manager.password) {
             swal(`Hello manager ${user.name} 👩‍💼`, 'login successfuly!', 'success') 
             dispatch(setIsManager(true))
              navigate('../Students')

            }
        else{
            swal(`Hello student ${user.name}`, 'Please don\'t try to be a manager☹️ !', 'error')
        }
    }
    return <>
        <h2 ref={hRef}>Login:</h2>
        <label htmlFor='N'>Name:</label><br></br>
        <input id="N" type="name" ref={nameRef} placeholder="input name"></input><br></br>
        <label htmlFor='PW'>Password:</label><br></br>
        <input id="PW" type="password" ref={passRef} placeholder="input password"></input><br></br>
        <br></br><button onClick={send}>send</button>
    </>
}

