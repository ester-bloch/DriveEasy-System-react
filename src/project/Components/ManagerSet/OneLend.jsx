import { useEffect, useState } from "react";
import { IsEmpty } from "../IsEmpty";
import { getReturnsFromSql } from "./managerApi";

export const OneLend = ({ props }) => {
    // console.log(props);
    const [returns, setReturns] = useState()
    const [num, setNum] = useState(0)
    let returnDate;
    useEffect(() => {
        getReturnsFromSql().then(res => {
            setReturns(res.data)
            returnDate = res.data.find(r => r.lendId == id).date

        }).catch(err => {
            console.log(err);

        })
    }, [])
    const { id, userId, carId, date, hour, retuned } = props
    console.log(id, userId, date);
    return <>
        <div className="marginRight">
            <IsEmpty center={true} color={retuned ? "green" : "red"}></IsEmpty>
        </div>
        <label>רכב: {carId} לקוח: {userId}  </label><br></br>
        {retuned && <button onClick={() => { setNum(num + 1) }}>להצגת תאריך החזרה</button>}<br></br>
        {num % 2 == 1 && date && <p>{date}</p>}
    </>
}