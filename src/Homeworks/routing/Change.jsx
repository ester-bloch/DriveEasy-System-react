import { useSelector } from "react-redux"

export const Change=()=>{
    const changeAge=()=>{
        let s= useSelector(store=>store.currentStudent)
        

    }
    return <>
    <input type="text" placeholder="הכנס גיל חדש" onBlur={changeAge()}></input>
    </>
}