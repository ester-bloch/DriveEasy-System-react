import axios from "axios"

const baseUrl = `https://localhost:7204/api
`
export const getCarsFromSql = () => {
    return axios.get(`${baseUrl}/Cars`)
}

export const update=(id, course)=>{
    return axios.post(`${baseUrl}/Courses/?id=${id}`, course)
}
function showData() {
    //getשימוש בקריאת שרת של
    axios.get("https://localhost:7119/api/Person").
        then((result) => {

            document.getElementById("results").innerHTML = JSON.stringify(result.data)
        });
}