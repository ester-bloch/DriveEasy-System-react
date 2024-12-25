import { useEffect, useState } from "react";
import { getEngineTypesFromSql, updateEngineTypesInSql } from "./managerApi";

export const SetEngineType = () => {
    const [engineTypes, setEngineTypes] = useState();
    const [num, setNum] = useState([{}, {}])
    useEffect(() => {
        getEngineTypesFromSql()
            .then(res => {
                setEngineTypes(res.data);
                console.log("res.data");
                console.log(res.data);
                console.log(engineTypes);
            })
            .catch(err => {
                console.log(err);

            })
    }, [num])

    const changePrice = (e) => {
        var newPrice = document.getElementById(`${e.id}`)
        console.log(newPrice.value);
        const updated =
        {
            "id": e.id,
            "description": e.description,
            "price":parseFloat( newPrice.value)
        }
        updateEngineTypesInSql(e.id, updated).then(res => {
            newPrice.value = ""
            newPrice.placeholder = "נשמר"
           setNum(num+1)
        })
            .catch(err => {
                console.log(err);
            })
    }

return <>
    <p>hi manager</p>
    {engineTypes && engineTypes.map((e, i) =>
        <>
            <div key={e.id}>
                <h5>{e.description}</h5>
                <p>e.descriptionf</p>
                <p>{e.price}</p>
                <p>e.price</p>
                <button className="smallButton" onClick={() => { changePrice(e) }}>אישור</button>
                <input className="smallButton" id={`${e.id}`}placeholder="הכנס מחיר חדש" ></input>
            </div>
        </>)}
    <p>hi manager</p>
</>
}