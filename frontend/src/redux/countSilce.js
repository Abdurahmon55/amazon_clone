import { createSlice } from '@reduxjs/toolkit';

const countSilce=createSlice({
    name:'count',
    initialState:{
        number:0,
        element:0
    },
    reducers:{
        getNumber: (state, action)=>{
           state.number += action.payload
        },
        itemCount:(state, action)=>{
            state.element=action.payload
        }
    }
})

export const {getNumber, itemCount}=countSilce.actions
export const selectCount=(state)=>state.count.number
export const selectItem=(state)=>state.count.element
export default countSilce.reducer