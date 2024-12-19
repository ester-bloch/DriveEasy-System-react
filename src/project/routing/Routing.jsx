import { Route, Routes } from "react-router"
import { Login } from "../Components/Login"
import { Home } from "../Components/Home"
import { Register } from "../Components/Register"
import { Cars } from "../Components/Cars"
import { CarDetails } from "../Components/CarDetails"
import { Lend } from "../Components/Lend"
import { ToReturn } from "../Components/ToReturn"
import { Manager } from "../Components/Manager"
import { SetModel } from "../Components/ManagerSet/SetModel"
import { SetEngineType } from "../Components/ManagerSet/SetEngineTypes"
import { SetCars } from "../Components/ManagerSet/SetCars"
import { SetLends } from "../Components/ManagerSet/SetLends"
export const Routing = () => {
    return <>
        <Routes>
            <Route path="Register" element={<Register></Register>}>    </Route>
            <Route path="Cars" element={<Cars></Cars>}>    </Route>
            <Route path="CarDetails" element={<CarDetails></CarDetails>}>
                <Route path="Lend" element={<Lend></Lend>}></Route>
                <Route path="return" element={<ToReturn></ToReturn>}></Route>
            </Route>
            <Route path="Login" element={<Login></Login>}> </Route>
            <Route path="Manager" element={<Manager></Manager>}>
            <Route path="Cars" element={<SetCars></SetCars>}></Route>
            <Route path="Lends" element={<SetLends></SetLends>}></Route>
            <Route path="Model" element={<SetModel></SetModel>}></Route>
            <Route path="Engine" element={<SetEngineType></SetEngineType>}></Route>
            </Route>
            <Route path="Home" element={<Home></Home>}></Route>
            <Route path="" element={<Home></Home>}></Route>
        </Routes>
    </>
}