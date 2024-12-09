import { BrowserRouter } from "react-router-dom"
import { Routing } from "./Routing"
import { Nav } from "./Nav"
import { SelectMain } from '../lesson3/Select/SelectMain'

export const Main = () => {
    return <>
        <header></header>
        {/* תגית שטוענת בפועל רק את הקומפוננטה הרצויה */}
        <BrowserRouter>
            <Nav></Nav>
            <main>
                {/* היכן שיהיה כתוב הראוטינג - שם יטענו הקומפוננטות */}
                <Routing></Routing>
            </main>
            <article></article>
        </BrowserRouter>
        <footer></footer>
    </>
}