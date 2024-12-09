import { Provider } from "react-redux";
import store from "./redux/Store";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Nav } from './Nav';
import { Routing } from "./Routing";
import './style.css';
import { useEffect, useState } from "react";

export const Main = () => {
    // const [flag,setFlag]=useState(true);
    return (<>
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
                <Routing />
                <Navigate></Navigate>
            </BrowserRouter>
        </Provider>
    </>
    );
};
const Navigate = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/home');
    }, []);
    // return <>

    // </>
}