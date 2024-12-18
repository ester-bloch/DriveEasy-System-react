import axios from "axios"
const baseUrl = `https://localhost:7204/api`
export const getCarsFromSql = () => {
    return axios.get(`${baseUrl}/Cars`)
}
export const getThisUser = (name,password) => {
    return axios.get(`${baseUrl}/Users/${name}/${password}`)
}
/*
 * 
 axios.post("https://localhost:7256/api/Person",
                        { id: "6", name: "חיים", yearBorn: "2000", numChildren: "4" }).
                then((result) =>
                {//אם הייתה שגיאה בשרת אז לא היינו מגיעות לפה ויש לטפל בעתיד בשגיאות
                document.getElementById("results").innerHTML = "ההוספה בוצעה"
            });
 */
            export const AddUserToSql = (newUser) => {
                return axios.post(`${baseUrl}/Users`,newUser)
            }
            export const AddLendToSql = (newLend) => {
                console.log(`from AddLendToSql `)
                console.log(newLend)
                return axios.post(`${baseUrl}/Lends`,newLend)
            }

export const update=(id, course)=>{
    return axios.post(`${baseUrl}/Courses/?id=${id}`, course)
}
// function showData() {
//     //getשימוש בקריאת שרת של
//     axios.get("https://localhost:7119/api/Person").
//         then((result) => {

//             document.getElementById("results").innerHTML = JSON.stringify(result.data)
//         });
// }