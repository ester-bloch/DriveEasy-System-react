import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, desc: 'חלות', amount: 20 },
    { id: 2, desc: 'דגים', amount: 0 },
    { id: 3, desc: 'סלטים', amount: 10 },
    { id: 4, desc: 'קוגל', amount: 15 },
]

// const remove = (state, action) => {
//     let index = state.findIndex(p => p.id == action.payload)
//     state.splice(index, 1)
// }

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        remove: (state, action) => {
            let index = state.findIndex(p => p.id == action.payload)
            state.splice(index, 1)
        }
    }
})

export const { remove } = productSlice.actions

export default productSlice.reducer

// שליפות שמבצעות סינונים
// אין אפשרות לקבל פרמטרים
// הגישה היא  דרך שם הסלייס - ניגש לסטייט שמשויך אליו
export const selectAvailable = (state) => state.product.filter(p => p.amount > 0)