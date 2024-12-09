import { produce } from 'immer';
import { productState } from './productState';

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_PRODUCT':
            // קבלנו קוד מוצר
            // חיפשנו
            let p = state.list.find(x => x.id == action.payload)
            // הצבנו במוצר הנוכחי
            state.current = p
            break;
        case 'ADD_PRODUCT':
            // אם נרצה לערוך בדיקות ...
            state.list.push(action.payload);
            break;
        case 'REMOVE_PRODUCT':
            let index = state.list.findIndex(p => p.id == action.payload);
            state.list.splice(index, 1)
            break;
        case 'UPDATE_PRICE':
            let product = state.list.find(p => p.id == action.payload.id)
            product.price = action.payload.price
        default:
            break;
    }
}, productState)

export default reducer