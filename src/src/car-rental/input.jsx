import { useDispatch, useSelector } from 'react-redux'
import './input.css'
import { addCar } from './redux/Actions';
import swal from 'sweetalert';
export const Input = (props) => {
  let { setFlag, flag } = props;
  const dispatch = useDispatch();
  const store = useSelector(x => x)
  const get = (arr, type, value) => {
    debugger
    return store[arr].find(x => x[type] == value);
  }
  const getLast = () => {
    let codeLength = 0;
    store.cars.map(x => codeLength = x.CarCode);
    return codeLength;
  }
  const checkNum = (string) => {
    if (string == "") return false;
    for (let i = 0; i < string.length; i++)
      if (parseInt(string.charAt(i) == NaN)) {
        return false;
      }
    return true;
  }
  const checkString = (string) => {
    if (string == "") return false;
    for (let i = 0; i < string.length; i++)
      if (!((string.charAt(i) >= 'א' && string.charAt(i) <= 'ת') || (string.charAt(i) >= 'a' && string.charAt(i) <= 'z') || (string.charAt(i) >= 'A' && string.charAt(i) <= 'Z'))) {
        return false;
      }
    return true;
  }
  const send = (e) => {
    let getModel = get('carModels', 'model', e.target[1].value);
    let getDriveType = get('driveType', 'desc', e.target[11].value);
    e.preventDefault();
    if (!checkNum(e.target[0].value) || getModel == undefined || !checkNum(e.target[2].value)
      || !checkNum(e.target[4].value) || getDriveType == undefined || !checkNum(e.target[6].value) || !checkNum(e.target[6].value)
      || !checkNum(e.target[8].value) || !checkString(e.target[9].value) || !checkString(e.target[10].value)) {
      swal('oops', 'נא הכנס ערכים תקינים', 'error'); return;
    }
    debugger

    let newCar = {
      CarCode: (parseInt(store.cars[store.cars.length - 1].CarCode) + 1) + "", NumLet: e.target[0].value,
      CodeModel: getModel.code, NumPlaces: parseInt(e.target[2].value), CarPicture: e.target[3].value,
      CarYear: e.target[4].value, CarGir: e.target[5].checked, codeDriveType: getDriveType.id,
      PricePerHour: parseInt(e.target[6].value), TakesDelekPerKamash: parseInt(e.target[7].value),
      LitterSurplus: parseInt(e.target[8].value), Street: e.target[9].value, City: e.target[10].value, Available: true
    }
    dispatch(addCar(newCar));
    swal('good!', 'הרכב נוסף בהצלחה!', 'success');
    setFlag(false);
  }
  return (<><div id='divAddCar1'>
    <header>הוספת רכב</header>
    <form className="topBefore" id="form" onSubmit={(e) => { send(e) }}>
      <div className='formAddCar'>
        <div className='formAddCarDiv'>
          <input className="inputAddCar" id="name" type="text" placeholder="מספר רישוי" />
          <input className="inputAddCar" id="email" type="text" placeholder="מודל" />
          <input className="inputAddCar" id="email" type="number" placeholder="מספר מקומות" />
          <input className="inputAddCar" id="email" type="text" placeholder="ניתוב לתמונה" />
          <input className="inputAddCar" id="email" type="number" placeholder="שנת ייצור" />
          <label style={{ fontSize: '50px' }}><input style={{ width: '30px', height: '30px' }} id="email" type="checkbox" placeholder="גיר?"></input>גיר?</label>

        </div>
        <div className='formAddCarDiv'>
          <input className="inputAddCar" id="email" type="number" placeholder="מחיר לשעה" />
          <input className="inputAddCar" id="email" type="number" placeholder="צריכת דלק לקמש" />
          <input className="inputAddCar" id="email" type="number" placeholder="יתרת דלק" />
          <input className="inputAddCar" id="email" type="text" placeholder="רחוב" />
          <input className="inputAddCar" id="email" type="text" placeholder="עיר" />
          <input className="inputAddCar" id="email" type="text" placeholder="סוג הנעה" />
        </div></div>
      <div className="aaa">
        <button className='button bbb' type='submit'>להוספה</button>
      </div>
    </form></div>
  </>)
}
export default Input;