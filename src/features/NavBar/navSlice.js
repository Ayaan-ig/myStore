import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'navbar',
    initialState:{
        showItems : 0
    },
    reducers:{
        closeList: (state)=>{
            state.showItems = false;
        },
        openList : (state,action)=>{
            state.showItems = action.payload;
        }
    }
})

export const {closeList,openList} = navSlice.actions;

export default navSlice.reducer;