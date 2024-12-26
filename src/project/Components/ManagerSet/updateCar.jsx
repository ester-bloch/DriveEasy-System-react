import { useEffect, useState } from "react"
import { Select } from "../Select"
import { addCarToSql, getCarModelsFromSql, getEngineTypesFromSql, updateCarInSql } from "./managerApi"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"

export const UpdateCar = () => {
    const currentId=useSelector(e=>e.currentCar).id
    const navigate = useNavigate()
    const [newCar, setNewCar] = useState({})

    const [carModels, setCarModels] = useState([])
    const [engineTypes, setEngineTypes] = useState([])
    const [selectedCarModelString, setSelectedCarModelString] = useState()
    const [selectedCarModel, setSelectedCarModel] = useState({})
    const [selectedEngineType, setSelectedEngineType] = useState({})
    const funcOnChange1 = (text) => {
        const id = text.substring(0, text.indexOf(':'))
        console.log(`id= ${id}  `);
        console.log(`${text.substring(text.indexOf(":"),text.length)}`);
        
        console.log(`${text}`);
        
        const found=(carModels.find(cm => cm.id == id))
        console.log("found:");
        console.log(found);
        
        setSelectedCarModel(found)
        console.log(selectedCarModel);
        for(let u=1;u<999999;u++);

        setNewCar({ ...newCar, "carModelDto": carModels.find(cm => cm.id == id), "carModelId": id })
        console.log(newCar);
        

    }
    const funcOnChange2 = (text) => {
        setSelectedEngineType(engineTypes.find(cm => cm.description === text))
        setNewCar({ ...newCar, "engineTypeDto": selectedEngineType, "engineTypeId": selectedEngineType.id })
        for(let u=1;u<999999;u++);
        console.log(newCar);
    }

    useEffect(() => {
        getCarModelsFromSql().then(res => {
            setCarModels(res.data);
            console.log(res.data);

        }).catch(err => {
            console.log(err);

        })
        getEngineTypesFromSql().then(res => {
            setEngineTypes(res.data)
            console.log(res.data);

        }).catch(err => {
            console.log(err);

        })

    }, [])

    const example = {
        "id": 0,
        "passNum": 0,
        "numPlaces": 0,
        "pic": "string",
        "year": 0,
        "autoGir": true,
        "pricePerHour": 0,
        "gasPerHour": 0,
        "leftGas": 0,
        "city": "string",
        "street": "string",
        "empty": true,
        "carModelId": 0,
        "engineTypeId": 0,
        "carModelDto": {
            "id": 0,
            "company": "string",
            "model": "string",
            "carType": 0,
            "carTypeDto": {
                "id": 0,
                "description": "string"
            },
            "engineTypeDescription": "string"
        },
        "engineTypeDto": {
            "id": 0,
            "description": "string",
            "price": 0
        },
        "engineTypeDescription": "string"
    }

    const send = () => {
        // console.log(newCar);
        updateCarInSql(currentId,newCar).then(res => {
            console.log("נכנסתי"); console.log(res);
        }).catch(err => {
            console.log(err);
        })
        navigate(`../`)
    }


    return <>
        <div id="add">
            <h2> :update car </h2>
            <h4>car number {currentId}</h4>
            <input onChange={(e) => setNewCar({ ...newCar, "passNum": parseInt(e.target.value) })} placeholder="הכנס מספר רישוי "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "numPlaces": parseInt(e.target.value) })} placeholder="הכנס מספר מקומות "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "pic": e.target.value })} placeholder="הכנס שם תמונה "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "year": parseInt(e.target.value) })} placeholder="הכנס שנה "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "autoGir": new Boolean(e.target.value) })} placeholder="גיר אטומטי? true/false"></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "gasPerHour": parseInt(e.target.value) })} placeholder="הכנס כמות גז לשעה "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "pricePerHour": parseInt(e.target.value) })} placeholder="הכנס מחיר גז לשעה "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "leftGas": parseInt(e.target.value) })} placeholder=" הכנס כמות גז שנותרה "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "city": e.target.value })} placeholder="הכנס  עיר  "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "street": e.target.value })} placeholder="הכנס  כתובת  "></input><br></br>
            <input onChange={(e) => setNewCar({ ...newCar, "empty": new Boolean(e.target.value) })} placeholder="פנוי? true/false"></input>
            <div >
                {carModels && <Select funcOnChng={funcOnChange1} set={setSelectedCarModelString} list={carModels.map(i => i.id+": " + i.model + ", " + i.company+", "+i.carTypeDto.description )} text={"car model"}></Select>}
                <Select funcOnChng={funcOnChange2} list={engineTypes.map(i => i.description)} text={"engine type"}></Select><br></br><br></br>
            </div>
            <button onClick={send}>לשמירה</button>
            <button onClick={()=>{navigate("../")}}>לחזרה</button>

        </div>
    </>
}