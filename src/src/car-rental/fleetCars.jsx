import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './fleetCars.css';
import { removeCar, setdriveType } from "./redux/Actions";
import { Input } from './input'
import { Test } from './Test';
import PopUp from './pop';
import swal from "sweetalert"

export const FleetCars = () => {
    const priceRefs = useRef({});
    const [selectedCompany, setSelectedCompany] = useState("all");
    const [selectedModel, setSelectedModel] = useState("all");
    const [selectedCity, setSelectedCity] = useState("all");
    const store = useSelector(store => store)
    const cars = store.cars;
    const carModels = store.carModels;
    const carType = store.carType;
    const thisUser = store.thisUser;
    const driveTypes = store.driveType;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fleetCarsRef = useRef(null); // Add useRef for the fleet cars div
    const [flag, setFlag] = useState(false);
    const getCarModel = (codeModel) => {
        const model = carModels.find(model => model.code === codeModel);
        return model;
    };
    const getCarType = (codeType) => {
        const type = carType.find(type => type.code == codeType);
        return type;
    };
    const filterCars = () => {
        return cars.filter(car => (selectedCompany === "all" || getCarModel(car.CodeModel)?.company === selectedCompany) && (selectedModel === "all" || selectedModel === "add" || getCarModel(car.CodeModel)?.model === selectedModel) && (selectedCity === "all" || car.City === selectedCity))
    };
    const price = (type) => {
        let inputRef = priceRefs.current[type.desc];
        debugger
        if (inputRef.value!="") {
            const newPrice = inputRef.value;
            dispatch(setdriveType(type, newPrice));
            swal.fire("הפרטים נשמרו", "העדכון נשמר בהצלחה", "success");
        }
        else
        swal.fire("oops!!", "לא התבצע שינוי...", "error");
    };

    const handleDelete = (carCode) => {
        swal.fire({
            title: "בטוח?",
            text: "ברצונך למחוק רכב זה?",
            showCancelButton: true,
            confirmButtonText: "כן",
            cancelButtonText: `לא`
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeCar(carCode));
            }
        })
    };

    const handleSelectChange = (e, set) => {
        debugger
        set(e.target.value);
        if (fleetCarsRef.current) {
            fleetCarsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const findModel = (codeModel) => {
        return store.carModels.find(x => x.CodeModel == codeModel);
    }
    const changeCompany = (e) => {
        if (selectedModel != "all" && selectedModel != "add" && store.carModels.find(x => x.model == selectedModel)?.company != e.target.value)
            setSelectedModel("all");
        // if(!store.cars.find(car=>car.City==selectedCity&&findModel(car.codeModel)?.company==e.target.value))
        //     setSelectedCity("all");
        handleSelectChange(e, setSelectedCompany);
    }
    const toResetSelect = () => {
        setSelectedCity("all");
        setSelectedCompany("all");
        setSelectedModel("all");
    }
    const getDriveType = (codeDriveType) => {
        const driveType = driveTypes.find(drive => drive.id == codeDriveType);
        return driveType;
    };
    const addCar1 = () => {
        setFlag(true);
    }
    return (
        <div id="carDiv">
            <div className="image-container">
                <img className='imgf' src={'/pics/Model-S-tesla.jpg'} alt="Tesla Model S" />

                <div className="filtert">

                    <select
                        className="select"
                        value={selectedCompany}
                        onChange={(e) => changeCompany(e)}>
                        <option value="all" disabled>בחר חברה</option>
                        {Array.from(new Set(carModels.map(model => model.company))).map(company => (
                            <option key={company} value={company}>{company}</option>
                        ))}
                        <option value="all">איפוס</option>
                    </select>
                    <select
                        className="select"
                        value={selectedModel}
                        onChange={(e) => handleSelectChange(e, setSelectedModel)}
                    >
                        <option value="all" disabled>בחר מודל</option>
                        {Array.from(new Set(carModels.filter(model => selectedCompany == "all" || model.company == selectedCompany).map(model => model.model))).map(model => (
                            <option key={model} value={model}>{model}</option>
                        ))}
                        <option value="all">איפוס</option>
                        {thisUser && thisUser.codeTypeUser == '1' &&
                            <option value="add" >הוספת מודל</option>
                        }

                    </select>
                    <select
                        className="select"
                        value={selectedCity}
                        onChange={(e) => handleSelectChange(e, setSelectedCity)}
                    >
                        <option value="all" disabled>בחר עיר</option>

                        {/* {Array.from(new Set(cars.filter(car => (selectedCompany === "all" || getCarModel(car.CodeModel)?.company === selectedCompany) && (selectedModel === "all" || getCarModel(car.CodeModel)?.model === selectedModel)).map(car => car.City))) */}
                        {Array.from(new Set(cars.map(car => car.City)))
                            .map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        <option value="all">איפוס</option>
                    </select>
                    <div className="selectReset" onClick={toResetSelect}>
                        לאיפוס
                        <img src='/pics/reset3.png' ></img>
                    </div>
                </div>
            </div>
            <div id='fleetCars' ref={fleetCarsRef}>
                {/* {thisUser&&thisUser.codeTypeUser == '1'&&<img src='/pics/plus.png' id='plus' onClick={addCar1}></img>} */}
                {filterCars().length > 0 ? filterCars().map(element => {

                    const carModel = getCarModel(element.CodeModel);
                    const carTypeDescription = getCarType(carModel?.carTypeCode)?.desc;

                    return (
                        <div className='cardDiv1' key={element.CarCode}>

                            <div id='divImgCar'>
                                {!element.Available ? <div className='available a1'>תפוס</div> : <div className='available a2'>פנוי</div>}
                                {thisUser && thisUser.codeTypeUser == '1' && (
                                    <img className='pach' src={'/pics/delete3.png'} onClick={() => handleDelete(element.CarCode)}></img>

                                )}

                                <img src={element.CarPicture} alt={`${carModel?.company} ${carModel?.model}`} id='imgcar' />

                            </div>


                            <div id='cardDesc'>
                                <h2>{carModel?.company} {carModel?.model}</h2><br />
                                <div id='picAndDesc'>
                                    <img className='icon' src={`/pics/${getDriveType(element.codeDriveType)?.desc}.jpg`} />
                                    <div>{element.NumPlaces} מקומות | {carTypeDescription} <br />
                                        {element.Street} {element.City} <br />
                                    </div>

                                </div>
                            </div>
                            {/* <img className='delek' src={`/pics/${getDriveType(element.codeDriveType)?.desc}'png`}></img> */}
                            <button id='rentCar' onClick={() => {
                                if (thisUser) {
                                    navigate(`/card/${element.CarCode}`);
                                }
                                else {
                                    navigate('/Login/');
                                }
                            }}>{thisUser && thisUser.codeTypeUser == '1' ? "לעדכון ופרטים נוספים" : "לפרטים"}</button>



                        </div>
                    );
                }) : <p style={{ textAlign: "center", width: "100%", marginBottom: "1%" }}>לא נמצאו רכבים מתאימים</p>}
            </div>
            {thisUser && thisUser.codeTypeUser == '1' &&
                //    <Input></Input>}
                // <Test></Test>}
                <PopUp thisUser={thisUser}></PopUp>
            }
            {selectedModel == "add" && <PopUp thisUser={null}></PopUp>}
            <div className='love'>
                {thisUser && thisUser.codeTypeUser == '1' && (
                    <>
                        <p>סוגי הנעה: </p><br></br>
                        {Array.from(new Set(store.driveType.map(type => type.desc))).map((desc, index) => (
                            <div className='l' key={index}>
                                <p>{desc}</p>
                                <input
                                    type='number'
                                    placeholder={store.driveType.find(type => type.desc === desc)?.PricePerLiter}
                                    ref={(el) => priceRefs.current[desc] = el}
                                />
                                <button onClick={() => price(store.driveType.find(type => type.desc === desc))}>
                                    לעדכון
                                </button>
                            </div>
                        ))}
                    </>
                )}

            </div>
        </div>
    );
};

export default FleetCars;
