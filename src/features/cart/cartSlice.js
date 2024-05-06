import {  createSlice } from "@reduxjs/toolkit";
import { getCartItems,addItemToCart,deleteCartItem } from "./asyncFunctions";




const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartItems : [],
        itemsCount : 0,
        isLoadingCart: false
    },
    reducers:{
        clearCart:(state)=>{
            state.cartItems = 0;    
            state.itemsCount  = 0;
            state.isLoadingCart = false;
        }
    },

    extraReducers:(builder)=>{
        //getCartItems builders
        builder.addCase(getCartItems.pending,(state)=>{
            state.isLoadingCart = true
        });
        builder.addCase(getCartItems.fulfilled,(state,action)=>{
            state.isLoadingCart = false;
            console.log('your payload in delete')
            console.log(action.payload)
            state.cartItems = action.payload
            state.itemsCount = action.payload.count;
        });
        builder.addCase(getCartItems.rejected,(state)=>{
            state.isLoadingCart = false;
            state.cartItems = []
        });

        //addItemToCart builders
        builder.addCase(addItemToCart.pending,(state)=>{
            state.isLoadingCart = true
        });
        builder.addCase(addItemToCart.fulfilled,(state,action)=>{
            state.isLoadingCart = false;
            console.log('your payload in delete')
            console.log(action.payload)
            state.cartItems = action.payload;
            state.itemsCount = action.payload.count;
        });
        builder.addCase(addItemToCart.rejected,(state)=>{
            state.isLoadingCart = false;
        });

        //deleteCartItem builders
        builder.addCase(deleteCartItem.pending,(state)=>{
            state.isLoadingCart = true
        });
        builder.addCase(deleteCartItem.fulfilled,(state,action)=>{
            state.isLoadingCart = false;
            // state.cartItems.products.push(action.payload);
            console.log('your payload in delete')
            console.log(action.payload)
            console.log('heres the index of ');
            state.cartItems= action.payload;
            state.itemsCount = action.payload.count;

        });
        builder.addCase(deleteCartItem.rejected,(state)=>{
            state.isLoadingCart = false;
            state.cartItems = []
        });


    }


})

export const {clearCart,setLoadingFalse} = cartSlice.actions
export default cartSlice.reducer