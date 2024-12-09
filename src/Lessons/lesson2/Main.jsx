import { Child } from "./Child"
import { List } from "./List"
import { Person } from "./Person"
import swal from "sweetalert"

export const Main = () => {
    return <>
        {/* <Person name={'Avigail'} age={20}></Person> */}
        {/* <Person age={20}></Person> */}
        {/* <Person name={'Efrat'}></Person> */}
        {/* <Person></Person> */}

        {/* <Child name={'יהודה'} age={6}></Child> */}
        {/* <Child name={'דוד'} age={12}></Child> */}
        {/* <Child name={'אפרים'} age={1}></Child> */}
        {/* <Child name={'בנימין'} age={10}></Child> */}

        <List></List>
    </>
}