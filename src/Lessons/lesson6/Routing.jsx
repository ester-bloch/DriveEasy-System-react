// התקנות
// npm i react-router
// npm i react-router-dom

import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { Login } from "./Login"
import { Welcome } from "./Welcome"
import { Stam } from "./Stam"
import { OtherStam } from "./OtherStam"

// router - נתב
// routing - ניתוב
// הגדרות לניתובים של הפרויקט
// למה יש צורך בניתוב???
// איך הסתדרנו עד היום?
// גרמנו לקומפוננטה להיות מוצגת או לא...
// SPA - בריאקט דמה ניתוב
// רווח נוסף למשתמש - הסטוריה


// grid 
// nav - טעינה כל הזמן
// footer - כל הזמן
// main - משחק עם הניתובים
export const Routing = () => {
    // Routing - הצהרות על ניתובים

    return <>

        {/* תגית עוטפת של כמה ניתובים */}
        <Routes>
            {/* הגדרה של ניתוב בודד */}
            <Route path="home" element={<Home></Home>}>
                {/* הגדרת ניתוב של ילד בין התגיות של האב */}
                <Route path="stam" element={<Stam></Stam>}>
                    <Route path="other" element={<OtherStam></OtherStam>}></Route>
                </Route>
            </Route>
            <Route path="login" element={<Login></Login>}></Route>
            {/* /:[parameter_name] - שליחת פרמטרים בניתוב */}
            <Route path="welcome/:name/:password" element={<Welcome></Welcome>}></Route>
            {/* ניתוב ברירת מחדל */}
            <Route path="" element={<Home></Home>}>
                {/* הגדרת ניתוב של ילד בין התגיות של האב */}
                <Route path="stam" element={<Stam></Stam>}></Route></Route>
        </Routes>
    </>
}