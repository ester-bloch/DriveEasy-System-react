
import { responsiveFontSizes } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { IsEmpty } from "./IsEmpty";
import { useNavigate } from "react-router";
import { setCurrentCar } from "../Data-Redux/action";
import { removeCarFromSql } from "./ManagerSet/managerApi";

export const OneCar = props => {
    const { engineTypeId,id,onUpdate, availableUpdate,carModelId,remove, numCar, passNum, carModel, numPlaces, pic, year, autoGir, engineType, pricePerHour, gasPerHour, LeftGas, city, street, empty }=props
    
    const dispatch = useDispatch() 
    const navigate = useNavigate()
    let CarTypes = useSelector(s => s.CarTypes)
    let carModels = useSelector(s => s.carModels)
    let engineTypes = useSelector(s => s.engineTypes)
    let thisCarModel = carModels.find(p => p.key == carModelId + 1)
    let thisEngineType = engineTypes.find(p => p.key == engineTypeId)
    let engineTypeIcon = null
    if (thisEngineType != undefined) engineTypeIcon = thisEngineType.description == "gas" ? "⛽" : thisEngineType.description == "soler" ? "💡" : thisEngineType.description == "electric" ? "🔌" : "⚡"
    let s = empty == true ? 'green' : 'red'
    let thisCarType = CarTypes.find(o =>  o.key == thisCarModel.carType )
    const deleteCar=()=>{
        removeCarFromSql(id).then(res=>{
            console.log(res.data);
            
        }).catch(err=>{
            console.log(err);
        })
    }
    const updating=()=>{
        onUpdate(props)
    }
    return <>
        <span id="OneCar">
            <p>רכב מספר {numCar}</p>
            <span style={{ color: { s } }}>
                <div className="forImg">
                    <img src={process.env.PUBLIC_URL + '/images/' + pic + '.png'}></img>
                </div>
            </span>
            <IsEmpty color={s}></IsEmpty>
            <span style={{ color: `${s}` }}>
                <label> תיאור: </label>
                <label> {thisCarType.description=="bimba"?"בימבה":thisCarType.description} </label>
                <br></br><label> חברה:  </label>
                <label>{thisCarModel.company}  </label>
                <br></br><label> מודל:  </label>
                <label> {thisCarModel.model}  </label>
                <br></br><label>  מספר מקומות: </label>
                <label> {numPlaces}  </label>
                <br></br><label> מיקום: </label>
                <label> {city},     {street}  </label>
                <br></br><label>{engineTypeIcon}</label>
                {remove&&<button className="smallButton" onClick={deleteCar}>להסרה</button>}
                {availableUpdate&& <button className="smallButton" onClick={updating} >עדכון</button>}
                <button className="smallButton" onClick={()=>{
                    dispatch(setCurrentCar(props))
                    navigate("../CarDetails")
                    }}>פרטי רכב</button>
                
            </span>
        </span>
    </>
}
