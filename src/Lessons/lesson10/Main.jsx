import { useState } from "react"
import { Comp } from "./Comp"

export const Main = () => {

    const [flag, setFlag] = useState(false)

    return <>
        <button onClick={() => setFlag(!flag)}>show / hide</button>
        {flag && <Comp></Comp>}
    </>
}