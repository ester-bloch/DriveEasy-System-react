import axios from "axios"
const baseUrl = `https://localhost:7204/api`
export const getCarsFromSql = () => {
    return axios.get(`${baseUrl}/Cars`)
}
export const removeCarFromSql = (id) => {
    return axios.delete(`${baseUrl}/Cars${id}`)
}
export const updateCarInSql = (id) => {
    return axios.put(`${baseUrl}/Cars/${id}`)
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
