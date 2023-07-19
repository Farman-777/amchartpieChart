import { createSlice } from "@reduxjs/toolkit";

const itemState = createSlice({
    initialState:0,
    reducers:{
        addItem:(state)=> {return state+1;},
        removeItem:(state) => {return state-1;}
    }
})

export const {addItem,removeItem} = itemState.actions;
export default itemState.reducer;