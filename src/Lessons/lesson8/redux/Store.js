import { createStore } from "redux";
// כאשר מייבאים אובייקט ברירת מחדל של קובץ - ניתן לקרוא לו בכל שם
import reducer from "./Reducer";

// createStore - יוצרת מחסן
// מכילה את כל חלקי הרידקס
// זה מה שיהיה מוכר בקומפוננטות
// מקבלת את הרדיוסר
// מסומנת בקו - יש שיטה מתקדמת יותר
// redux-toolkit
const store = createStore(reducer);
export default store;