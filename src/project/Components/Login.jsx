import { useNavigate } from "react-router"
import { LoginThisUser } from "../Data-Redux/action";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import swal from "sweetalert"
import { getThisUser } from "../Data-Redux/api";

export const Login = () => {
    const [flag, setFlag] = useState(false)
    const nameRef = useRef()
    const hRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // עבור שימוש בסטייט
    //let users = useSelector(store => store.users)

    function Register() {
        navigate('../Register')
    }
    const send = () => {
        let ok = false
        let user = {
            name: nameRef.current.value
            , password: passRef.current.value
        }
        //עבור שימוש בסטייט
        //let find = users.find(element => element.name == user.name && element.password == user.password)
        let find = getThisUser(user.name, user.password).
            then(find => {
                if (find.data != null && find.data != undefined && find.data != "") {
                    user = find.data
                    ok = true
                }
                console.log(find)
                console.log(find.data)
                { find && dispatch(LoginThisUser(find.data)) }
                if (ok && user.userTypesId == 1) {
                    swal(`Hello manager ${user.name} 👩‍💼`, 'login successfuly!', 'success')
                    navigate("../Cars")
                    return
                }
                else if (ok) {
                    swal(`Hello user ${user.name}`, 'Welcome! Happy to see You😆😃!', 'success')
                    navigate("../Cars")
                    return
                }
                else {
                    swal(`Hello  ${user.name}`, 'You are not a user of us', 'error')
                    setFlag(true)
                    return
                }
            })
    }


    return <>
        <div className="white">
            <h2 ref={hRef}>Login:</h2>
            <label htmlFor='N'>Name:</label><br></br>
            <input id="N" type="name" ref={nameRef} placeholder="input name"></input><br></br>
            <label htmlFor='PW'>Password:</label><br></br>
            <input id="PW" type="password" ref={passRef} placeholder="input password"></input><br></br>
            <br></br><button onClick={send}>send</button><br></br>
            {flag && <button onClick={Register}>להרשמה</button>}
        </div>
    </>
}

