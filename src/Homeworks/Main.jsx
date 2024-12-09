import { BrowserRouter } from "react-router-dom"
import { Nav } from "./routing/Nav"
import { Routing } from "./routing/Routing"
import "./routing/Style.css"
import { Provider } from "react-redux"
import { store } from "./redux/store"
//export const Products = () => {
export const Main= () => {
return <>
<Provider store={store}>
<BrowserRouter>
    <Nav></Nav>
    <Routing></Routing>
</BrowserRouter>
</Provider>
</>
}

 