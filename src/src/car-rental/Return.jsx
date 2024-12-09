import { useEffect, useRef, useState } from 'react';
import './Return.css';
import {  useDispatch, useSelector } from 'react-redux';
import { addReturn, setAvailable, setCar  } from './redux/Actions';
import swal from 'sweetalert';
import { CreditCard } from './creditCard';
import Swal from 'sweetalert';

export const Return = () => {
    const dispatch = useDispatch();
    let numRentRef = useRef();
    let cityRef = useRef();
    let streetRef = useRef();
    let surplusRef = useRef();
    const [flag, setFlag] = useState(false);
    const [flag1, setFlag1] = useState(false);
    const [flagBig, setFlagBig] = useState(true);
    const creditRef=useRef();
    const [car1, setCar1] = useState();
    const store = useSelector(x => x);
    let rent = null;
    let car;
    let price1 = 0;
    let thisUser=useSelector(store=>store.thisUser)
    useEffect(() => {
        //בדיקה האם הכתובת מכילה את ה#RETURN
        //אם כן, מבצעת גלילה ללמטה.
        if (flag) {
            const element = document.getElementById('return');
            debugger
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);
    const scrollToCredit=()=>{
        let credit=document.getElementById('creditComponent')
        debugger
        if (credit) {
            credit.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const price = () => {
        rent = store.Rents.find(x => x.rentCode == numRentRef.current.value);
        let return1 = store.Returns.find(x => x.rentCode == rent?.rentCode);
        car=store.cars.find(x=>x.CarCode==rent?.CarCode)
        if (!rent || return1||car.Available) {
            swal('oops', 'מספר הזמנה לא תקין', 'error');
            return false;
        }
        //car = (store.cars.find(x => x.CarCode == rent.CarCode));
        setCar1(car);
        const start = new Date(rent.rentDate);
        const end = new Date();
        const timeDifference = end - start;
        let hourDif = timeDifference / 1000 / 60 / 60 / 24;
        hourDif = Math.abs(Math.round(hourDif)) * 24;
        hourDif += end.getHours() - rent.rentHour;
        hourDif *= car.PricePerHour;
        let totalPrice = hourDif;
        let litters = car.LitterSurplus - parseInt(surplusRef.current.value, 10);
        const pricePerLiter = store.driveType.find(x => x.id == car.codeDriveType)?.PricePerLiter;
        totalPrice += litters * pricePerLiter;

        return totalPrice;
    }

    const Save = () => {
        // setFlag(false);
        // setFlag1(false)
        setFlagBig(false);
        let newReturn = { code: ((store.Returns.length + 1) * 1000) + "", rentCode: rent?.rentCode, ReturnDate: new Date(), ReturnHour: new Date().getHours(), surplus: 0, totalPay: price1, shoolam: true }
        dispatch(addReturn(newReturn));
        dispatch(setAvailable(car ? car : car1));
        // dispatch(setCity(car ? car : car1, cityRef.current.value));
        // dispatch(setStreet(car ? car : car1, streetRef.current.value));
        dispatch(setCar(car ? car : car1,'City', cityRef.current.value));
        dispatch(setCar(car ? car : car1,'Street', streetRef.current.value));
        Swal.fire("הפרטים נשמרו", "תודה על שימושך בשירותינו...!", "success");
    }

    const toPay = () => {
        // const calculatedPrice = price();
        let userCredit=thisUser.creditNum;
        if (numRentRef.current.value && cityRef.current.value && streetRef.current.value && surplusRef.current.value && (price()!=false||price()+""=="0")) {
            Swal.fire({
                title: "הסכום לתשלום: " + price(),
                text: "האם באשרי שנגמר ב"+userCredit.substring(userCredit.length-4,userCredit.length)+", או באשראי חדש",
                showDenyButton: true,
                confirmButtonText: "חדש",
                denyButtonText: `השמור`
            }).then((result) => {
                if (result.isConfirmed) {
                    debugger
                    setFlag(true);
                    setFlag1(true);
                    scrollToCredit();
                } else if (result.isDenied) {
                    Save();

                }
            })
        } else if (price() != false) {
            swal('oops', 'נא מלא את כל השדות', 'error');
        }
    }
    
    return (<>
        {flagBig && <div>
            <div id='returnDiv' hidden={flag1}>
                <input className='inputReturn' type="text" placeholder="קוד השאלה" ref={numRentRef}></input>
                <input className='inputReturn' type="text" placeholder="מיקומך: עיר" ref={cityRef}></input>
                <input className='inputReturn' type="text" placeholder="מיקומך: רחוב" ref={streetRef}></input>
                <input className='inputReturn' type="number" placeholder="יתרת דלק נוכחית" ref={surplusRef}></input>
                <div className="aaa">
                    <button className='button bbb' onClick={toPay}>לתשלום</button>
                </div>
            </div>
            <div hidden={!flag} >
                <CreditCard save={Save} ref={creditRef} ></CreditCard>
                {/* <button id={'submitCredit'}  onClick={Save}>
                    Submit
                </button> */}

            </div>
            
        </div>}
        <div id="creditComponent"></div></>
    );
}
