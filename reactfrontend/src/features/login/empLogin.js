import { createSlice } from '@reduxjs/toolkit'

export const empLoginSlice = createSlice({
    name: 'emplogin',
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
export const { increment, decrement, incrementByAmount } = empLoginSlice.actions

export default empLoginSlice.reducer
