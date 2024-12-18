import { useSelector } from "react-redux"
import { AddReturnToSql } from "../Data-Redux/api"
import { useState } from "react"
export const ToReturn = props => {
    let car = useSelector(s => s.currentCar)
    const { engineTypeId, carModelId, id, numCar, passNum, carModel, numPlaces, pic, year, autoGir, engineType, pricePerHour, gasPerHour, LeftGas, city, street, empty } = car
    let currentUser = useSelector(store => store.currentUser)
    let userNAme = currentUser == null || currentUser == undefined || currentUser.name == undefined || currentUser == "" ? "😏אורח" : currentUser.name
    const day = new Date()
    const dateString = `${day.getFullYear().toString()}-${day.getMonth() + 1}-${day.getDate()}`
    const hour = new Date().getHours()
    const [pay,setPay]=useState(false)
    const send = () => {
        if (!empty && currentUser.id) {
            const newReturn= {
                "street": document.getElementById("street").value,
                "city": document.getElementById("city").value,
                "lendId": document.getElementById("lendId").value,
                // "userId": currentUser.id,
                "carId": id,
                "date": dateString,
                "hour": hour,
                "sumToPay": 30,
                "leftToPay": 0
            }
            console.log(newReturn);
            
            AddReturnToSql(newReturn).then(data => {
                document.getElementById("after").innerHTML = `הוחזר בהצלחה, מספר החזרה: ${data.data}`
            })
                .catch(err => { console.log(err); 
                    document.getElementById("after").innerHTML = `...החזרה לא הצליחה`

                }
                )
        }
        else {
            document.getElementById("after").innerHTML = `לא ניתן להחזיר`

        }
    }

    return <>
        <h4>טופס החזרה</h4>
        <p>:מבקש להחזיר את השאלה מספר  {userNAme}  משתמש</p>
        <input id="lendId" placeholder={"הכנס קוד השאלה "}></input><br></br>
        <input id="city" placeholder={"הכנס עיר נוכחית  "}></input><br></br>
        <input id="street" placeholder={"הכנס רחוב נוכחי  "}></input><br></br>
        <p> תאריך: {dateString}</p>
        <p> שעה: {hour}</p>
        <button onClick={send}>לאישור</button><br></br>
        <label id="after" ></label>
    </>

}
