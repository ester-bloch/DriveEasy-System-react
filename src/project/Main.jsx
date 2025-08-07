import { BrowserRouter } from "react-router-dom"
import { Routing } from "./routing/Routing"
import { Provider } from "react-redux"
import { Nav } from "./routing/Nav"
import { store } from "./Data-Redux/store"
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

 