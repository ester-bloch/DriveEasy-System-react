import { useEffect, useState } from "react";
import { getCarModelsFromSql } from "./managerApi";
import { Outlet, useNavigate } from "react-router";
import { Select } from "../Select";

export const SetModel = () => {
    const [howTosearch, setHowTosearch] = useState("")
    const [selected, setSelected] = useState("null")
    const [showSelect2, setShowSelect2] = useState(false)
    const [carModels, setCarModels] = useState();
    const [carModelsToShow, setCarModelsToShow] = useState();
    const [num, setNum] = useState([{}, {}])
    const [showAddModel, setShowAddModel] = useState(1)
    const navigate = useNavigate()
    const filterList = {
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

    const onChangeSubject = (subject) => {
        setShowSelect2(true)
    }

    useEffect(() => {
        getCarModelsFromSql()
            .then(res => {
                setCarModels(res.data);
                setCarModelsToShow(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }, [num])

    const search = (text) => {
        console.log("text= " + text);
        console.log("howTosearch=  " + howTosearch);
        let x = []
        switch (howTosearch) {

            case "company": {
                carModels.forEach(element => {
                    console.log(element);
                    
                    if (element.company == text) {
                        x.push(element)
                    }
                });
                break;
            }
            case "model": {
                carModels.forEach(element => {
                    if (element.model == text) {
                        x.push(element)
                    }
                });
                break;
            }

            case "car type": {
                carModels.forEach(element => {
                
                    // console.log(engineTypes.find(cm => cm.key == element.engineTypeId + 1));
                    if (element.carTypeDto.description == text) {
                        x.push(element)
                    }
                });
                break;
            }
        }
        // console.log(x);
        setCarModelsToShow([...x])
        // console.log(carsToShow);
    }


    return <>
        <br></br><br></br>
        <button onClick={() => {
            setShowAddModel(showAddModel + 1)
            navigate(`addModel`)
        }}>הוספת מודל</button>
        {showAddModel % 2 == 0 && <Outlet></Outlet>}
        <br></br>
        <Select set={setHowTosearch} funcOnChng={onChangeSubject} text={"how to search"} list={["company", "model", "car type"]}></Select>
        {showSelect2 && <Select set={setSelected} funcOnChng={search} text={howTosearch} list={filterList[howTosearch]}></Select>}
        <>
            <br></br>
            {carModelsToShow && carModelsToShow.map((e, i) =>
                <>
                    <div key={e.id}>
                        <h5 >מודל מספר {e.id}</h5>
                        <p>company: {e.company}</p>
                        <p></p>
                        <p>model: {e.model}</p>
                        {(e.carTypeDto == null || e.carTypeDto == undefined) && <p>null/undefined</p>}
                        {e.carTypeDto && <p>description: {e.carTypeDto.description}</p>}
                        <br></br>
                    </div>
                </>
            )}
        </>
    </>
}