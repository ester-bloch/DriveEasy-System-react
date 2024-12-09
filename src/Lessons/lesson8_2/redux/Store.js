import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

// יצירת רדיוסר ראשי
// לשלב רדיוסרים - combineReducers הפונקציה 
// מקבלת אובייקט ג'סון שיכיל את הרדיוסרים
const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
})

const store = createStore(rootReducer);
export default store;