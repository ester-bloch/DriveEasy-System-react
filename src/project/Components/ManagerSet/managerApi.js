import axios from "axios"
const baseUrl = `https://localhost:7204/api`
export const getCarsFromSql = () => {
    return axios.get(`${baseUrl}/Cars`)
}
export const removeCarFromSql = (id) => {
    //https://localhost:7204/api/Cars?id=120

    return axios.delete(`${baseUrl}/Cars?id=${id}`)
}
export const updateCarInSql = (id,car) => {
    //https://localhost:7204/api/Cars?id=785
    return axios.put(`${baseUrl}/Cars?id=${id}`,car)
}
export const addCarToSql = (car) => {
    return axios.post(`${baseUrl}/Cars`,car)
}
export const getEngineTypesFromSql = () => {
    return axios.get(`${baseUrl}/EngineTypes`)
}
//https://localhost:7204/api/EngineTypes?id=1
export const updateEngineTypesInSql = (id,newEngine) => {
    return axios.put(`${baseUrl}/EngineTypes?id=${id}`,newEngine)
}

export const getCarModelsFromSql = () => {
    return axios.get(`${baseUrl}/CarModels`)
}
export const getCarTypesFromSql = () => {
    return axios.get(`${baseUrl}/CarTypes`)

}
export const addCarModelToSql = (carModel) => {
    return axios.post(`${baseUrl}/CarModels`,carModel)
}
export const updateLendInSql = (id) => {
    return axios.put(`${baseUrl}/Lends/${id}`)
}
export const getLendsFromSql = () => {
    return axios.get(`${baseUrl}/Lends`)
}
export const getReturnsFromSql = () => {
    //https://localhost:7204/api/Returns
    return axios.get(`${baseUrl}/Returns`)
}
