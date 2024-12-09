import { useState } from "react";
import { Inputname } from "./InputName";
import { SelectCity } from "./SelectCity";
import { SelectHotel } from "./SelectHotel";
import { InputNum } from "./InputNum";
import { Details } from "./Details";
import { Select } from "./Select";
import swal from 'sweetalert'

export const SelectMain = () => {

    // :הזמנת מקומות לנופש
    // הכנסת שם משתמש
    // בחירת עיר
    // בחירת מלון
    // הכנסת מס' מקומות
    // הצגת פרטי ההזמנה

    const [name, setName] = useState('Annonymous')
    const [selectedCity, setSelectedCity] = useState()
    const [selectedHotel, setSelectedHotel] = useState()
    const [num, setNum] = useState()

    const dictionary = {
        Jerusalem: ['Ramada', 'David', 'Shalom', 'Jerusalem Gates', 'Yirmiyau 66'],
        DeadSea: ['Royal', 'Daniel'],
        Tiberia: ['Tzipori', 'Kinorot', 'Bali']
    }

    const cities = Object.keys(dictionary)
    console.log(cities);
    // dictionary | json
    // const person = { name: 'Sara', age: 20 }
    // // object.key
    // person.name // Sara
    // // object['key']
    // person['name'] // Sara
    // // let x = 'name'
    // // object[x]
    // let x = 'name'
    // person[x] // Sara
    // for (const key in person) {
    //     person[key] // Sara, 20
    // }

    // dictionary.Jerusalem
    // dictionary['Jerusalem']
    // let city = 'Jerusalem'
    // dictionary[city]

    const hotels = dictionary[selectedCity]
    console.log(hotels);

    // const send = () => {
    //     swal("Hello" + name, "Hi, nice to meet you!", 'info')
    // }

    // ניתן לשלוח פונקציה עוטפת לפונקציית שינוי המשתנה
    // במקרה שרוצים להפעיל כמה פעולות או לבצע בדיקות וכו
    const validName = (value) => {
        if (value.length > 2) {
            setName(value)
        }
    }

    return <>
        {console.log('select')}
        <h2>Hello {name},</h2>
        {name == 'Annonymous' && <Inputname setName={validName}></Inputname>}
        {/* {name != 'Annonymous' && !selectedCity && <SelectCity cities={cities} set={setSelectedCity}></SelectCity>} */}
        {name != 'Annonymous' && !selectedCity && <Select list={cities} set={setSelectedCity} text={'city'}></Select>}
        {/* {selectedCity && !selectedHotel && <SelectHotel list={hotels} setHotel={setSelectedHotel}></SelectHotel>} */}
        {selectedCity && !selectedHotel && <Select list={hotels} set={setSelectedHotel} text={'hotel'}></Select>}
        {selectedHotel && !num && <InputNum setNum={setNum}></InputNum>}
        {num && <Details num={num} city={selectedCity} hotel={selectedHotel}></Details>}
        {/* <button onClick={send}>send</button> */}
    </>
}