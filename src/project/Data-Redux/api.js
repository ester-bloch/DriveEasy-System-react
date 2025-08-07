import axiosInstance from "../utils/axiosInterceptor"
const baseUrl = `https://localhost:7204/api`
export const getCarsFromSql = () => {
    return axiosInstance.get(`/Cars`)
}
export const getThisUser = (name,password) => {
    return axiosInstance.get(`/Users/${name}/${password}`)
}

export const AddUserToSql = (newUser) => {
    return axiosInstance.post(`/Users`,newUser)
}
            export const AddLendToSql = (newLend) => {
                return axiosInstance.post(`/Lends`,newLend)
            }
            export const AddReturnToSql = (newReturn) => {
                console.log(`from AddReturnToSql :`)
                console.log(newReturn)
                return axiosInstance.post(`/Returns`,newReturn)
            }

export const update=(id, course)=>{
    return axiosInstance.post(`/Courses/?id=${id}`, course)
}