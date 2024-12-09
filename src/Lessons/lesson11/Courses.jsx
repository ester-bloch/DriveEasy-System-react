import { useEffect } from "react"
import { getCourses } from "./api"
import { useDispatch, useSelector } from "react-redux"
import { setList } from "./redux/courseSlice"

export const Courses = () => {

    const dispatch = useDispatch()

    const list = useSelector(state => state.course.list)

    useEffect(() => {
        getCourses()
            .then(x => {
                // x.data -  הנתונים שנשלפו - התגובה מהשרת
                dispatch(setList(x.data))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return <>
        {list && list.map(x => <div>
            <p>{x.coursnamename}</p>
            <p>{x.type}</p>
            <p>{x.departName}</p>
            <p>~~~~~~~~~~~~~~~~~~~~~~~</p>
        </div>)}
    </>
}