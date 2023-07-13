import { createSlice } from "@reduxjs/toolkit";

const CartData=createSlice({
    name:'cartdata',
    initialState:{
        data:[]
    },
    reducers:{
        addcartdata:(state,action)=>{
            state.data.push(action.payload);
        },
        removefromcart:(state,action)=>{
            state.data=state.data.filter(item=>item.id !== action.payload);
        }
    }
})

export const{addcartdata,removefromcart} =CartData.actions;

export default CartData.reducer;