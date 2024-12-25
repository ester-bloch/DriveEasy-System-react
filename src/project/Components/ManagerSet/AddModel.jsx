import { useEffect, useState } from "react"
import { addCarModelToSql, getCarTypesFromSql } from "./managerApi"
import { Select } from "../Select"
import { useNavigate } from "react-router"

export const AddModel = () => {
    const [carTypes, setCarTypes] = useState()
    const [selectedCarType, setSelectedCarType] = useState()
    const [selectedModel, setSelectedModel] = useState()
    const [selectedCompany, setSelectedCompany] = useState()
    const navigate = useNavigate()
    const data = {
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
        getCarTypesFromSql().then(res => {
            setCarTypes(res.data)
            console.log("res.data");
            console.log(res.data);
            console.log("carTypes");
            console.log(carTypes);
        })
            .catch(err => {
                console.log(err);

            })
    }, [])

    return <>
        <div id="add">
            {carTypes && <Select list={carTypes.map(t => t.description)} text={"car type"} set={setSelectedCarType} funcOnChng={() => { }}></Select>}
            {carTypes && <Select list={data["company"]} text={"company"} set={setSelectedCompany} funcOnChng={() => { }}></Select>}
            {carTypes && <Select list={data["model"]} text={"model"} set={setSelectedModel} funcOnChng={() => { }}></Select>}
            <br></br>
            <br></br>

            <button className="smallButton" onClick={() => {
                const carTypeDto = {
                    "description": selectedCarType,
                    id: carTypes.find(p => p.description == selectedCarType).id
                }
                addCarModelToSql(
                    {
                        "company": selectedCompany,
                        "model": selectedModel,
                        "carType": carTypeDto.id,
                        "carTypeDto": carTypeDto
                    }
                )
                navigate("../")
            }}>לשמירה</button>
            <br></br><br></br>
        </div>
    </>
}