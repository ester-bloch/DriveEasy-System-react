import { useSelector } from "react-redux"

export const Student3=()=>{

    let s= useSelector(store=>store.currentStudent)
    return <>{s&&<div>
       <h5>Grade: {s.studies.Grade} class: {s.studies.class}</h5> 
      </div>} </>
} 
