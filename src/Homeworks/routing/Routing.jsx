import { Route, Routes } from "react-router"
import { Students } from "./Students"
import { Login } from "./Login"
import { Students2 } from "./Students2"
import { Student3 } from "./Student3"
export const Routing =()=>{
    return <>
    <Routes>
    <Route path="Students" element={<Students></Students>}>
        <Route path="FamilyDetails" element={<Students2></Students2>}>
             <Route path="StudyDetails" element={<Student3></Student3>}></Route>
        
        </Route>
    </Route>
    <Route path="Login" element={<Login></Login>}></Route>
    {/* <Route path="" element={<Students></Students>}></Route> */}
    </Routes>
     </>
}