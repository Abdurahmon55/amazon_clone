import { createSlice } from '@reduxjs/toolkit';

const autSlice=createSlice({
    name:'auth',
    initialState:{
        data:[]
    },
    reducers:{
        getAuth: (state, action)=>{
            state.data=action.payload
        }
    }
})

export const {getAuth}=autSlice.actions
export const selectAuth=(state)=>state.auth.data
export default autSlice.reducer