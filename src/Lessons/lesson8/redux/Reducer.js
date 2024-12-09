// immer - ספריה שמאפשרת טיפול במשתנים קונסטיים
import { produce } from 'immer';
import { initialState } from './State';

// reducer - מפעיל את הפעולות בפועל על הסטייט
// לא שם שמור!
// execute - produce
// מקבלת שני פרמטרים:
// callback פונקציית 
// פונקציה שמתקבלת כפרמטר לפונקציה אחרת
// הפונקציה החיצונית מפעילה את הפוקנציה הפנימית
// כל עוד הפונקציה הפנימית לא הסתיימה הפונקציה החיצונית לא מסתיימת
// callback - מחזירה תשובה
// הפונקציה הפנימית מקבלת שני פרמטרים:
// 1. state - הסטייט שעליו נרצה להפעיל את הפעולות
// 2. action - הפעולה שאותה רוצים להפעיל
// הפרמטר השני שהפונקציה החיצונית מקבלת - הסטייט שיצרנו
// הפונקציה החיצונית היא זאת שמציבה את הסטייט כפרמטר בפונקציה הפנימית
const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload;
            break;
        case 'SET_CURRENT_PRODUCT':
            // קבלנו קוד מוצר
            // חיפשנו
            let p = state.products.find(x => x.id == action.payload)
            // הצבנו במוצר הנוכחי
            state.currentProduct = p
            break;
        case 'ADD_PRODUCT':
            // אם נרצה לערוך בדיקות ...
            state.products.push(action.payload);
            break;
        case 'REMOVE_PRODUCT':
            let index = state.products.findIndex(p => p.id == action.payload);
            state.products.splice(index, 1)
            break;
        case 'UPDATE_PRICE':
            let product = state.products.find(p => p.id == action.payload.id)
            product.price = action.payload.price
        default:
            break;
    }
}, initialState)

export default reducer


function func(x, y, f) {
    if (f(x) > y) {
        console.log(x);
    }
    else console.log(y);
}

function func1(num) {
    return num * num
}

func(5, 45, (num) => {
    return num * num;
})

// 45

func(10, 60, (num) => {
    return num / 5;
})

// 60