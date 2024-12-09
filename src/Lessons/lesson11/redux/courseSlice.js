import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    list: [],
    currentCourse: {}
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCurrent: (state, action) => {
            state.currentCourse = action.payload
        },
        setList: (state, action) => {
            state.list = action.payload
        }
    }
})

export const { setCurrent, setList } = courseSlice.actions
// 2. reducer
export default courseSlice.reducer