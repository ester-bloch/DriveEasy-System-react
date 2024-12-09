import React from "react"
// import React, { useState } from "react"
// import Comp4, { Comp1, Comp2, Comp3 } from "./Exports"
import Comps from './Exports'

export const Main = () => {

    // React
    // React.useState

    return <>
        <Comps.Comp1></Comps.Comp1>
        <Comps.Comp2></Comps.Comp2>
        <Comps.Comp3></Comps.Comp3>
        <Comps.Comp4></Comps.Comp4>
    </>
}