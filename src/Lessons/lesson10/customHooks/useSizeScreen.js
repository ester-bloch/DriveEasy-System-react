import { useEffect, useState } from "react"

export const useSizeScreen = () => {

    const [sizeScreen, setSizeScreen] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => { setSizeScreen(window.innerWidth) })
    }, [])

    return sizeScreen
}