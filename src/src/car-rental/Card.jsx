import { useNavigate, useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import './Card.css'
import { Rent } from "./Rent";
import { useRef, useState } from "react";
import { RedoTwoTone } from "@mui/icons-material";
import { setCar } from "./redux/Actions";

import swal from "sweetalert";
export const Card = () => {
  const params = useParams();
  const navigate=useNavigate();
  
  debugger
  let data = params;
  let carCode = data.car;
  let store = useSelector(x => x);
  if(!store.thisUser)
   navigate(`/fleetCars`);
  let car = store.cars.find(x => x.CarCode == carCode);
  const delekRef = useRef(null);
  const priceRef = useRef(null);
  const cityRef = useRef(null);
  const streetRef = useRef(null);
  const dispatch = useDispatch();
  // const 
  const [flag, setFlag] = useState(false);

  const getDriveType = (codeDriveType) => {

    return store.driveType.find(x => x.id == codeDriveType);
  }
  const getCarType = (code) => {

    return store.carType.find(x => x.code == code);
  }
  const getCarModel = (codeModel) => {

    return store.carModels.find(x => x.code == codeModel);
  }
  const setSetFlag = () => {
    setFlag(false);
  }
  const saveChanges = () => {
    let delek = parseFloat(delekRef.current.value);
    let price = parseInt(priceRef.current.value);
    let city = cityRef.current.value;
    let street = streetRef.current.value;
    debugger
    delek&&dispatch(setCar(car, 'TakesDelekPerKamash', delek));
    price&&dispatch(setCar(car, 'PricePerHour', price));
    city!=""&&dispatch(setCar(car, 'City', city));
    street!=""&&dispatch(setCar(car, 'Street', street))  ;  
    swal('good!','השינויים נשמרו בהצלחה!','success')
  }
  return (
    <div id="bigCard">

      <div className="divDitails">
        <h1>{getCarModel(car.CodeModel).company} {getCarModel(car.CodeModel).model} </h1><br></br><br></br>
        <h4>{getCarType(getCarModel(car.CodeModel).carTypeCode).desc}</h4>
        רק- <br></br>
        <h2>{car.PricePerHour * 24}₪ ליום </h2>
        <div id="details">
          <p className="details">מספר רישוי:<p>{car.NumLet}</p> </p>
          <p className="details">סוג רכב:<p>{getCarType(getCarModel(car.CodeModel).carTypeCode).desc}</p></p>
          <p className="details">גיר:<p>{car.CarGir ? "אוטומטי" : "ידני"}</p></p>
          <p className="details">מספר נוסעים:<p>{car.NumPlaces}</p></p>
          <p className="details">שנת ייצור :<p>{car.CarYear}</p></p>
          <p className="details">צריכת דלק לקמ"ש :{store.thisUser?.codeTypeUser == '1' ? <input placeholder={car.TakesDelekPerKamash} type="number" ref={delekRef}></input> : <p>{car.TakesDelekPerKamash}</p>}</p>
          <p className="details">מחיר לשעה:{store.thisUser?.codeTypeUser == '1' ? <input placeholder={car.PricePerHour} type="number" ref={priceRef}></input> : <p>{car.PricePerHour}</p>}                       </p>
          <p className="details">כתובת : {store.thisUser?.codeTypeUser == '1' ? <p id="adressP"><input placeholder={car.Street} ref={streetRef} className="address"></input><input placeholder={car.City} ref={cityRef}className="address"></input></p> : <p>{car.Street + " " + car.City}</p>}                            </p>

        </div>{store.thisUser?.codeTypeUser == '1' ? <button onClick={saveChanges}>לשינוי</button> : car.Available ? <button onClick={() => setFlag(true)}>יצירת קשר והזמנה</button> :
          <button >תפוס</button>}
      </div>
      <img src={car.CarPicture} id="bigImgCard"></img>
      {flag && <Rent car={car} setFlag={setSetFlag}></Rent>}
    </div>
  )
}