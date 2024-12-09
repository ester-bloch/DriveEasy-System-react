import { useRef } from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { setThisUser } from './redux/Actions';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faIdCard, faEnvelope, faKey, faCreditCard, faCalendarAlt, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Login = () => {
    const dispatcher = useDispatch();
    const [user, setUser] = useState(false);
    const [errors, setErrors] = useState({})
    const managerRef = useRef(null);
    const user1Ref = useRef(null);
    const navigate = useNavigate();
    // const users = useSelector(store => store.users);
    // let typeU=useSelector(store=>store.typeUsers)
    let store = useSelector(store => store); 
    const checkID = (value) => {
        let idRegex = /^[0-9]{9}$/;
        if (!idRegex.test(value)) {
            setErrors( ({ ...errors, id: 'ת.ז. לא תקינה!' }));
        } else {
            setErrors( ({ ...errors, id: '' }));
        }
    };
    

    const checkPass = value => {
        if (value.length < 4) {
            setErrors({ ...errors, password: 'סיסמה קצרה מידי' })
        }
        else if (value.length > 16) {
            setErrors({ ...errors, password: 'סיסמה ארוכה מידי' })
        }
        else {
            setErrors({ ...errors, password: '' })
        }
    }

    const userManager = (type) => {
        if (type === 'manager') {
            managerRef.current.style.background = 'linear-gradient(-90deg,rgb(37, 17, 147),rgb(13, 13, 14))';
            managerRef.current.style.color = 'white';
            user1Ref.current.style.background = 'transparent';
            user1Ref.current.style.color = 'black';
        } else {
            user1Ref.current.style.background = 'linear-gradient(-90deg,rgb(37, 17, 147),rgb(13, 13, 14))';
            user1Ref.current.style.color = 'white';
            managerRef.current.style.background = 'transparent';
            managerRef.current.style.color = 'black';
        }
        setUser(type == 'user');
    };

    const send = (e) => {
        e.preventDefault();
        const id = e.target[0].value;
        const password = e.target[1].value;
        let ManagerC = store.typeUsers.filter(x => x.desc == "manager")[0].id;
        let userC = store.typeUsers.filter(x => x.desc == "user")[0].id;
        let a = store.users.find(x => x.id == id && x.password == password && ((user && x.codeTypeUser == userC) || (!user && x.codeTypeUser == ManagerC)));
        if (a) {
            console.log(a);
            swal(`היי ${a.userName}!`, 'ברוכ/ה הבא/ה!!! 😊😄😁😍', 'success');
            dispatcher(setThisUser(store.users.filter(x => x.id == id)[0]));
            navigate('/fleetCars');
        } else {
            swal('Oopss!', 'ההתחברות נכשלה... 😞😥😔', 'error');
            if(!store.users.find(x => x.id == id))
                navigate('/register');
        }
    };
    return (
        <section id='loginDIv'>
            <div className="login-container">
                
                <h2 id='topic'>התחברות</h2>
                <div className="login_register">
                    <a className="login" onClick={() => userManager('manager')} ref={managerRef}>מנהל</a>
                    <a className="register" onClick={() => userManager('user')} ref={user1Ref}>לקוח</a>
                </div>
                <form className="form" onSubmit={(e) => send(e)}>
                    <div className="input-box">
                        {/* <FontAwesomeIcon icon={faUser} className="icon" /> */}
                        <input required type="text" id="email"   onChange={(e) => checkID(e.target.value)}/>
                        <label htmlFor="email">תעודת זהות</label>
                        <p style={{ color: 'red' }}>{errors.id}</p>
                    </div>

                    <div className="input-box">
                        {/* <FontAwesomeIcon icon={faKey} className="icon" /> */}
                        <input required type="password" id='pass'   onChange={(e) => checkPass(e.target.value)} />
                        <label htmlFor="pass"> סיסמא</label>
                        <p style={{ color: 'red' }}>{errors.password}</p>
                    </div>

                    <div className="remember-forgot">
                        {/* <label>
                            <input type="checkbox" /> Recordarme
                        </label> */}

                        <a href="#">שכחת סיסמא?</a>
                    </div>

                    <button type="submit">התחבר</button>
                </form>

                <div className="create-account">
                    <a onClick={() => {
                        navigate(`/Register`)
                    }}>אינך רשום במערכת? הרשם כאן...</a>
                </div>
            </div>
        </section>

    )
}
