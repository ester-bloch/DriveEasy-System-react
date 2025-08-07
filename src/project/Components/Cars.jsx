import { useDispatch, useSelector } from "react-redux"
import { User } from "./User"
import { OneCar } from "./OneCar"
import { useEffect, useRef, useState } from "react"
import { Select } from "./Select"
import { setCarsFromServer } from "../Data-Redux/action"
import { getCarsFromSql } from "../Data-Redux/api"
import { Button } from "bootstrap"
import { Manager } from "./Manager"
import { Navigate, useNavigate } from "react-router"

export const Cars = () => {
    const navigate = useNavigate()
    let carModels = useSelector(s => s.carModels)
    let engineTypes = useSelector(s => s.engineTypes)
    const isManager = useSelector(e => e.isManager)
    let CarTypes = useSelector(s => s.CarTypes)
    let selectedRef = useRef()
    const dispatch = useDispatch()
    const [howTosearch, setHowTosearch] = useState("")
    const [selected, setSelected] = useState("null")
    const [showSelect2, setShowSelect2] = useState(false)
    const [cars, setCars] = useState()
    const [carsToShow, setCarsToShow] = useState()
    const filterList =
    {
        "company":
            ["tesla", "toyota", "mercedes", "mitzuvishi", "frary", "limuzine", "man"],
        "model":
            ["bimba", "tustus", "juk", "1980", "1998", "1999", "2025", "2008", "2020", "2021", "2022", "2023", "2024"],
        "propulsion type":
            ["gas", "hybrid", "electric", "soler"],
        "car type":
            ["private", "station", "family", "manager", "business", "minibus", "bus", "bimba", "jip", "jipon"],
        "num of places":
            [2, 4, 5, 7, 9, 10, 50, 60],
        "town":
            ["ירושלים", "תל אביב"]
    }
    useEffect(() => {
        getCarsFromSql()
            .then(x => {
                setCars(x.data)
                setCarsToShow(x.data)
                for (let i = 0; i < cars.length; i++) {
                    if (cars[i] == null || cars[i] == undefined)
                        cars.splice(i, 1)
                }
                dispatch(setCarsFromServer(cars))
            })
            .catch(err => {
            })
    }, [])

    const onChangeSubject = (subject) => {
        if (howTosearch == "company")
            setShowSelect2(true)
        else
            setShowSelect2(false)
    }
    useEffect(() => {
        if (howTosearch != "")
            setShowSelect2(true)
    }, [howTosearch])

    const search = (text) => {
        let x = []
        if ( !cars )return;
        switch (howTosearch) {
            case "town": {
                cars && cars.forEach(element => {
                    if (element.city == text) {
                        x.push(element)
                    }
                });
                break;
            }
            case "num of places": {
                cars.forEach(element => {
                    if (element.numPlaces == text) {
                        x.push(element)
                    }
                });
                break;
            }
            case "company": {
                cars.forEach(element => {
                    if (carModels.find(cm => cm.key == element.carModelId + 1).company == text) {
                        x.push(element)
                    }
                });
                break;
            }
            case "model": {
                cars.forEach(element => {
                    if (carModels.find(cm => cm.key == element.carModelId + 1).model == text) {
                        x.push(element)
                    }
                });
                break;
            }
            case "propulsion type": {
                cars.forEach(element => {
                    if (engineTypes.find(cm => cm.key == element.engineTypeId).description == text) {
                        x.push(element)
                    }
                });
                break;
            }
            case "car type": {
                cars.forEach(element => {
                    if (CarTypes.find(t => t.key == carModels.find(cm => cm.key == element.carModelId + 1).carType).description == text) {
                        x.push(element)
                    }
                });
                break;
            }
        }
        setCarsToShow([...x.filter(p => p.empty)])
    }
    const managerFunc = () => {
        navigate("../Manager")
    }

    return <>
        <User></User>
        <br></br>
        {isManager && <button onClick={managerFunc}>לעריכה מתקדמת</button>}
        <Select set={setHowTosearch} funcOnChng={onChangeSubject} text={"how to search"} list={["company", "model", "propulsion type", "car type", "num of places", "town"]}></Select>
        {showSelect2 && <Select ref={selectedRef} set={setSelected} funcOnChng={search} text={howTosearch} list={filterList[howTosearch]}></Select>}
        <div id="cars">
            <br></br>
            {carsToShow && carsToShow.map((p, i) =>
                <>
                    <br></br>
                    <OneCar numCar={p.id} id={p.id} passNum={p.passNum} carModelId={p.carModelId} engineTypeId={p.engineTypeId} carModel={p.carModelDto} numPlaces={p.numPlaces} pic={p.pic} year={p.year} autoGir={p.autoGir} engineType={p.engineTypeDto} pricePerHour={p.pricePerHour} gasPerHour={p.gasPerHour} LeftGas={p.leftGas} city={p.city} street={p.street} empty={p.empty}></OneCar>
                    <br></br>
                </ >
            )}
        </div>
    </>
}