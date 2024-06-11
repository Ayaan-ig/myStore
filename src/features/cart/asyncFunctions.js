import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const cartAPIurl = 'https://test-vercel-two-sage.vercel.app/api/v1/cart';

export const getCartItems = createAsyncThunk('cart/getAllItems',async (token)=>{
    try {
        const products = await axios.get(cartAPIurl,{
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        return products.data
    } catch (error) {
        console.log(error)
    }
});

export const addItemToCart = createAsyncThunk('cart/addItem',async (action)=>{
    try {

        const myProduct = await axios.post(cartAPIurl,
            action.product,{

                headers:{
                    'Authorization': 'Bearer ' + action.token
                }
            }
        );
        
        const products = await axios.get(cartAPIurl,{
            headers: {
                'Authorization': 'Bearer ' + action.token
            }
        })
        console.log('im coming here');
        return products.data
    } catch (error) {
        console.log(error);
    }

});

export const deleteCartItem = createAsyncThunk('cart/deleteProduct',async(action)=>{
    try {
        const myProduct = await axios.delete(`${cartAPIurl}/${action.productId}`,{
            headers:{
                Authorization: 'Bearer ' + action.token
            }
            
        });
        const products = await axios.get(cartAPIurl,{
            headers: {
                'Authorization': 'Bearer ' + action.token
            }
        })
        return products.data
    } catch (error) {
        console.log(error);
    }
});