//{key:1,passNum:1111111,carModel:1, numPlaces:5,pic:null,year:2025,autoGir:true, engineType:1,pricePerHour:20, gasPerHour:12,LeftGas:13,city:"Yerushlayim",street:"Bar Ilan", empty:true},
// engineType: [
////   { key: 1, description: "gas", price: 9.7 },
//   { key: 2, description: "soler", price: 8},
//   { key: 3, description: "electric", price: 7.3 },
////   { key: 4, description: "hybrid", price: 13.9 },
///////],
//cars:[{ key: 1, description: "gas", price: 9.7 },
//carModel: [
//    { key: 1, company: "toyota", model: 2020, carType: 1 }, { key: 2, company: "toyota", model: 2021, carType: 1 }, { key: 3, company: "toyota", model: 2023, carType: 1 },
// CarType: [
//  { key: 1, description: "private" }
import { responsiveFontSizes } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { IsEmpty } from "./IsEmpty";
import { useNavigate } from "react-router";
import { setCurrentCar } from "../Data-Redux/action";

//הצגת כל הרכבים. 
//יש להציג פרטי דגם (חברה, מודל וסוג רכב) מס' מקומות,
// מיקום. יש לסמן רכב פנוי בירוק
//, תפוס באדום. יש
//להציג סימון לסוג ההנעה
export const OneCar = props => {
    const { engineTypeId, carModelId, numCar, passNum, carModel, numPlaces, pic, year, autoGir, engineType, pricePerHour, gasPerHour, LeftGas, city, street, empty }=props
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
    //if(carModels.carType1=useSelector)thisCarType= CarTypes.find(ct => ct.key == carModels.carType)

    return <>
        <span id="OneCar">
            {/* <p>רכב מספר {numCar}</p> */}
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
                <button onClick={()=>{
                    dispatch(setCurrentCar(props))
                    navigate("../CarDetails")
                    }}>CarDetails</button>
                
            </span>
        </span>
    </>
}
