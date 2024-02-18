import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'
import countReducer from './countSilce'
const store = configureStore({
    reducer: {
        auth:authReducer,
        count:countReducer
    }
})
export default store