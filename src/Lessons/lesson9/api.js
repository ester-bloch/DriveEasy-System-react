import axios from "axios"
// npm i axios - ספריה שמבצעת קריאות שרת

export const getPeople = () => {
    // axios.method(url, body)
    return axios.get(`https://localhost:7119/api/Person`)
}

export const getByYearAndChildren = (year, num) => {
    // axios.method(url, body)
    return axios.get(`https://localhost:7119/api/Person/GetByYearBornAndNumChildren?year=${year}&n=${num}`)
}