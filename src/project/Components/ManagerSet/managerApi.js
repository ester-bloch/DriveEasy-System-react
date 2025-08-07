import axiosInstance from "../../utils/axiosInterceptor"
const baseUrl = `https://localhost:7204/api`
export const getCarsFromSql = () => {
    return axiosInstance.get(`/Cars`)
}
export const removeCarFromSql = (id) => {
    return axiosInstance.delete(`/Cars?id=${id}`)
}
export const updateCarInSql = (id,car) => {
    return axiosInstance.put(`/Cars?id=${id}`,car)
}
export const addCarToSql = (car) => {
    return axiosInstance.post(`/Cars`,car)
}
export const getEngineTypesFromSql = () => {
    return axiosInstance.get(`/EngineTypes`)
}

export const updateEngineTypesInSql = (id,newEngine) => {
    return axiosInstance.put(`/EngineTypes?id=${id}`,newEngine)
}

export const getCarModelsFromSql = () => {
    return axiosInstance.get(`/CarModels`)
}
export const getCarTypesFromSql = () => {
    return axiosInstance.get(`/CarTypes`)

}
export const addCarModelToSql = (carModel) => {
    return axiosInstance.post(`/CarModels`,carModel)
}
export const updateLendInSql = (id) => {
    return axiosInstance.put(`/Lends/${id}`)
}
export const getLendsFromSql = () => {
    return axiosInstance.get(`/Lends`)
}
export const getReturnsFromSql = () => {
    return axiosInstance.get(`/Returns`)
}
