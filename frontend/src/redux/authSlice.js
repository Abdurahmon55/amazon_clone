import { createSlice } from '@reduxjs/toolkit';

const autSlice=createSlice({
    name:'auth',
    initialState:{
        data:[],
        authId:0,
    },
    reducers:{
        getAuth: (state, action)=>{
            state.data=action.payload
        }, 
        getAuthId: (state, action)=>{
            state.data=action.payload
        }
    }
})

export const {getAuth, getAuthId}=autSlice.actions
export const selectAuth=(state)=>state.auth.data
export const selectAuthId=(state)=>state.auth.authId
export default autSlice.reducer