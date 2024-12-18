import { useSelector } from "react-redux"
import { AddLendToSql } from "../Data-Redux/api"

export const Lend = () => {
    let car = useSelector(s => s.currentCar)
    const { engineTypeId, carModelId, id, numCar, passNum, carModel, numPlaces, pic, year, autoGir, engineType, pricePerHour, gasPerHour, LeftGas, city, street, empty } = car
    let currentUser = useSelector(store => store.currentUser)
    let userNAme = currentUser == null || currentUser == undefined || currentUser.name == undefined || currentUser == "" ? "😏אורח" : currentUser.name 
    let firstTime=true;
    const day = new Date()
    const dateString=`${day.getFullYear().toString()}-${day.getMonth()+1}-${day.getDate()}`
    const hour = new Date().getHours()
    const send = () => {
       if(empty&&currentUser.id&&firstTime){
        const newLend = {
            "userId":currentUser.id,
            "carId": id,
            "date": dateString,
            "hour": hour
        }
        AddLendToSql(newLend).then(data=>{
            document.getElementById("after").innerHTML=`מספר השאלה: ${data.data}`
            firstTime=false;
        })
        .catch(err=>{console.log(err);}
        )}
        else{
            document.getElementById("after").innerHTML=`לא ניתן להשאיל`

        }
    }


    return <>
        <h4>טופס השאלה</h4>
        <p>:מבקש להשאיל את  {userNAme}  משתמש</p>
        <p>מספר רישוי:{passNum}</p>
        <p> תאריך: {dateString}</p>
        <p> שעה: {hour}</p>
        <button onClick={send}>לאישור</button><br></br>
        <label id="after" ></label>
    </>
}