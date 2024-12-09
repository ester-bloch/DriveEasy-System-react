import axios from "axios"

const baseUrl = `https://localhost:7227/api`

export const getCourses = () => {
    return axios.get(`${baseUrl}/Courses`)
}

export const update=(id, course)=>{
    return axios.post(`${baseUrl}/Courses/?id=${id}`, course)
}
