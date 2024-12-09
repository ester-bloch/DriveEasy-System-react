import React, { useEffect, useState } from 'react';
import './Rent.css';
import { useDispatch, useSelector } from "react-redux";
import { setAvailable } from "./redux/Actions";
import swal from "sweetalert";
import { addRent } from "./redux/Actions";
export const Rent = (props) => {
    const dispatch=useDispatch();
  const { car,setFlag } = props;
//   const {car}=props;
  const store=useSelector(x=>x);
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });

  const [currentTime, setCurrentTime] = useState('');
  const rent1=()=>{debugger
    console.log(store.Rents);
    const newRent={rentCode: ""+(200+store.Rents.length+1), userCode:store.thisUser.code, CarCode: car.CarCode, rentDate: new Date(), rentHour: currentTime.substring(0,2) };
    dispatch(addRent(newRent));
    dispatch(setAvailable(car));    
    swal(`ההשכרה בוצעה`,`נא שמור את מספר הרישוי: ${newRent.rentCode} לביצוע החזרה`,'success');
  }
  useEffect(() => {
    const updateCurrentTime = () => {
      const currentDate = new Date();
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
      const seconds = String(currentDate.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCheckinChange = (e) => {
    const newCheckinDate = new Date(e.target.value);
    setCheckinDate(newCheckinDate);
    if (newCheckinDate >= checkoutDate) {
      const newCheckoutDate = new Date(newCheckinDate);
      newCheckoutDate.setDate(newCheckoutDate.getDate() + 1);
      setCheckoutDate(newCheckoutDate);
    }
  };

  const handleCheckoutChange = (e) => {
    const newCheckoutDate = new Date(e.target.value);
    setCheckoutDate(newCheckoutDate);
    if (newCheckoutDate <= checkinDate) {
      const newCheckinDate = new Date(newCheckoutDate);
      newCheckinDate.setDate(newCheckinDate.getDate() - 1);
      setCheckinDate(newCheckinDate);
    }
  };

  useEffect(() => {
    setCheckinDate(new Date());
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setCheckoutDate(tomorrow);
  }, []);

  const todayDate = new Date().toISOString().split('T')[0];

  return (
    <div className="reservation-box">
      <div className="top">
        <div className="static">
          <div className="input-container" id="date-picker-container">
            <label htmlFor="date-checkin">מספר רישוי</label>
            <p className="carNumLet">{car.NumLet}</p>
          </div>
        </div>
        <div className="flex">
          <div className="input-container" id="date-picker-container">
            <label htmlFor="date-checkout">תאריך השאלה</label>
            <input
              type="date"
              id="date-checkout"
              className="date-field"
              value={todayDate}
              min={todayDate}
              max={todayDate}
              onChange={handleCheckoutChange}
            />
          </div>
          <div className="static">
            <div className="input-container" id="date-picker-container">
              <label htmlFor="date-checkin">שעת לקיחה</label>
              <p className="carNumLet">{currentTime}</p>
            </div>
          </div>
          <div className="button-container"
           onClick={setFlag}
           >
            <span className="button ok" onClick={rent1} >הזמנה</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;