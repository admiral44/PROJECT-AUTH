import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { allinfoPost } from '../serves/allinfoPost'

import { empRegSlice } from '../features/reg/registrationSlice'
import { empLoginSlice } from '../features/login/empLogin'

import authReducer from '../reducers/authReducer'



export const store = configureStore({
    reducer : {
        EmpRegSlice : empRegSlice,
        EmpLoginSlice : empLoginSlice,
        [allinfoPost.reducerPath] : allinfoPost.reducer,

        user : authReducer,
    },

    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allinfoPost.middleware)
})

setupListeners(store.dispatch)
