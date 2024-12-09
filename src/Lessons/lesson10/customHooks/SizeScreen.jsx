import { useEffect, useState } from "react"
import { useSizeScreen } from "./useSizeScreen"

export const ShowSize = () => {

    // const [sizeScreen, setSizeScreen] = useState(window.innerWidth)

    // useEffect(() => {
    //     window.addEventListener('resize', () => { setSizeScreen(window.innerWidth) })
    // }, [])

    const sizeScreen = useSizeScreen()

    return <>
        {/* <h1>{sizeSceen}</h1> */}
        {sizeScreen > 400 ? <h1>wide screen</h1>
            : <h4>narrow screen</h4>}
    </>
}

export const ShowArrBySize = () => {

    const arr = [
        'aaa',
        'bbb',
        'ccc',
        'ddd',
        'eee',
        'fff',
        'ggg'
    ]

    // const [sizeScreen, setSizeScreen] = useState(window.innerWidth)

    // useEffect(() => {
    //     window.addEventListener('resize', () => { setSizeScreen(window.innerWidth) })
    // }, [])

    const sizeScreen = useSizeScreen()

    return <>

        {sizeScreen > 400 ? arr.map(x => <p key={x}>{x}</p>)
            : <><p>{arr[0]}</p><p>{arr[1]}</p></>}
    </>
}