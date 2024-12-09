import { Route, Routes } from "react-router-dom"
import { Login } from "./Login"
import { Register } from "./Register"
import FleetCars from './fleetCars'
// import FleetCars from "./myFleetCars"
import { Home } from "./Home"
import { Card } from './Card'
import RentInformation from "./RentInormation"
export const Routing = () => {

    // הצהרות על ניתובים
    return <>
        {/* תגית עוטפת לכל הניתובים */}
        <Routes>
            {/* הצהרה על ניתוב בודד */}
            {/* path - url ניתוב - מה נכתוב בשורת ה */}
            {/* element - הקומפוננטה שנטען עבור הניתוב */}
            <Route path="register" element={<Register></Register>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="fleetCars" element={<FleetCars></FleetCars>}>  </Route>
            <Route path="card/:car" element={<Card></Card>}></Route>
            <Route path="rentInformation" element={<RentInformation></RentInformation>}></Route>
        </Routes>
    </>
}