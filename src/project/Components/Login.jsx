import { Outlet, useNavigate, useNavigationType } from "react-router"
import { Register } from "./Register"
import { LOGINThidUser } from "../Data-Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import FolderList from "../OutsiderConps/List";
import SwitchListSecondary from "../OutsiderConps/List1";
import PinnedSubheaderList from "../OutsiderConps/List2";
import swal from "sweetalert"

export const Login = () => {
    const [flag, setFlag] = useState(false)
    const nameRef = useRef()
    const hRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let users = useSelector(store => store.users)

    function Register() {
        navigate('../Register')
    }
    const send = () => {

        let user = {
            name: nameRef.current.value
            , password: passRef.current.value
        }
        let ok = false;
        let find = users.find(element => element.name == user.name && element.password == user.password)

        if (find != null) {
            ok = true;
            user = find
        }
        console.log(find)
        { find && dispatch(LOGINThidUser(user)) }

        if (find && user.userType == 0) {
            swal(`Hello manager ${user.name} 👩‍💼`, 'login successfuly!', 'success')
            navigate("../Cars")
            return
        }
        else if (find) {
            swal(`Hello user ${user.name}`, 'Welcome! Happy to see You😆😃!', 'success')
            navigate("../Cars")
            return
        }
        else {
            swal(`Hello  ${user.name}`, 'You are not a user of us', 'error')
            setFlag(true)
            return
        }
    }


    return <>
        <div className="white">
            <h2  ref={hRef}>Login:</h2>
            <label   htmlFor='N'>Name:</label><br></br>
            <input   id="N" type="name" ref={nameRef} placeholder="input name"></input><br></br>
            <label htmlFor='PW'>Password:</label><br></br>
            <input id="PW" type="password" ref={passRef} placeholder="input password"></input><br></br>
            <br></br><button onClick={send}>send</button><br></br>
            {flag && <button onClick={Register}>להרשמה</button>}
        </div>
    </>
}

