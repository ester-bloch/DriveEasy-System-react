// התקנת רידקס טולקיט
// npm i @reduxjs/toolkit

// שיטה ישנה לייבוא
// const { createSlice } = require("@reduxjs/toolkit")
import { createSlice } from "@reduxjs/toolkit"

// immer רידקס טולקיט מבוסס על הספריה 
// ( הפונקציה שאותה מציבים ברדיוסר, מתוך הספריה הנל - produce גם הפונקציה )
// הספריה  מטפלת במשתנים קונסטיים
// מעתיקה ומציבה מחדש
// useState
// הרווח משימוש בספריה - למתכנת הכתיבה רגילה 
// מאחורי הקלעים מתבצעת העתקה

const initialState = {
    value: 0
}

// הגדרות על הסלייס
// שם הסלייס
// הסטייט שעליו נפעיל את הפונקציות
// רדיוסר - מכיל את כל הפעולות
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // כל פונקציה מקבלת
        // state - הסטייט שהתקבל בפרמטר הקודם
        // action - הרדיוסר תופס את הפעולה שהדיספצר שיגר

        // מקבל את שם הפונקציה action כל 
        increase: (state, action) => {
            state.value++
            // immer ללא שימוש בספריה 
            // state = { ...state, value: state.value + 1 }
        },
        decrease: (state, action) => {
            state.value -= 1
        },
        increaseBy: (state, action) => {
            state.value += action.payload
        }
    }
})

// ייצוא
// 1. actions
// export const actions = counterSlice.actions
export const { increase, decrease, increaseBy } = counterSlice.actions
// 2. reducer
export default counterSlice.reducer