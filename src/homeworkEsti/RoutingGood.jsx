import { Route, Routes } from "react-router"
import { Form } from "./Form"
import { Card } from "./Card"
export const RoutingGood=()=>{
    console.log("hi i'm in Routing")
    return<>
        <Routes>
            <Route path="Form" element={<Form></Form>}></Route>
            <Route path="Card/:setniman" element={<Card></Card>}></Route>
            {/* /:[parameter_name] - שליחת פרמטרים בניתוב */}
            <Route path="" element={<Form></Form>}></Route>
                {/* הגדרת ניתוב של ילד בין התגיות של האב */}
                {/* <Route path="stam" element={<Stam></Stam>}></Route></Route> */}
        </Routes>
        </>
}