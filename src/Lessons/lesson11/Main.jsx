import { Provider } from "react-redux"
import store from "./redux/store"
import { PresentCounter } from "./PresentCounter"
import { Products } from "./Products"
import { Courses } from "./Courses"

export const Main = () => {
    return <>
        <Provider store={store}>
            {/* <PresentCounter></PresentCounter> */}
            {/* <Products></Products> */}
            <Courses></Courses>
        </Provider>
    </>
}