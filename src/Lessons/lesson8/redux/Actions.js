// הגדרה של פעולות שנרצה להפעיל על הסטייט
// פעולות - הוספה, עדכון, מחיקה
// שליפה תתבצע בדרך אחרת
// useSelector

// הגדרת פעולת - אובייקט ג'סון שמכיל שני מפתחות
// סוג - שם לפעולה
// פרמטרים

// הוספת מוצר
export const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}
// מחיקת מוצר
export const removeProduct = (id) => {
    return { type: 'REMOVE_PRODUCT', payload: id }
}
// הצבת היוזר הנוכחי
export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}
// הצבת היוזר הנוכחי
export const setCurrentProduct = (id) => {
    return { type: 'SET_CURRENT_PRODUCT', payload: id }
}
// עדכון מחיר למוצר
export const updatePrice = (id, price) => {
    return { type: 'UPDATE_PRICE', payload: { id, price } }
}