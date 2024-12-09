// הגדרה של פעולות שנרצה להפעיל על הסטייט
// פעולות - הוספה, עדכון, מחיקה
// שליפה תתבצע בדרך אחרת

// הגדרת פעולת - אובייקט ג'סון שמכיל שני מפתחות
// סוג - שם לפעולה
// פרמטרים

// הוספת מוצר
const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}
// מחיקת מוצר
const removeProduct = (id) => {
    return { type: 'REMOVE_PRODUCT', payload: id }
}
// הצבת היוזר הנוכחי
const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}
// עדכון מחיר למוצר
const updatePrice = (id, price) => {
    return { type: 'UPDATE_PRICE', payload: { id, price } }
}