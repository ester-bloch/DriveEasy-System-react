import { useDispatch, useSelector } from 'react-redux'
import './input.css'
import { addCar, addModel } from './redux/Actions';
import swal from 'sweetalert';
export const AddModel = (props) => {
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
  const checkString = (string) => {
    if (string == "") return false;
    for (let i = 0; i < string.length; i++)
      if (!((string.charAt(i) >= 'א' && string.charAt(i) <= 'ת') || (string.charAt(i) >= 'a' && string.charAt(i) <= 'z') || (string.charAt(i) >= 'A' && string.charAt(i) <= 'Z'))) {
        return false;
      }
    return true;
  }
  const send = (e) => {
    e.preventDefault();
    let getCarType = get('carType', 'desc', e.target[2].value);
    let getCarCompany = get('carModels', 'company', e.target[0].value);    
    if ( getCarType == undefined || getCarCompany==undefined||
       !checkString(e.target[0].value) || !checkString(e.target[1].value)|| !checkString(e.target[2].value)) {
      swal('oops', 'נא הכנס ערכים תקינים', 'error'); 
      return;
    }
    debugger
let newModel={ code: (parseInt(store.carModels[store.carModels.length - 1].code) + 1) + ""
    , company: e.target[0].value,
     model: e.target[1].value, 
     carTypeCode: getCarType.code }
     if(store.carModels.find(x=>x.model==newModel.model)!=undefined)
     {
        swal('oops', 'המודל כבר קיים במערכת', 'error'); 
        return;
     }
    dispatch(addModel(newModel));
    swal('good!', 'המודל נוסף בהצלחה!', 'success');
    setFlag(false);
  }
  return (<><div id='divAddCar1'>
    <header>הוספת מודל</header>
    <form className="topBefore" id="form" onSubmit={(e) => { send(e) }}>
      <div className='formAddCar'>
      {/* { code: '20', company: 'Toyota', model: 'Corolla', carTypeCode: '5' }, */}

        <div className='formAddCarDiv'>
          <input className="inputAddCar" id="name" type="text" placeholder="שם החברה" />
          <input className="inputAddCar" id="email" type="text" placeholder="שם המודל" />
          <input className="inputAddCar" id="email" type="text" placeholder="סוג רכב" />
         </div></div>
      <div className="aaa">
        <button className='button bbb' type='submit'>להוספה</button>
      </div>
    </form></div>
  </>)
}
export default AddModel;