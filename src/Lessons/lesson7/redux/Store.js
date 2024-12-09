import { createStore } from "redux";
import { reducer } from "./Reducer";

// createStore - יוצרת מחסן
// מכילה את כל חלקי הרידקס
// זה מה שיהיה מוכר בקומפוננטות
// מקבלת את הרדיוסר
// מסומנת בקו - יש שיטה מתקדמת יותר
// redux-toolkit
export const store = createStore(reducer);