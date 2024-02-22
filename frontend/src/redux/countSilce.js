import { createSlice } from '@reduxjs/toolkit';

const countSilce=createSlice({
    name:'count',
    initialState:{
        number:0,
        element:0,
        title:''
    },
    reducers:{
        getNumber: (state, action)=>{
           state.number += action.payload
        },
        itemCount:(state, action)=>{
            state.element=action.payload
        },
        setTitle:(state, action)=>{
            state.title=action.payload
        }
    }
})

export const {getNumber, itemCount, setTitle}=countSilce.actions
export const selectCount=(state)=>state.count.number
export const selectItem=(state)=>state.count.element
export const selectTitle=(state)=>state.count.title
export default countSilce.reducer