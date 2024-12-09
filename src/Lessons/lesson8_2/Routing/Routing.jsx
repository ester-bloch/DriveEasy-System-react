import { Route, Routes } from "react-router"
import { Products } from "../Components/Products"
import { Home } from "../Components/Home"
import { Login } from "../Components/Login"
import { Details } from "../Components/Details"

export const Routing = () => {
    return <>
        <Routes>
            <Route path="home" element={<Home></Home>}> </Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="products" element={<Products></Products>}>
                <Route path="details" element={<Details></Details>}></Route>
            </Route>
            <Route path="" element={<Home></Home>}></Route>
        </Routes>
    </>
}