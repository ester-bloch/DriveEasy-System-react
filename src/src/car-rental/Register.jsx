import swal from "sweetalert";
import { useSelector, useDispatch } from 'react-redux';
import { setThisUser,addUser } from "./redux/Actions";
import { useNavigate, useNavigation } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faIdCard, faEnvelope, faKey, faCreditCard, faCalendarAlt, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
export const Register = () => {
    const users = useSelector(store => store.users);
    const dispatch = useDispatch();
    const navigate = useNavigation();
    function isStringOnlyDigits(str) {
        return str.match(/^[0-9]{1,20}$/) !=null?true:false;
      }
      function isStringOnlyLetters(str) {
        return  str.match(/^[א-תa-zA-Z]{1,20}$/)!=null?true:false;
      }
    const checkName=(name1)=>{
        if(!name1.length>0) return false;
        return  isStringOnlyLetters(name1);
    }
    const checkId=(id)=>{
        if(id.length<8||id.length>9)
            return false;
        for(let i=0;i<id.length;i++)
            if(id.charAt(i)<'0'||id.charAt(i)>'9')
                return false;
            return true;
    }
    // const checkPassword=(pass)=>{
        
    // }
    const checkPhone=(phone)=>{
        if(phone.length<9||phone.length>10) 
            return false;
        if(phone.charAt(0)!=0)
            return false;
        // בדיקה שכל המחרוזת מספרים
        return isStringOnlyDigits(phone)==true? true:false;
    }
    const checkCredit=(credit)=>{
        return (credit.length==16&&isStringOnlyDigits(credit))==true?true:false;
    }
    const checkValidity=(validity)=>{
        if(!isStringOnlyDigits(validity))
            return false;
        if(validity.length!=4)
            return false; 
        let month=parseInt(validity.substring(0,2));       
        if(month<1||month>12) 
            return false;
        return true;
    }
    const checkCvv=(cvv)=>{
        return cvv.length==3&&isStringOnlyDigits(cvv)==true?true:false;
    }
    const send = (event) => {
        event.preventDefault();
        debugger
        if(event.target[2].value!=event.target[3].value)
        {
            swal('Oopss!', 'password is not correct... 😞😥😔 write the same password', 'error');
            return;
        }
        
        const user = {
            userName: event.target[0].value,
            id: event.target[1].value,
            password: event.target[2].value,
            phone: event.target[4].value,
            creditNum: event.target[5].value,
            validity: event.target[6].value,
            cvv: event.target[7].value,
            code:users.length+1,
            codeTypeUser:'2'
        };
        let u = users.find(x => x.id === user.id);
        if (!u&&checkName(user.userName)&&checkId(user.id)&&user.password.length>3&&checkCredit(user.creditNum)
            &&checkValidity(user.validity)&&checkCvv(user.cvv)) {
            dispatch(addUser(user));
            console.log();
            debugger
            debugger
            swal(`Hello ${user.userName}`, 'register successfully! 😊😄😁😍', 'success');
            dispatch(setThisUser(user));
            navigate('/fleetCars');
        } else if(u) {
            swal('Oopss!', 'Register failed... 😞😥😔 ID has been exists already', 'error');
        }
        else
        swal('Oopss!', 'Register failed... The values ​​are not correct', 'error');
    };

    return (
        <>
            <section>
                <div className="login-container">
                    <h2 id='topic'>הרשמה</h2>
                    <form className="form" onSubmit={(e) => send(e)}>
                        <div className="input-box inputR">
                        {/* <FontAwesomeIcon icon={faUser} className="icon"/> */}
                            <input required type="text" id="userName" />
                            <label htmlFor="userName">שם משתמש</label>
                        </div>

                        <div className="input-box inputR">
                        {/* <FontAwesomeIcon icon={faIdCard} className="icon"/> */}
                        <input required type="text" id="id" />
                            <label htmlFor="id"> תעודת זהות</label>
                        </div>
                        <div className="input-box inputR">
                        {/* <FontAwesomeIcon icon={faKey} className="icon"/><input required type="password" id="pass" /> */}
                            <label htmlFor="pass"> סיסמא</label>
                        </div>
                        <div className="input-box inputR">
                        {/* <FontAwesomeIcon icon={faKey} className="icon"/><input required type="password" id="pass1" /> */}
                            <label htmlFor="pass1">אימות סיסמא</label>
                        </div>
                        <div className="input-box inputR">
                        {/* <FontAwesomeIcon icon={faPhone} className="icon"/><input required type="phone" id="phone" /> */}
                            <label htmlFor="phone"> פלאפון</label>
                        </div>
                        <div className="input-box inputR">
                        {/* <FontAwesomeIcon icon={faCreditCard} className="icon"/><input required type="text" id="credit" /> */}
                            <label htmlFor="credit"> מספר אשראי</label>
                        </div>
                        <div className="input-box inputR">
                        {/* <FontAwesomeIcon icon={faCalendarAlt} className="icon"/><input required type="text" id="validity" /> */}
                            <label htmlFor="validity"> תוקף כרטיס אשראי</label>
                        </div>
                        <div className="input-box inputR">
                        {/* <FontAwesomeIcon icon={faLock} className="icon"/><input required type="number" id="cvv" /> */}
                            <label htmlFor="cvv"> CVV</label>
                        </div>
                        <button type="submit">התחבר</button>
                    </form>

                    <div className="create-account">
                        <a onClick={() => {
                            navigate(`/login`);
                        }}>לקוח רשום? לכניסה</a>
                    </div>
                </div>
            </section>
        </>
    );
};