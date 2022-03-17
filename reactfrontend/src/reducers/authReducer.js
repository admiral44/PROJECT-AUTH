import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    token : "",
    loading : false,
    error: "",
}

export const registerUser = createAsyncThunk(
    'registeruser',
    async ( body ) => {
        // const result = await reglog('/regorgemp', body)
        // return result
        fetch('/regorgemp',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : body,
        })
        return body
    }
)

const authReducer = createSlice({
    name : "user",
    initialState: initialState,
    reducers : {},
    extraReducers: {
        [registerUser.fulfilled] : ( state, action ) => {
            state.loading = false
            if(action.payload.error){
                state.error = action.payload.error
            }
        },
        [registerUser.pending] : (state, action) => {
            state.loading = true
        }
    },
})

export default authReducer.reducer
