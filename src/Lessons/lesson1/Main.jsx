import { Div } from "./Div"
import { Person } from "./Person"

export const Main = () => {
    return <>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        <Div></Div>
        {/* attributes - שליחת פרמטרים לקומפוננטה */}
        {/* rules: */}
        {/* key=value */}
        {/* value - string | {any} */}
        <Person name='Shuli' age={20}></Person>
        <Person name={'Brachi'} age={15}></Person>
        <Person name='Esther' age={9}></Person>
        <Person name='Yael' age={12}></Person>
        <Person name='Leah' age={25}></Person>
    </>
}