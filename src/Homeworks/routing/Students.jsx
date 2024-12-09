import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Outlet } from "react-router"

export const Students=()=>{
let students=useSelector(store=>store.students)
const dispatch=useDispatch()
const navigate = useNavigate()

const showStudent1=(name)=>{
     dispatch( { type: 'SET_CURRENT_STUDENT', payload: name})
      navigate(`FamilyDetails`)
}
return<>
{console.log(students)}
    {students && students.map(s=>
        <div>
        <p key='aaaa' >name: {s.name}</p>
        <p key='bbbbb' >age: {s.age}</p>
        <button onClick={()=>showStudent1(s.name)}>פרטים משפחתיים</button>
        </div>
        
    )}
    <Outlet></Outlet>
</>
}