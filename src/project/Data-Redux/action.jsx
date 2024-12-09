import { json } from "react-router"

export const LoginThisUser = (user) => {
    console.log('reLOGINThidUsergister לאקשן נכנסתי ------------')
    console.log(`user:${JSON.stringify(user)}`)
    console.log(`user.name:${user.name}`)
    return { type: 'LOGIN', payload: user }
}

export const addUser = (user) => {
    console.log('register לאקשן נכנסתי ------------')
    return { type: 'ADD_USER', payload: user }
}
export const setCarsFromServer = (data) => {
    console.log('setCars לאקשן נכנסתי ------------')
    return { type: 'SET_CARS', payload: data }
}
export const setCurrentCar = (car) => {
    console.log('setCurrentCar לאקשן נכנסתי ------------')
    return { type: 'SET_CURRENT_CAR', payload: car }
}