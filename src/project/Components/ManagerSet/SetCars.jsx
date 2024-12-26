import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { getCarsFromSql } from "./managerApi"
import { setCarsFromServer, setCurrentCar } from "../../Data-Redux/action"
import { Select } from "../Select"
import { OneCar } from "../OneCar"

export const SetCars = () => {
    const navigate = useNavigate()
    let carModels = useSelector(s => s.carModels)
    let engineTypes = useSelector(s => s.engineTypes)
    const isManager = useSelector(e => e.isManager)
    let CarTypes = useSelector(s => s.CarTypes)
    let selectedRef = useRef()
    const dispatch = useDispatch()
    const [showAddCar,setShowAddCar]=useState(1)
    const [howTosearch, setHowTosearch] = useState("")
    const [selected, setSelected] = useState("null")
    const [showSelect2, setShowSelect2] = useState(false)
    const [cars, setCars] = useState()
    const [carsToShow, setCarsToShow] = useState()
    const filterList =
    {//דגם (יש להציג חברה ומודל,) סוג הנעה, סוג רכב,עיר, מס' מקומות, .
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
                // x.data -  הנתונים שנשלפו - התגובה מהשרת
                setCars(x.data)
                setCarsToShow(x.data)
                for (let i = 0; i < cars.length; i++) {
                    if (cars[i] == null || cars[i] == undefined)
                        cars.splice(i, 1)
                }
                dispatch(setCarsFromServer(cars))
                console.log(x.data);
            })
            .catch(err => {
                console.log(err);
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
        console.log("howTosearch=  " + howTosearch);
        let x = []
        switch (howTosearch) {
            case "town": {
                cars.forEach(element => {
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
            //thisEngineType = engineTypes.find(p => p.key == engineTypeId).description
            case "propulsion type": {
                console.log(engineTypes);
                cars.forEach(element => {
                    // console.log(engineTypes.find(cm => cm.key == element.engineTypeId ));
                    if (element.engineTypeId&&engineTypes.find(cm => cm.key == element.engineTypeId ).description == text) {
                    // if(element.engineTypeDto.description==text){
                        x.push(element)
                    }
                });
                break;
            }
            case "car type": {
                console.log(engineTypes);
                cars.forEach(element => {
                    console.log(engineTypes.find(cm => cm.key == element.engineTypeId + 1));
                    if (CarTypes.find(t => t.key == carModels.find(cm => cm.key == element.carModelId + 1).carType).description == text) {
                        x.push(element)
                    }
                });
                break;
            }
        }
        // console.log(x);
        setCarsToShow([...x.filter(p => p.empty)])
        // console.log(carsToShow);
    }

    const managerFunc = () => {
        navigate("../Manager")
    }

    const onUpdate=(car)=>{
        dispatch(setCurrentCar(car))
        navigate("updataCar")
    }
    return <>
        <br></br><br></br>
        <button onClick={() => {
            setShowAddCar(showAddCar + 1)
            showAddCar%2==1?
            navigate(`addCar`):
            navigate(``)
        }}>הוספת רכב</button>
        <Outlet></Outlet>
        <br></br>
        <br></br>
         
        <Select set={setHowTosearch} funcOnChng={onChangeSubject} text={"How To search"} list={["company", "model", "propulsion type", "car type", "num of places", "town"]}></Select>
        {showSelect2 &&
            <Select ref={selectedRef} set={setSelected} funcOnChng={search} text={howTosearch} list={filterList[howTosearch]}></Select>}
        <div id="cars">
            <br></br>
            {carsToShow && carsToShow.map((p, i) =>
                <>
                    <br></br>
                    {/* //    const { engineTypeId, carModelId, numCar, passNum, carModel, numPlaces, pic, year, autoGir, engineType, pricePerHour, gasPerHour, LeftGas, city, street, empty } = props */}

                    <OneCar numCar={p.id} onUpdate={onUpdate}availableUpdate={true} remove={true} id={p.id} passNum={p.passNum} carModelId={p.carModelId} engineTypeId={p.engineTypeId} carModel={p.carModelDto} numPlaces={p.numPlaces} pic={p.pic} year={p.year} autoGir={p.autoGir} engineType={p.engineTypeDto} pricePerHour={p.pricePerHour} gasPerHour={p.gasPerHour} LeftGas={p.leftGas} city={p.city} street={p.street} empty={p.empty}></OneCar>
                    {/* <OneCar  numCar={p.key} passNum={p.passNum} carModelId={p.carModelId} engineTypeId={p.engineTypeId} carModel={p.carModel} numPlaces={p.numPlaces} pic={p.pic} year={p.year} autoGir={p.autoGir} engineType={p.engineType} pricePerHour={p.pricePerHour} gasPerHour={p.gasPerHour} LeftGas={p.LeftGas} city={p.city} street={p.street} empty={p.empty}></OneCar> */}
                    <br></br>
                </ >
            )}
        </div>
    </>
}