import { useSelector } from "react-redux"

export const User=()=>{
    let currentUser = useSelector(store => store.currentUser)
    let text =currentUser==null ||currentUser==undefined ||currentUser.name==undefined ||currentUser==""? "😏אורח":currentUser.name+"😃"
    return<>
    <label  id={"UserAside"}  className="white"> {text} שלום</label> 
    </>
}