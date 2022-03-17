import { createSlice } from '@reduxjs/toolkit'

export const empRegSlice = createSlice({
    name: 'empreg',
    initialState: {
        regInput: "",
    },
    reducers: {
        increment: (state) => {
            state.regInput += 1
        },
        decrement: (state) => {
            state.regInput -= 1
        },
        incrementByAmount: (state, action) => {
            state.regInput += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = empRegSlice.actions

export default empRegSlice.reducer
