import { Provider } from "react-redux"
import store from "../redux/Store"
import { Routing } from "../Routing/Routing"
import { BrowserRouter } from "react-router-dom"
import { Nav } from "../Routing/Nav"
// import myStore from "./redux/Store"

export const Main = () => {
    return <>
        {/* כל קומפוננטה שתהיה טעונה בתוך הספק תכיר את הסטור */}
        <Provider store={store}>
            <BrowserRouter>
                <Nav></Nav>
                <Routing></Routing>
            </BrowserRouter>
        </Provider>
    </>
}