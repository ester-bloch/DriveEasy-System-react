import { useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { IsEmpty } from "./IsEmpty"
import { useState } from "react"
import { User } from "./User"

export const CarDetails = () => {
    const navigate = useNavigate()
    let car = useSelector(s => s.currentCar)
    let currentUser = useSelector(s => s.currentUser)
    const { engineTypeId, carModelId, id, numCar, passNum, carModel, numPlaces, pic, year, autoGir, engineType, pricePerHour, gasPerHour, LeftGas, city, street, empty } = car
    const[toLend,setToLend]=useState(empty)
    let CarTypes = useSelector(s => s.CarTypes)
    let carModels = useSelector(s => s.carModels)
    let engineTypes = useSelector(s => s.engineTypes)
    let thisCarModel = carModels.find(p => p.key == carModelId + 1)
    let thisEngineType = engineTypes.find(p => p.key == engineTypeId)
    let engineTypeIcon = null
    if (thisEngineType != undefined) engineTypeIcon = thisEngineType.description == "gas" ? "⛽" : thisEngineType.description == "soler" ? "💡" : thisEngineType.description == "electric" ? "🔌" : "⚡"
    let s = empty == true ? 'green' : 'red'
    let thisCarType = CarTypes.find(o => o.key == thisCarModel.carType)
    const lend = () => {
  
         navigate(`Lend`)
    }
    const  ToReturn=()=>{
        navigate(`return`)
    }
    const autoGirtext = "גיר אוטומטי"
    return <>
        <>
        <User></User><br></br>
            <span>
                <div style={{ color: { s } }}>
                    <div className="forImg">
                        <img src={process.env.PUBLIC_URL + '/images/' + pic + '.png'}></img>
                    </div>
                </div>
                <IsEmpty color={s}></IsEmpty>
                {/*         {    "city": "string", "street": "string", "empty": true }],
 */}
                <label> תיאור: </label>
                <label> {thisCarType.description == "bimba" ? "בימבה" : thisCarType.description} </label>
                <br></br><label> חברה:  </label>
                <label>{thisCarModel.company}  </label>
                <br></br><label> מודל:  </label>
                <label> {thisCarModel.model}  </label>
                <br></br><label>  מספר רישוי: </label>
                <label> {passNum}  </label>
                <br></br><label>  מספר מקומות: </label>
                <label> {numPlaces}  </label>
                <br></br><label>   שנה: </label>
                <label> {year}  </label>
                <br></br>
                <label> {autoGir == true ? "👍" : "👎"}  </label>
                <label>: {autoGirtext}</label>
                <br></br><label> מיקום: </label>
                <label> {city},     {street}  </label>
                <br></br><label> גז לשעה: </label>
                <label>  {gasPerHour}  </label>
                <br></br><label> גז שנותר: </label>
                <label>  {LeftGas}  </label>

                <br></br><label> מחיר לשעה: </label>
                <label>  {passNum % 10 + numPlaces * 2}  </label>
                <br></br>
                <label>{engineTypeIcon}</label>

                <label>{thisEngineType.description} :סוג הנעה</label>
                <br></br>
            </span>
        </>
        <button onClick={() => { navigate("../Cars") }}> חזרה לגלריית הרכבים</button>
        <br></br>
        {toLend==true&&currentUser.id&& <button onClick={() => {lend()  }}>השאלה</button>}
        {toLend==false&&currentUser.id&& <button onClick={() => {ToReturn()  }}>החזרה</button>}
        <Outlet></Outlet>
    </>
}