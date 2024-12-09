export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}
export const addCar = (car) => {
    return { type: 'ADD_CAR', payload: car }
}
export const addRent = (rent) => {
    return { type: 'ADD_RENT', payload: rent }
}
export const addReturn = (return1) => {
    return { type: 'ADD_RETURN', payload: return1 }
}
export const addModel = (model) => {
    return { type: 'ADD_MODEL', payload: model }
}
export const setThisUser = (user) => {
    return { type: 'SET_THISUSER', payload: user }
}
export const removeCar = (id) => {
    return { type: 'REMOVE_CAR', payload: id }
}
export const setAvailable = (car) => {
    // debugger
    return { type: 'SET_AVAILABLE', payload:car }
}
// export const setCity=(car,city)=>{
//     return { type:'SET_CITY',payload:car,p1:city}
// }
// export const setStreet=(car,Street)=>{
//     return { type:'SET_STREET',payload:car,p1:Street}
// }
export const setCar=(car,field,value)=>{
    debugger
    return{type:'SET_CAR',payload:{car,field,value}}
}
export const setdriveType=(type,PricePerLiter)=>{
    return { type:'SET_DRIVER_TYPE',payload:{type,PricePerLiter}}
}


