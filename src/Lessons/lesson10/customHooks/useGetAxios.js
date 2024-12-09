import axios from "axios"
import { useEffect, useState } from "react"

export const useGetAxios = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        axios.get(url)
            .then(x => {
                setData(x.data)
            })
            .catch(err => {
                setError(err.message);
            })
    }, [url])

    return { data, error }
}